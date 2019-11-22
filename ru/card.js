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
  var finaltext = getTheText();

  // Draw on Canvas
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.rect(0,0,1080,1920);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.drawImage(picture, 0, 0);

  // date
  ctx.font = "bold 125px Arial";
  ctx.fillStyle = "#ff9000";
  ctx.textAlign = "right";
  ctx.fillText(date, 978, 445);

  ctx.font = "42px Arial";
  ctx.fillStyle = "#212121";
  ctx.textAlign = "left";

  var breakfast = finaltext[0].split("\n");
  for (var i = 0; i < breakfast.length; i++) {
    wrapText(ctx, breakfast[i], 110, 650+i*50, 900, 45);
  }

  var lunch = finaltext[1].split("\n");
  for (var i = 0; i < lunch.length; i++) {
    wrapText(ctx, lunch[i], 110, 925+i*50, 900, 45);
  }

  var dinner = finaltext[2].split("\n");
  for (var i = 0; i < dinner.length; i++) {
    wrapText(ctx, dinner[i], 110, 1380+i*50, 900, 45);
  }

  alert("Imagem gerada com sucesso!");
};

// Code copied on https://codepen.io/peterhry/pen/AGIEa

function wrapText (context, text, x, y, maxWidth, lineHeight) {

    var words = text.split(' '),
        line = '',
        i,
        test,
        metrics;

    for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
            // Determine how much of the word will fit
            test = test.substring(0, test.length - 1);
            metrics = context.measureText(test);
        }
        if (words[i] != test) {
            words.splice(i + 1, 0,  words[i].substr(test.length))
            words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
            context.fillText(line, x, y);
            line = words[i] + ' ';
            y = y + lineHeight;
            lineCount++;
        }
        else {
            line = test;
        }
    }

    context.fillText(line, x, y);
}

//////////////////////////////////////////////////

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
    return d.getDate()+"/"+ d.getMonth()+1;
  } else if (b2 == 5) {
    return d.getDate()+1+"/"+ d.getMonth()+1;
  } else if (b2 == 6) {
    return prompt("Qual a data a ser colocada na imagem?",d.getDate()+"/"+ d.getMonth()+1);
  }
}

var content = null;

function getThePicture() {
  if (b1 == 0) {
    alert("Nenhuma imagem foi selecionada.")
    stopFUNCTIONHUAAAAAA(huehue);
  }

  return document.getElementById("image");
}

function getTheText() {
  var text = document.getElementById("textarea").value;
  text = text.split('\n');
  var markBreaks = [];

  for (var i = 0; i < text.length; i++) {
    if (text[i] == "CAF\u00C9 DA MANH\u00C3") {
      text.splice(i,1);
    } else if (text[i] == "ALMO\u00C7O") {
      text.splice(i,1);
    } else if (text[i] == "JANTAR") {
      text.splice(i,1);
    }
  }

  text = text.join("\n");

  for (var i = 0; i < 5; i++) {
    text = text.replace("\n\n","<~hue~>")
  }

  text = text.split("<~hue~>")

  return text;
}

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
  download.setAttribute("download", "Cardapio do dia "+getTheDate());
  download.setAttribute("href", image);
}
