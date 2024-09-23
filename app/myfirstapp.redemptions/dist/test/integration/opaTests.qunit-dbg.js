sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfirstapp/redemptions/test/integration/FirstJourney',
		'myfirstapp/redemptions/test/integration/pages/RedemptionsList',
		'myfirstapp/redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfirstapp/redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);