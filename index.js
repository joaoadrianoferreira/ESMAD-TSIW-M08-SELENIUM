const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("chromedriver");

(async function openChromeTest() {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser("chrome")
      .build();

    driver.manage().window().maximize();

    await driver.get("https://rd.riopele.pt/login.php");
    let username_input = await driver.findElement(By.name("username"));
    await username_input.sendKeys("xxxxxxxxxxxxxxxxxx");

    let password_input = await driver.findElement(By.name("password"));
    await password_input.sendKeys("xxxxxxxxxxxxxxx*");

    let login_btn = await driver.findElement(By.id("btnLogin"));
    await login_btn.click();

    await driver.sleep(3000);

    let menu = await driver.findElement(
      By.xpath("//*[text()='Coleções Digitais']")
    );
    await menu.click();

    await driver.sleep(1000);

    let menu_two = await driver.findElement(
      By.xpath('//a[@href="../views/arquivo-2/narquivo2.php"]')
    );
    await menu_two.click();

    await driver.sleep(3000);

    let colecao = await driver.findElement(
      By.xpath('//a[@href="narquivo2.php?cat=31"]')
    );
    await colecao.click();

    await driver.sleep(3000);

    let artigo = await driver.findElement(By.id("73765"));
    await artigo.click();

    await driver.sleep(8000);

    let add_btn = await driver.findElement(By.id("aCarrinhoDesktop_73765"));
    await add_btn.click();

    let close_btn = await driver.findElement(By.id("fechapop"));
    await close_btn.click();

    await driver.sleep(1000);

    await driver.get("https://rd.riopele.pt/views/arquivo-2/ncart.php");
  } catch (error) {
    console.log(error);
  }
})();
