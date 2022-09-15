<?php
require_once '../config.php';

require_once SITE_ROOT . '/backoffice/database/repository.php';

require_once SITE_ROOT . '/backoffice/contract/QBMT/contract.php';

require_once SITE_ROOT . '/backoffice/contract/QBMT-ETH/contract.php';

require_once SITE_ROOT . '/backoffice/contract/CPC-ETH/contract.php';

require_once SITE_ROOT . '/efforts/functions.php';

require_once SITE_ROOT . '/backoffice/chain/qbmtLedger.php';

require_once SITE_ROOT . '/backoffice/chain/cpcLedger.php';

$tokenPrice = floatval(read('liquidity')['liquidity']) / QBMTContract::totalSupply();
$marketCap = $tokenPrice * QBMTContract::TOTAL_SUPPLY;
$ethPrice = getETHPrice();
$qbmtEthTotalSupply = QBMT_ETHContract::totalSupply();
$cpcEthTotalSupply = CPCETHContract::totalSupply();
$cpcLastBlock = CPCLedger::getLastBlock();
$qbmtLastBlock = QBMTLedger::getLastBlock();

function printHolders($holders, $tokenPrice, $symbol, $totalSupply)
{
    arsort($holders);
    $reservedTokens = 0;

    foreach (array_keys($holders) as $address) {
        $reservedTokens += $holders[$address];
    }
?>

    <p class="mb-0">
        <kbd><?= count($holders) ?></kbd> <?= $reservedTokens ?> <?= $symbol ?> <span class="text-muted">$<?= number_format($reservedTokens * $tokenPrice, 2) ?></span>
    </p>

    <?php foreach ($holders as $address => $amount) : ?>
        <p class="mb-0">
            <code><?= $address ?></code>: <?= $amount ?> <?= $symbol ?> <span class="text-muted">$<?= number_format($amount * $tokenPrice, 2) ?> <kbd><?= number_format($amount / $totalSupply * 100, 2) ?>%</kbd></span>
        </p>
<?php endforeach;
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon">

    <title>freebpmnqualityScan</title>
    <meta name="title" content="freebpmnqualityScan">
    <meta name="description" content="A blockchain token explorer of the freebpmnquality ecosystem.">

    <style>
        body {
            font-family: 'Kanit', sans-serif;
            background: rgb(0, 198, 255);
            background: radial-gradient(circle, rgba(0, 198, 255, 0.4) 0%, rgba(0, 108, 255, 0.4) 100%);
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand">
            <img src="img/icon.png" width="30" height="30" class="d-inline-block align-top mr-1" alt="icon" style="border-radius: 1rem"> freebpmnqualityScan
        </span>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);" type="button" data-toggle="modal" data-target="#rpcModal">EVM Networks</span></a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="modal fade" id="rpcModal" tabindex="-1" role="dialog" aria-labelledby="rpcModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="border-radius: 1rem;">
                <div class="modal-header">
                    <h5 class="modal-title" id="rpcModalLabel">EVM Networks</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>You can <a href="https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC" target="_blank">set up</a> your MetaMask wallet to connect to our EVM networks. You can then interact with our solutions.</p>

                    <h5 class="badge badge-primary">QBMT-ETH Ledger</h5>
                    <p>
                        <img src="../swap/img/token.png" width="32" class="mb-1">
                        <br>
                        <span class="text-muted mb-1">Network Name:</span> <span>QBMT Token Assets</span> <span class="badge badge-success">Public</span>
                        </br>
                        <span class="text-muted mb-1">RPC URL:</span> <a href="../backoffice/contract/QBMT/" target="_blank" style="word-wrap: break-word;">https://cloudfreebpmnquality.herokuapp.com/backoffice/contract/QBMT/</a>
                        </br>
                        <span class="text-muted mb-1">Chain ID:</span> <?= QBMTChain::ID ?>
                        </br>
                        <span class="text-muted mb-1">Currency Symbol:</span> <span><?= QBMTContract::SYMBOL ?></span>
                    </p>
                    <hr>
                    <p>
                        <img src="img/eth.png" width="32" class="mb-1">
                        <br>
                        <span class="text-muted mb-1">Network Name:</span> <span>QBMT-ETH Assets</span> <span class="badge badge-danger">Private</span>
                        </br>
                        <span class="text-muted mb-1">RPC URL:</span> <a href="../backoffice/contract/QBMT-ETH/" target="_blank" style="word-wrap: break-word;">https://cloudfreebpmnquality.herokuapp.com/backoffice/contract/QBMT-ETH/</a>
                        </br>
                        <span class="text-muted mb-1">Chain ID:</span> <?= QBMT_ETHChain::ID ?>
                        </br>
                        <span class="text-muted mb-1">Currency Symbol:</span> <span><?= QBMT_ETHContract::SYMBOL ?></span>
                    </p>
                    <hr>

                    <h5 class="badge badge-primary">CPC-ETH Ledger</h5>
                    <p>
                        <img src="img/eth2.png" width="32" class="mb-1">
                        <br>
                        <span class="text-muted mb-1">Network Name:</span> <span>CPC-ETH Assets</span> <span class="badge badge-danger">Private</span>
                        </br>
                        <span class="text-muted mb-1">RPC URL:</span> <a href="../backoffice/contract/CPC-ETH/" target="_blank" style="word-wrap: break-word;">https://cloudfreebpmnquality.herokuapp.com/backoffice/contract/CPC-ETH/</a>
                        </br>
                        <span class="text-muted mb-1">Chain ID:</span> <?= CPCETHChain::ID ?>
                        </br>
                        <span class="text-muted mb-1">Currency Symbol:</span> <span><?= CPCETHContract::SYMBOL ?></span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4 mb-4 ml-4 mr-4">
        <div class="row">
            <div class="col-sm-5 mb-4">
                <!-- [start] QBMT -->
                <div class="card h-100" style="border-radius: 1rem;">
                    <div class="card-body">
                        <div class="table-responsive mb-0">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Token:</th>
                                        <td><img src="img/eth.png" width="32"> QBMT-<?= QBMT_ETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Price:</th>
                                        <td>$<?= number_format($ethPrice, 8) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Market Cap:</th>
                                        <td>$<?= number_format($ethPrice * $qbmtEthTotalSupply, 2) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Total Supply:</th>
                                        <td><?= number_format($qbmtEthTotalSupply, 18) ?> <?= QBMT_ETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Circulating Supply:</th>
                                        <td><?= number_format($qbmtEthTotalSupply, 18) ?> <?= QBMT_ETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Holders:</th>
                                        <td><?php printHolders(QBMT_ETHContract::balanceOf(), $ethPrice, QBMT_ETHContract::SYMBOL, $qbmtEthTotalSupply); ?></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- [end] QBMT -->
            </div>
            <div class="col-sm-7 mb-4">
                <!-- [start] QBMT-ETH -->
                <div class="card h-100" style="border-radius: 1rem;">
                    <div class="card-body">
                        <div class="table-responsive mb-0">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Token:</th>
                                        <td><img src="../swap/img/token.png" width="32"> <?= QBMTContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Price:</th>
                                        <td>$<?= number_format($tokenPrice, 8) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Market Cap:</th>
                                        <td>$<?= number_format($marketCap, 2) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Total Supply:</th>
                                        <td><?= QBMTContract::TOTAL_SUPPLY ?> <?= QBMTContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Circulating Supply:</th>
                                        <td><?= QBMTContract::totalSupply() ?> <?= QBMTContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Holders:</th>
                                        <td><?php printHolders(QBMTContract::balanceOf(), $tokenPrice, QBMTContract::SYMBOL, QBMTContract::TOTAL_SUPPLY); ?></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- [end] QBMT-ETH -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 mb-4">
                <!-- [start] QBMT Chain -->
                <div class="card h-100" style="border-radius: 1rem;">
                    <div class="card-body">
                        <div class="table-responsive mb-0">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row" colspan="2">
                                            <h5 class="badge badge-primary">QBMT-ETH Ledger</h5>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last block:</th>
                                        <td><code><?= $qbmtLastBlock['hash'] ?></code></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Timestamp:</th>
                                        <td><?= date('Y-m-d H:i:s', $qbmtLastBlock['timestamp']) ?></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Previous block:</th>
                                        <td><code><?= $qbmtLastBlock['prevHash'] ?></code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- [end] QBMT Chain -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 mb-4">
                <!-- [start] CPC-ETH -->
                <div class="card h-100" style="border-radius: 1rem;">
                    <div class="card-body">
                        <div class="table-responsive mb-0">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Token:</th>
                                        <td><img src="img/eth2.png" width="32"> CPC-<?= CPCETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Price:</th>
                                        <td>$<?= number_format($ethPrice, 8) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Market Cap:</th>
                                        <td>$<?= number_format($ethPrice * $cpcEthTotalSupply, 2) ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Total Supply:</th>
                                        <td><?= number_format($cpcEthTotalSupply, 18) ?> <?= CPCETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Circulating Supply:</th>
                                        <td><?= number_format($cpcEthTotalSupply, 18) ?> <?= CPCETHContract::SYMBOL ?></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Holders:</th>
                                        <td><?php printHolders(CPCETHContract::balanceOf(), $ethPrice, CPCETHContract::SYMBOL, $cpcEthTotalSupply); ?></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- [end] CPC-ETH -->
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 mb-4">
                <!-- [start] CPC Chain -->
                <div class="card h-100" style="border-radius: 1rem;">
                    <div class="card-body">
                        <div class="table-responsive mb-0">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row" colspan="2">
                                            <h5 class="badge badge-primary">CPC-ETH Ledger</h5>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last block:</th>
                                        <td><code><?= $cpcLastBlock['hash'] ?></code></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Timestamp:</th>
                                        <td><?= date('Y-m-d H:i:s', $cpcLastBlock['timestamp']) ?></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Previous block:</th>
                                        <td><code><?= $cpcLastBlock['prevHash'] ?></code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- [end] CPC Chain -->
            </div>
        </div>
    </div>

    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
</body>

</html>