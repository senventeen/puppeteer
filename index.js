const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto('http://zentao.whsmwy.cn/');
  await page.type('#account', 'hezhiy');
  const element = await page.waitForSelector('#loginPanel > div > div.col-8 > form > table > tbody > tr:nth-child(2) > td > input');
  await element.type('123456aA');
  await page.click('#submit');
  const diedai = await page.waitForSelector('#menuMainNav > li:nth-child(3)');
  await diedai.click()
  await page.goto('http://zentao.whsmwy.cn/execution-story-22.html');

  // const yanfa = await page.waitForSelector('#navbar > ul > li:nth-child(6)');
  // await yanfa.click()

  // await page.type(element, '123456');
  // await page.type('.form-control', '123456');
  // await page.waitForNavigation({
  //   waitUntil: 'load'
  // });
  // await page.goto('https://cart.taobao.com');
  // await page.screenshot({ path: 'baidu2.png' });
  // while (true) {
  //   page.setDefaultNavigationTimeout(120000);
  //   await page.click('label[for="J_SelectAllCbx2"]');
  // }

})();