/**
 * It is a sort of estimation tool to understand the future efficiency of the project in terms of monetization.
 * There are two value streams:
 * - revenue from the purchasing of the product itself;
 * - revenue from the advertisement provided with the Google AdSense partnership.
 * The Google Analytics service collects insights about the expected revenue.
 */
class ECommerce {
    static AFFILIATION = 'freebpmnquality.github.io';
    static CURRENCY = 'USD';

    static PRODUCTS = {
        'SKU_FBPMNQ001': {
            title: 'Ads-Free FBPMNQ',
            cost: 29.00
        },
        'SKU_CPC': {
            title: 'CPC',
            cost: ECommerce.range(0.20, 15.00)
        }
    };

    static range(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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

    static clickEvent() {
        const measures = ECommerce.getECommerceMeasures('SKU_CPC');

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