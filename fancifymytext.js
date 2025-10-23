
function makeBigger() {
  const textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

function applyStyle() {
  const textArea = document.getElementById("textArea");
  const fancy = document.getElementById("fancy");
  
  if (fancy.checked) {
    alert("FancyShmancy selected!");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    alert("BoringBetty selected!");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooify() {
  const textArea = document.getElementById("textArea");
  let text = textArea.value.toUpperCase();
  const sentences = text.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    if (sentences[i].trim().length > 0) {
      sentences[i] = sentences[i].trim() + "-Moo";
    }
  }

  text = sentences.join(". ");
  textArea.value = text;
}
