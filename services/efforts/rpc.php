<?php
// ==================================================
// DEPENDENCIES
// ==================================================

require_once 'functions.php';

// ==================================================
// HEADERS
// ==================================================

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');

header('Content-Type: application/json');

error_reporting(E_ERROR | E_PARSE);

// ==================================================
// GLOBAL VARIABLES
// ==================================================

$request            = file_get_contents('php://input');
$jsonRPC            = json_decode($request);
$data               = getDefaultResponse();

// ==================================================
// CONSTANTS
// ==================================================

$_CHAIN_ID          = 4321;
$_ADDRESS           = '0x0000000000000000000000000000000000000000';
$_BALANCE           = 0;
$_EXTRA_DATA        = [];

$_URL_PARAM         = 'p';

$_ADDRESS_PARAM     = 'address';
$_VALUE_PARAM       = 'value';

// ==================================================
// CALCULATIONS
// ==================================================

if (isset($_GET[$_URL_PARAM])) {
    $_JSON_PARAMS = json_decode(base64_decode($_GET[$_URL_PARAM]), true);

    $_CHAIN_ID      = 1e4 + array_sum(str_split(preg_replace('/[^0-9.]+/', '', hash('sha256', strval($_JSON_PARAMS[$_VALUE_PARAM])))));
    $_ADDRESS       = $_JSON_PARAMS[$_ADDRESS_PARAM];

    if ($jsonRPC->method == 'eth_getBalance' || $jsonRPC->method == 'eth_getBlockByNumber') {
        $_BALANCE   = floatval($_JSON_PARAMS[$_VALUE_PARAM]) / getETHPrice();
    }
}

$_BLOCK             = getBlock($_CHAIN_ID, [$_ADDRESS => $_BALANCE], $_EXTRA_DATA);

// ==================================================
// JSON RESPONSE
// ==================================================

require_once 'response.php';
