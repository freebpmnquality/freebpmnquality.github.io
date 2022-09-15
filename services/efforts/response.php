<?php

// ==================================================
// RPC CALLS PROCESSING
// ==================================================

if ($jsonRPC->method == 'eth_chainId') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = strtolower('0x' . bcdechex($_BLOCK['config']['chainId']));
}

if ($jsonRPC->method == 'net_version') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = $_BLOCK['config']['chainId'];
}

if ($jsonRPC->method == 'eth_accounts') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = array_keys($_BLOCK['alloc']);
}

if ($jsonRPC->method == 'eth_call') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = '0x0';
}

if ($jsonRPC->method == 'eth_getBalance') {
    $address = $jsonRPC->params[0];

    $balance = 0;

    foreach ($_BLOCK['alloc'] as $key => $val) {
        if (strcasecmp($address, $key) == 0) {
            $balance = $val['balance'];
            break;
        }
    }

    $data['id'] = $jsonRPC->id;
    $data['result'] = strtolower($balance);
}

if ($jsonRPC->method == 'eth_sendTransaction') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = '0x0';
}

if ($jsonRPC->method == 'eth_sign') {
    $data['id'] = $jsonRPC->id;
    $data['result'] = '0x0';
}

if ($jsonRPC->method == 'eth_getBlockByNumber') {
    $hash = $jsonRPC->params[0];

    if (strcasecmp($hash, $_BLOCK['number']) == 0) {
        $data['result'] = $_BLOCK;
    } else {
        $data['result'] = [];
    }

    $data['id'] = $jsonRPC->id;
}

echo json_encode($data);
