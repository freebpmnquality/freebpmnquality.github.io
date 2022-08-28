class ECommerce {
    static AFFILIATION = 'freebpmnquality.github.io';
    static CURRENCY = 'USD';

    static PRODUCTS = {
        'SKU_FBPMNQ001': {
            title: 'Ads-Free FBPMNQ',
            cost: 29.00
        }
    };

    static getTransactionID() {
        return 'T_' + Math.floor(Date.now() * Math.random()).toString();
    }

    static getECommerceMeasures(productSKU) {
        const product = ECommerce.PRODUCTS[productSKU];

        return {
            transaction: ECommerce.getTransactionID(),
            affiliation: ECommerce.AFFILIATION,
            sku: productSKU,
            product: product.title,
            price: {
                value: product.cost,
                currency: ECommerce.CURRENCY
            }
        };
    }

    static purchaseEvent(measures) {
        gtag('event', 'purchase', {
            transaction_id: measures.transaction,
            affiliation: measures.affiliation,
            value: measures.price.value,
            currency: measures.price.currency,
            items: [{
                item_id: measures.sku,
                item_name: measures.product
            }]
        });
    }
}