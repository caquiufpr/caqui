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

  //Get variables;
  var textToWrite = document.getElementById("textarea").value;
  var date = getTheDate();
  var picture = getThePicture();
  // Draw on Canvas
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.rect(0,0,1080,1920);
  ctx.fillStyle = "gray";
  ctx.fill();

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

  ctx.drawImage(picture, 0, 0);

  alert("Imagem gerada com sucesso!");
};

var b1 = 0;
var b2 = 0;

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

  if (number == 1) {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

       // getting a hold of the file reference
       var file = e.target.files[0];

       // setting up the reader
       var reader = new FileReader();
       reader.readAsDataURL(file); // this is reading as data url

       // here we tell the reader what to do when it's done reading...
       reader.onload = readerEvent => {
          content = readerEvent.target.result; // this is the content!
          document.querySelector('#image').src = content;
       }
    }

    input.click();
  } else if (number == 2) {
    document.querySelector('#image').src = "template.png";
  } else if (number == 3) {
    var src = prompt("Insira o link da imagem abaixo.", "")
    document.querySelector('#image').src = src;
  }
}

function getTheDate() {
  var d = new Date();
  if (b2 == 4) {
    return d.getDate()+"/"+ d.getMonth();
  } else if (b2 == 5) {
    return d.getDate()+1+"/"+ d.getMonth();
  } else if (b2 == 6) {
    return prompt("Qual a data a ser colocada na imagem?",d.getDate()+"/"+ d.getMonth());
  }
}

var content = null;

function getThePicture() {
  if (b1 == 0) {
    alert("Nenhuma imagem foi selecionada.")
    stopFUNCTIONHUAAAAAA();
  }

  return document.getElementById("image");
}

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
  download.setAttribute("download", "Cardapio do dia "+getTheDate());
  download.setAttribute("href", image);
}
