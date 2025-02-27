const { builder, Builder } = require('selenium-webdriver')

async function getDriver() {
    driver = await new Builder().forBrowser('chrome').build()
    return driver
}
module.exports = { getDriver }