/**
 * Code is auto-generated by Application Logic, DO NOT EDIT.
 * @version(2.0)
 */
const LCAPApplicationService = require('@sap/low-code-event-handler');
const purchases_Logic = require('./code/purchases-logic');
const redemptions_Logic = require('./code/redemptions-logic');

class myfirstappSrv extends LCAPApplicationService {
    async init() {

        this.on('CREATE', 'Purchases', async (request, next) => {
            await purchases_Logic(request);
            return next();
        });

        this.on('CREATE', 'Redemptions', async (request, next) => {
            await redemptions_Logic(request);
            return next();
        });

        return super.init();
    }
}


module.exports = {
    myfirstappSrv
};