/**
 * 
 * @On(event = { "CREATE" }, entity = "myfirstappSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;

    // Extract the redemption data from the request
    const { customer_ID, redeemedAmount } = request.data;

    // Ensure the required data is present
    if (!customer_ID || redeemedAmount === undefined) {
        return request.error(400, 'Customer ID and redeemed amount are required.');
    }

    // Fetch the customer details
    const customer = await SELECT.one.from(Customers).where({ ID: customer_ID });

    // Ensure the customer exists
    if (!customer) {
        return request.error(404, 'Customer not found.');
    }

    // Check if the customer has enough reward points
    if (customer.totalRewardPoints < redeemedAmount) {
        return request.error(400, 'Insufficient reward points.');
    }

    // Calculate the new reward points and redeemed points
    const newTotalRewardPoints = customer.totalRewardPoints - redeemedAmount;
    const newTotalRedeemedRewardPoints = customer.totalRedeemedRewardPoints + redeemedAmount;

    // Update the customer's reward points
    await UPDATE(Customers).set({
        totalRewardPoints: newTotalRewardPoints,
        totalRedeemedRewardPoints: newTotalRedeemedRewardPoints
    }).where({ ID: customer_ID });
};