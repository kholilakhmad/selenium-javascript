const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require('assert');

(async function firstTest() {
    let driver;

    try {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html')
      
        await driver.manage().setTimeouts({implicit: 500});

    } catch (e) {
        console.log(e);
    }
})