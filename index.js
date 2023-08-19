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
  // await page.goto('https://cart.taobao.com');
  // await page.waitForNavigation()
  // await page.waitForSelector('#J_SelectAll1 > div')
  // await page.click('#J_SelectAll1 > div')
  // await page.screenshot({ path: 'baidu3.png' });
  // await page.waitForSelector('#J_SmallSubmit')
  // await page.click('#J_SmallSubmit')
  // await page.screenshot({ path: "baidu.png" })
  // await page.waitForNavigation()
  // await page.waitForSelector('#submitOrderPC_1 > div > a.go-btn')
  // await page.click('#submitOrderPC_1 > div > a.go-btn')
  // await page.screenshot({ path: 'baidu4.png' });
  // 评价 statrt
  await page.goto('http://authserver.hitwh.edu.cn/authserver/login');
  await page.type('#username', 'yourname');
  await page.type('#password', 'tourpassword');
  await page.click('#casLoginForm > p:nth-child(5) > button');
  await page.waitForNavigation();
  await page.goto('http://172.26.64.16/loginCAS');
  await page.waitForSelector('#menu_5')
  await page.click('#menu_5')
  await page.goto('http://172.26.64.16/xsxk/queryXsxk?pageXklb=szhx');
  await page.waitForSelector('#queryform > ul > li:nth-child(5) > div > a')
  await page.click('#queryform > ul > li:nth-child(5) > div > a')
  // 在跳转之后添加
  await page.waitForNavigation(); // 等待页面跳转
  const content = []
  let i = 2
  let j = 4
  while (j <= 6) {
    i = 2
    j++
    const length = await page.$$eval(`body > div.Contentbox > div > div.list > table > tbody > tr`, eles => eles.map(ele => ele.innerText))
    console.log(length.length)
    while (i <= length.length) {
      const wenhua = await page.$$eval(`body > div.Contentbox > div > div.list > table > tbody > tr:nth-child(${i}) > td:nth-child(4)`, eles => eles.map(ele => ele.innerText))
      i++
      content.push(wenhua.toString())
    }
    await page.click(`body > div.Contentbox > div > div.youtube > ul > li:nth-child(${j})`)
    if (j <= 6) {
      await page.waitForNavigation()
    }
  }
  console.log(JSON.stringify(content))
  //爬取评教情况
  // await page.waitForSelector('#menu_8')
  // await page.goto('http://172.26.64.16/xspjgd/queryPjzn');
  // await page.click('#queryform > div > div:nth-child(3) > div')
  // await page.waitForSelector('#queryform > div.addpj > ul > li:nth-child(22) > table > tbody > tr > td:nth-child(3) > div > a')
  // await page.click('#queryform > div.addpj > ul > li:nth-child(22) > table > tbody > tr > td:nth-child(3) > div > a')
  // const content = await page.$$eval('#queryform > div.scrollx > table > tbody > tr:nth-child(4)', eles => eles.map(ele => ele.innerText))
  // console.log(content.toString())
  // await page.goto('http://172.26.64.16/xspjgd/queryPjzn');
  // await page.click('#queryform > div > div:nth-child(3) > div')
  // await page.waitForSelector('#queryform > div.addpj > ul > li:nth-child(23) > table > tbody > tr > td:nth-child(3) > div > a')
  // await page.click('#queryform > div.addpj > ul > li:nth-child(23) > table > tbody > tr > td:nth-child(3) > div > a')
  // const content2 = await page.$$eval('#queryform > table > tbody > tr:nth-child(4)', eles => eles.map(ele => ele.innerText))
  // console.log(content2.toString())
  // await page.goto('http://172.26.64.16/xspjgd/queryPjzn');
  // await page.click('#queryform > div > div:nth-child(3) > div')
  // await page.waitForSelector('#queryform > div.addpj > ul > li:nth-child(24) > table > tbody > tr > td:nth-child(3) > div > a')
  // await page.click('#queryform > div.addpj > ul > li:nth-child(24) > table > tbody > tr > td:nth-child(3) > div > a')
  // const content3 = await page.$$eval('#zbtable > tbody > tr:nth-child(5)', eles => eles.map(ele => ele.innerText))
  // console.log(content3.toString())
  // 评教 end

  // const element = await page.waitForSelector('#loginPanel > div > div.col-8 > form > table > tbody > tr:nth-child(2) > td > input');
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