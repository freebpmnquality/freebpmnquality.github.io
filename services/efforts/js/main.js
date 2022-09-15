function estimateEfforts() {
    try {
        var URL = $('#website').val();
        var address = $('#address').val();
        var totalValue = 0;

        if (URL && address) {
            var separateURLs = URL.split(';');

            if ($('#parseSitemap').is(':checked')) {
                var sitemapURLs = [];

                for (var url in separateURLs) {
                    sitemapURLs = sitemapURLs.concat(AMMUtil.getSitemapURLs(separateURLs[url]));
                }

                separateURLs = sitemapURLs;
            }

            for (var url in separateURLs) {
                totalValue += EffortsLib.getValue(separateURLs[url]);
            }

            var jsonRPCParams = { address: address, value: totalValue };
            var encodedParams = btoa(JSON.stringify(jsonRPCParams));

            var RPC = 'https://cloudfreebpmnquality.herokuapp.com/efforts/rpc.php?p=' + encodedParams;

            $('#nw-name').val('<Your Project Name> - Efforteum');
            $('#nw-rpc').val(RPC);
            $('#nw-symbol').val('ETH');

            if ($('#nativeWallet').is(':checked')) {
                window.open('../efforts/wallet/?p=' + encodedParams);
            }

            $.ajax({
                type: 'POST',
                url: 'rpc.php?p=' + encodedParams,
                dataType: 'json',
                data: JSON.stringify({
                    'jsonrpc': '2.0',
                    'method': 'net_version',
                    'params': [],
                    'id': 1
                }),
                success: function(response) {
                    $('#nw-chainid').val(response.result);
                },
                error: function(err) {
                    throw new Error(err);
                }
            });
        } else {
            throw new Error('Enter your Website URL and Ethereum address!');
        }
    } catch (err) {
        console.error(err);

        alert(err.message);
    } finally {
        return false;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});