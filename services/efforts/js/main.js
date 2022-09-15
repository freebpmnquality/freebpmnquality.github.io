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

            if ($('#nativeWallet').is(':checked')) {
                window.open('../efforts/wallet/?p=' + encodedParams);
            }
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