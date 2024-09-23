sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfirstapp/customers/test/integration/FirstJourney',
		'myfirstapp/customers/test/integration/pages/CustomersList',
		'myfirstapp/customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfirstapp/customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);