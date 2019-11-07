function getwebdata() {


}

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://www.pra.ufpr.br/portal/ru/ru-centro-politecnico/');
  await page.waitFor(1000);
  // Scrape
  browser.close();
  return result;
};
