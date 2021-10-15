const Page = require('./page');

class searchReservationPage extends Page {

    get hotelsTab() { return $('button[aria-controls="hotels"]') };
    get hotelsCityNameBox() { return $('.selection') };
    get hotelsInputCityName() { return $('.select2-search__field') };
    get chooseCityName() { return $('.flag.de') };
    get chooseTrvellers() { return $('#hotels-search a.dropdown-toggle') };
    get children() { return $('#hotels-search #childs~.qtyInc > i') };
    get nationalitiy() { return $('#nationality') };
    get buttonSearch() { return $('#submit') };

    enterDate(date1, date2) {
        browser.execute(`document.getElementById('checkin').value='${date1}'`);
        browser.execute(`document.getElementById('checkout').value='${date2}'`);
    }


}
module.exports = new searchReservationPage();