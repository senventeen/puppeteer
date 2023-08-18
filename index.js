const puppeteer = require('puppeteer');

(async () => {
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   defaultViewport: null,
  //   args: ['--start-maximized'],
  //   ignoreDefaultArgs: ['--enable-automation']
  // });
  // //创建一个Page实例
  // const page = await browser.newPage();
  // //跳转JD首页
  // await page.goto("https://www.jd.com");
  // //获取输入框元素并在输入框内输入‘手机’
  // const input = await page.$('#key');
  // await input.type('手机');
  // //模拟键盘“回车”键
  // await page.keyboard.press('Enter');
  // //等待元素加载成功
  // // await page.waitForSelector('#J_goodsList > ul > li:nth-child(1)');
  // //获取元素innerText属性
  // // const firstText = await page.$eval('#J_goodsList > ul > li:nth-child(1)', el => el.innerText);
  // // console.log('firstText', firstText);
  // //获取一组元素的innerText属性
  // await page.waitForSelector('ul.gl-warp>li');
  // const list = await page.$$eval('ul.gl-warp>li', eles => eles.map(ele => ele.innerText));
  // console.log('list', list);



  const browser = await puppeteer.launch({
    headless: false, defaultViewport: null, args: ['--start-maximized'],
    ignoreDefaultArgs: ['--enable-automation']
  });
  const page = await browser.newPage();
  await page.goto('http://authserver.hitwh.edu.cn/authserver/login');
  await page.type('#username', 'yournum');
  await page.type('#password', 'yourpassword');
  await page.click('#casLoginForm > p:nth-child(5) > button');
  await page.waitForNavigation();
  await page.goto('http://172.26.64.16/loginCAS');
  await page.waitForSelector('#menu_8')
  await page.goto('http://172.26.64.16/xspjgd/queryPjzn');
  await page.click('#queryform > div > div:nth-child(3) > div')

  // const element = await page.waitForSelector('#loginPanel > div > div.col-8 > form > table > tbody > tr:nth-child(2) > td > input');
  // await element.type('123456aA');
  // await page.click('#submit');
  // await page.waitForNavigation();
  // await page.goto('http://zentao.whsmwy.cn/execution-story-22.html', {
  //   waitUntil: "domcontentloaded",
  // });
  // await page.waitForNavigation();
  // page.setDefaultNavigationTimeout(52000);
  // console.log("chenggong1")
  // await page.screenshot({ path: 'baidu3.png' });
  // console.log("chenggong2")

  // if (page.url == 'http://zentao.whsmwy.cn/execution-story-22.html?tid=g2dcfjai') {
  //   console.log("chenggong3")
  //   await page.screenshot({ path: 'baidu5.png' });
  // };
  // await page.waitForSelector('#mainMenu > div.btn-toolbar.pull-left > a:nth-child(2)');
  // await page.waitForNavigation({ waitUntil: 'networkidle0' });
  // // page.setDefaultNavigationTimeout(120000);
  // await page.waitForSelector('#storyTableList');
  // console.log('ssssww')
  // const content = await page.$eval('#story1426', el => el.innerText());
  // console.log(content);
  // await page.click('#navbar > ul > li:nth-child(6) > a')
  // const yanfa = await page.waitForSelector('#navbar > ul > li:nth-child(6)');
  // await yanfa.click()
  // await page.type(element, '123456');
  // await page.type('.form-control', '123456');

  // await page.goto('https://cart.taobao.com');
  // await page.screenshot({ path: 'baidu2.png' });
  // while (true) {
  //   page.setDefaultNavigationTimeout(120000);
  //   await page.click('label[for="J_SelectAllCbx2"]');
  // }

})();