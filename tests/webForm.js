const { expect } = require('chai');
const { getDriver } = require('../utils/webDriver');
const WebFormPage = require('../pageObjects/webForm');
const path = require('path');

describe('Web Form Test', function () {
    let driver;
    let webFormPage;

    before(async function () {
        driver = await getDriver();
        webFormPage = new WebFormPage(driver);
    });

    it('Harus bisa mengisi form dan submit', async function () {
        await webFormPage.open();
        await webFormPage.fillTextInput('Test User');
        await webFormPage.fillPasswordInput('password123');
        await webFormPage.fillTextArea('Ini adalah teks panjang');
        await webFormPage.selectCheckbox();
        await webFormPage.selectRadioButton();
        await webFormPage.selectDropdownOption('Two');
        
        // Upload file (gunakan path absolut)
        const filePath = path.resolve(__dirname, '../fileTests/sample.txt');
        await webFormPage.uploadFile(filePath);

        await webFormPage.submitForm();
        
        // Verifikasi pesan sukses
        const successMessage = await webFormPage.getSuccessMessage();
        console.log('Pesan Sukses:', successMessage);
        expect(successMessage).to.contain('Received!');
    });

    after(async function () {
        await driver.quit();
    });
});
