function onButtonClick() {
  const inputMessage = document.getElementById("input_message").value;
  if (inputMessage.length > 0) {
    let addingMessage;
    if (!inputMessage.match(/^(\w| |'|,|&)+$/)) {
      addingMessage =
        inputMessage.length > 15
          ? inputMessage.substr(0, 15) + "..."
          : inputMessage;
    } else {
      addingMessage =
        inputMessage.length > 20
          ? inputMessage.substr(0, 20) + "..."
          : inputMessage;
    }

    document.getElementById("display__text").innerText =
      "I mean " + addingMessage;

    const pulldownOptions = document
      .getElementById("pulldown")
      .getElementsByTagName("option");

    let preWord;
    for (let i = 0; i < pulldownOptions.length; i++) {
      if (i == 0) {
        preWord = pulldownOptions[i].innerText;
        pulldownOptions[i].innerText = inputMessage;
      } else {
        let tmpWord = pulldownOptions[i].innerText;
        pulldownOptions[i].innerText = preWord;
        preWord = tmpWord;
      }
    }
  }
}

function changeZIndex() {
  document.getElementById("header").style.zIndex = Math.floor(
    Math.random() * 10
  );
  document.getElementById("display").style.zIndex = Math.floor(
    Math.random() * 10
  );
  document.getElementById("line").style.zIndex = Math.floor(Math.random() * 10);
  document.getElementById("square").style.zIndex = Math.floor(
    Math.random() * 10
  );
  document.getElementById("circle").style.zIndex = Math.floor(
    Math.random() * 10
  );
  document.getElementById("pulldown").style.zIndex = Math.floor(
    Math.random() * 10
  );
  document.getElementById("form").style.zIndex = Math.floor(Math.random() * 10);
}

let redSwitchFlag = true;
function onRedSwitchChange() {
  if (redSwitchFlag) {
    document.getElementById("square").style.backgroundColor = "#00dbeb";
  } else {
    document.getElementById("square").style.backgroundColor = "#eb1000";
  }
  redSwitchFlag = !redSwitchFlag;
  changeZIndex();
}

let yellowSwitchFlag = true;
function onYellowSwitchChange() {
  if (yellowSwitchFlag) {
    document.getElementById("triangle").style.borderBottomColor = "#0212fe";
  } else {
    document.getElementById("triangle").style.borderBottomColor = "#feee02";
  }
  yellowSwitchFlag = !yellowSwitchFlag;
  changeZIndex();
}

let blueSwitchFlag = true;
function onBlueSwitchChange() {
  if (blueSwitchFlag) {
    document.getElementById("circle").style.backgroundColor = "#cfba1a";
  } else {
    document.getElementById("circle").style.backgroundColor = "#1a2fcf";
  }
  blueSwitchFlag = !blueSwitchFlag;
  changeZIndex();
}

function onClickFirstLink() {
  document.getElementById("first_link").innerText = "ホーム";
  document.getElementById("second_link").innerText = "紹介";
  document.getElementById("third_link").innerText = "情報";
  document.getElementById("fourth_link").innerText = "連絡";
}

function onClickThirdLink() {
  document.getElementById("first_link").innerText = "Accueil";
  document.getElementById("second_link").innerText = "Propos";
  document.getElementById("third_link").innerText = "Info";
  document.getElementById("fourth_link").innerText = "Contactez";
}

function onClickFourthLink() {
  document.getElementById("first_link").innerText = "Startseite";
  document.getElementById("second_link").innerText = "Über";
  document.getElementById("third_link").innerText = "Infos";
  document.getElementById("fourth_link").innerText = "Kontakt";
}
