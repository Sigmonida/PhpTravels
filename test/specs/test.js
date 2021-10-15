const searchReservationPage = require('../pageobjects/searchReservation.page');

describe('PhP Travels site', () => {
    it('should find a hotel in Berlin for a specific date for two adults and one child', async function () {
        await searchReservationPage.open();
        await searchReservationPage.hotelsTab.click();
        await searchReservationPage.hotelsCityNameBox.click();
        await searchReservationPage.hotelsInputCityName.addValue("Berlin");
        await searchReservationPage.chooseCityName.click();
        searchReservationPage.enterDate('11-11-2022', '21-11-2022');
        await searchReservationPage.chooseTrvellers.click();
        await searchReservationPage.children.waitForClickable({ timeout: 1000 });
        await searchReservationPage.children.click();
        await searchReservationPage.nationalitiy.selectByAttribute('value', 'RS');
        await searchReservationPage.buttonSearch.click();
    });
});


