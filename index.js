const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false, defaultViewport: null, args: ['--start-maximized'],
    ignoreDefaultArgs: ['--enable-automation']
  });
  const page = await browser.newPage();
  //进入教务系统登录
  await page.goto('http://authserver.hitwh.edu.cn/authserver/login');
  await page.type('#username', 'youraccout');//登入教务系统的账号
  await page.type('#password', 'yourpassword');//登入教务系统的密码
  await page.click('#casLoginForm > p:nth-child(5) > button');
  await page.waitForNavigation();
  await page.goto('http://172.26.64.16/loginCAS');
  //进入到选课系统中
  await page.waitForSelector('#menu_5')
  await page.click('#menu_5')
  await page.goto('http://172.26.64.16/xsxk/queryXsxk?pageXklb=ty');
  await page.waitForSelector('#queryform > ul > li:nth-child(5) > div > a')
  await page.click('#queryform > ul > li:nth-child(5) > div > a')
  // 在跳转之后添加
  await page.waitForNavigation();
  await page.type('#queryform > ul > li:nth-child(4) > input', '你想上的课程名')//这里填写你要上的课程名
  await page.click('#queryform > ul > li:nth-child(5) > div')
  await page.waitForSelector('body > div.Contentbox > div > div.list > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > a')
  await page.click('body > div.Contentbox > div > div.list > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > a')
  await page.waitForSelector('#button_yes')
  await page.click('#button_yes')
})();