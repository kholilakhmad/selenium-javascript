const { By, until } = require('selenium-webdriver');

class WebFormPage {
    constructor(driver) {
        this.driver = driver;
        this.textInput = By.id('my-text-id');
        this.passwordInput = By.name('my-password');
        this.textArea = By.name('my-textarea');
        this.checkbox = By.name('my-checkbox');
        this.radioButton = By.id('my-radio-2');
        this.selectDropdown = By.name('my-select');
        this.fileUpload = By.name('my-file');
        this.submitButton = By.css('button[type="submit"]');
        this.successMessage = By.id('message');
    }

    async open(url = 'https://www.selenium.dev/selenium/web/web-form.html') {
        await this.driver.get(url);
    }

    async fillTextInput(text) {
        await this.driver.findElement(this.textInput).sendKeys(text);
    }

    async fillPasswordInput(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async fillTextArea(text) {
        await this.driver.findElement(this.textArea).sendKeys(text);
    }

    async selectCheckbox() {
        await this.driver.findElement(this.checkbox).click();
    }

    async selectRadioButton() {
        await this.driver.findElement(this.radioButton).click();
    }

    async selectDropdownOption(value) {
        let dropdown = await this.driver.findElement(this.selectDropdown);
        await dropdown.sendKeys(value);
    }

    async uploadFile(filePath) {
        let fileInput = await this.driver.findElement(this.fileUpload);
        await fileInput.sendKeys(filePath);
    }

    async submitForm() {
        await this.driver.findElement(this.submitButton).click();
    }

    async getSuccessMessage() {
        await this.driver.wait(until.elementLocated(this.successMessage), 5000);
        return await this.driver.findElement(this.successMessage).getText();
    }
}

module.exports = WebFormPage;
