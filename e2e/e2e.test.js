import puppetteer from 'puppeteer';

jest.setTimeout(90000); // default puppeteer timeout

describe('tooltip', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  // закрывает браузер
  afterAll(async () => {
    await browser.close();
  });
  test('tooltip show on page', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.container');
    const button = await page.$('.btn');
    await button.click();
    await page.waitForSelector('.tooltip');
  });
});
