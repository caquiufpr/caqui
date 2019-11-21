/**function getwebdata() {


}

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://www.pra.ufpr.br/portal/ru/ru-centro-politecnico/');
  await page.waitFor(1000);
  // Scrape
  browser.close();
  return result;
};**/


function generate() {
  
};

var b1 = 2;
var b2 = 2;

function button(number) {
  if (number<4) {
    var resetB = document.querySelectorAll('.selected1');
  		resetB.forEach(function(thiscell) {
  			thiscell.className = "";
  		});
    document.getElementById("b"+number).className = "selected1";
    b1 = number;
  } else if (number>3) {
    var resetB = document.querySelectorAll('.selected2');
  		resetB.forEach(function(thiscell) {
  			thiscell.className = "";
  		});
    document.getElementById("b"+number).className = "selected2";
    b2 = number;
  };
};
