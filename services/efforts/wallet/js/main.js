$(document).ready(function() {
    var encodedParams = new URL(window.location.href).searchParams.get('p');
    var jsonRPCParams = JSON.parse(atob(encodedParams));

    var address = jsonRPCParams.address;
    var value = jsonRPCParams.value;

    if (address && value) {
        $('#account').text(address.substring(0, 5) + '...' + address.substring(address.length - 4, address.length));

        $.ajax({
            type: 'GET',
            url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
            success: function(data) {
                var USDinETH = data.USD;

                $.ajax({
                    type: 'POST',
                    url: '../rpc.php?p=' + encodedParams,
                    dataType: 'json',
                    data: JSON.stringify({
                        'jsonrpc': '2.0',
                        'method': 'eth_getBlockByNumber',
                        'params': ['0x0', true],
                        'id': 1
                    }),
                    success: function(data) {
                        var balanceETH = parseInt(data.result.alloc[address].balance, 16) / 1e18;
                        var balanceUSD = USDinETH * balanceETH;

                        $('#balance-eth').text(balanceETH.toLocaleString('en-US'));
                        $('#balance-usd').text(balanceUSD.toLocaleString('en-US'));

                        var qrData = 'https://cloudfreebpmnquality.herokuapp.com/efforts/wallet/?p=' + encodedParams;

                        $('#qrData').html(`<a href="${qrData}" target="_blank">Your Efforteum Tokenized Efforts</a>`);

                        $('#qrAccess').html(`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}" alt="qr-code" style="width: 150px;">`);

                        $('#loadingSpinner').hide();
                    },
                    error: function(err) {
                        throw new Error(err);
                    }
                });
            },
            error: function(err) {
                throw new Error(err);
            }
        });
    }
});