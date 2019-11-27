var version = "1.1.0" // Versão do site

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
  ctx.textBaseline = "top";

  ctx.wrapText(finaltext[0],110,620,900,45, false); // Café da manhã
  ctx.wrapText(finaltext[1],110,895,900,45, false); // Almoço

  hasBroken = 2;  // Reset line breaks;
  ctx.wrapText(finaltext[2],110,1350,900,45, false); // Jantar (parte 1)
  ctx.wrapText(finaltext[3],110,1350,570,45, true); // Janter (parte 2)

  //alert("Imagem gerada com sucesso!");
  popUpResult();
};

function warning() {
  var dialog = confirm("Para utilizar o gerador selecione a imagem base, a data do cardápio e insira o texto copiado diretamente do cardápio oficial do site da PRA. Aperte OK para obter um exemplo do texto a ser copiado.\n\nVersão do site: "+version+"\nCriado por Vicente Parmigiani");
  if (dialog == true) {
    alert("CAFÉ DA MANHÃ\nCafé/leite/chá\nPão com queijo\nFruta\n\nALMOÇO\nSalada de Alface e Cenoura Ralada\nPicadinho Especial\nAbobrinha Refogada\nFruta\nOpção vegana: Grão de bico Especial\n\nJANTAR\nRúcula e rabanete\nFricassê de frango\nCampestre (bacon, batata, vagem, tomate, abobrinha e macarrão)\nOpção vegana: ervilha seca ao molho mostarda");
  }
}

//////////////////////////////////////////////////
// Code from http://jsfiddle.net/7RdbL/ (adepted)
//////////////////////////////////////////////////

var hasBroken = 2;

CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight, testBroke) {

    if (testBroke == true) {
        y += lineHeight * hasBroken;
    }

    var lines = text.split("\n");

    for (var i = 0; i < lines.length; i++) {

        var words = lines[i].split(' ');
        var line = '';

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = this.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
                hasBroken++;
            } else {
                line = testLine;
            }
        }

        this.fillText(line, x, y);
        y += lineHeight;
    }
};

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
    document.querySelector('#image').src = "template.jpg";
  } else if (number == 3) {
    var src = prompt("Insira o link da imagem abaixo.", "")
    document.querySelector('#image').src = src;
  }
}

function getTheDate() {
  var d = new Date();
  var month = parseInt(d.getMonth())+1;

  if (b2 == 4) {
    return d.getDate()+"/"+ month;
  } else if (b2 == 5) {
    return d.getDate()+1+"/"+ month;
  } else if (b2 == 6) {
    return prompt("Qual a data a ser colocada na imagem?",d.getDate()+"/"+ month);
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
try {
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

  // Wrap imagem
  var pretext = text[2].split("\n");
  pretext[2] += "/split";
  pretext = pretext.join("\n");
  pretext = pretext.split("/split");
  text[2] = pretext[0];
  text[3] = pretext[1];

  return text;
} catch (e) {
  alert("Você deve inserir um texto válido retirado do cardápio da PRA, aperte 'Aviso' para mais informações.");
}
}

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
  download.setAttribute("download", "Cardapio do dia "+getTheDate()+".png");
  download.setAttribute("href", image);
}

function popUpResult() {
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("canvas");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  captionText.innerHTML = "Cardápio do dia "+getTheDate();

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}
