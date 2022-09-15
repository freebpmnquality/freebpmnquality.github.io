<?php

function getDefaultResponse()
{
    $data['id'] = 1;
    $data['jsonrpc'] = '2.0';
    $data['result'] = '';

    return $data;
}

function bchexdec($hex)
{
    if (strlen($hex) == 1) {
        return hexdec($hex);
    } else {
        $remain = substr($hex, 0, -1);

        $last = substr($hex, -1);

        return bcadd(bcmul(16, bchexdec($remain)), hexdec($last));
    }
}

function bcdechex($dec)
{
    $last = bcmod($dec, 16);

    $remain = bcdiv(bcsub($dec, $last), 16);

    if ($remain == 0) {
        return dechex($last);
    } else {
        return bcdechex($remain) . dechex($last);
    }
}

function getWeiPerEth()
{
    return 1000000000000000000;
}

function getETHPrice()
{
    $_ETH_PRICE_API = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

    $json = file_get_contents($_ETH_PRICE_API);

    $object = json_decode($json);

    return $object->USD;
}

function getCost($website)
{
    $_NEW_LINE          = "\n";
    $_A_COEFF           = 2.4;
    $_B_COEFF           = 1.05;
    $_MONTH_HOURS       = 152;
    $_HOURLY_WAGE       = 28;

    try {
        $pages = explode(";", $website);

        $pagesLines = 0;

        foreach ($pages as $page) {
            $pagesLines += substr_count(file_get_contents($page), $_NEW_LINE);
        }

        $totalKiloLines = $pagesLines / 1000;

        return $_A_COEFF * pow($totalKiloLines, $_B_COEFF) * $_MONTH_HOURS * $_HOURLY_WAGE * (1 / getETHPrice());
    } catch (Throwable $e) {
        return 0;
    }
}

function getBlock($chainId, $allocBalance, $extraData)
{
    $allocArray = [];

    foreach ($allocBalance as $address => $balance) {
        $allocArray[$address] = [
            'balance' => '0x' . bcdechex(sprintf('%.0f', $balance * getWeiPerEth()))
        ];
    }

    $genesisBlock = [
        'config'        => [
            'chainId'           => $chainId,
            'homesteadBlock'    => 0,
            'eip155Block'       => 0,
            'eip158Block'       => 0
        ],
        'alloc'         => $allocArray,
        'coinbase'      => '0x0000000000000000000000000000000000000000',
        'difficulty'    => '0x20000',
        'extraData'     => $extraData,
        'gasLimit'      => '0x2fefd8',
        'nonce'         => '0x0000000000000042',
        'mixhash'       => '0x0000000000000000000000000000000000000000000000000000000000000000',
        'parentHash'    => '0x0000000000000000000000000000000000000000000000000000000000000000',
        'timestamp'     => '0x00',
        'number'        => '0x0'
    ];

    $genesisBlock['hash'] = '0x' . hash('sha256', json_encode($genesisBlock));

    return $genesisBlock;
}
