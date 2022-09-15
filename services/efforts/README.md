# Efforteum

Tokenize web software development efforts using the address of a website.

## How to use?
- Visit the [homepage](https://cloudfreebpmnquality.herokuapp.com/efforts/).
- Press the "Get started" button.
- Enter the website URL and your Ethereum address.
- Press the "Submit" button.
- Use generated RPC URL and chain ID to show tokenized website development efforts in your MetaMask.

## JSON-RPC Methods

### eth_accounts

```json
{
   "jsonrpc": "2.0",
   "method": "eth_accounts",
   "params": [],
   "id": 1
}
```

### eth_getBalance

```json
{
   "jsonrpc": "2.0",
   "method": "eth_getBalance",
   "params": [
      "0x0000000000000000000000000000000000000000",
      "latest"
   ],
   "id": 1
}
```

### eth_getBlockByNumber

```json
{
   "jsonrpc": "2.0",
   "method": "eth_getBlockByNumber",
   "params": [
      "0x0",
      true
   ],
   "id": 1
}
```

Powered by [Ethereum JSON-RPC](https://eth.wiki/json-rpc/API)
