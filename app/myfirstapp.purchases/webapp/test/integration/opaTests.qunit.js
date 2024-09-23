sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfirstapp/purchases/test/integration/FirstJourney',
		'myfirstapp/purchases/test/integration/pages/PurchasesList',
		'myfirstapp/purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfirstapp/purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);