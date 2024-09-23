/**
 * 
 * @On(event = { "CREATE" }, entity = "myfirstappSrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Purchases, Customers } = cds.entities;

    // Extract the data from the request
    const { purchaseValue, customer_ID } = request.data;

    // Calculate reward points
    const rewardPoints = Math.floor(purchaseValue / 10);

    // Update the purchase with calculated reward points
    request.data.rewardPoints = rewardPoints;

    // Fetch the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: customer_ID });

    if (customer) {
        // Update the customer's total purchase value and total reward points
        const updatedCustomer = {
            totalPurchaseValue: customer.totalPurchaseValue + purchaseValue,
            totalRewardPoints: customer.totalRewardPoints + rewardPoints
        };

        // Apply the updates to the customer entity
        await UPDATE(Customers).set(updatedCustomer).where({ ID: customer_ID });
    }
};