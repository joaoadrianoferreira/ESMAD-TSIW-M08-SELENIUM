const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver');

(async function openChromeTest() {
    try {
        let driver = await new Builder()
                    .setChromeOptions(service)
                    .forBrowser('chrome')
                    .build();

        await driver.get('https://www.google.com');

        // Get title 
        let title = await driver.getTitle();
        console.log(title); 
      
        // Accept Cookies 
        let cookie_btn = await driver.findElement(By.id('L2AGLb'));
        await cookie_btn.click();

        // Search Something 
        let search_box = await driver.findElement(By.name('q'));
        await search_box.sendKeys('Selenium');
        await driver.sleep(1000)
        await search_box.sendKeys(Key.RETURN);
        await driver.sleep(3000)
        await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })();
  