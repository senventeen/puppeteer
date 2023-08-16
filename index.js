const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto('https://login.taobao.com');
  await page.waitForNavigation({
    waitUntil: 'load'
  });
  await page.goto('https://cart.taobao.com');

  await page.screenshot({ path: 'baidu2.png' });
  while (true) {
    page.setDefaultNavigationTimeout(120000);
    await page.click('label[for="J_SelectAllCbx2"]');
  }

})();