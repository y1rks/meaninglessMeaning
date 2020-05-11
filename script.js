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
  }
}

let redSwitchFlag = true;
function onRedSwitchChange() {
  if (redSwitchFlag) {
    document.getElementById("square").style.backgroundColor = "#00dbeb";
  } else {
    document.getElementById("square").style.backgroundColor = "#eb1000";
  }
  redSwitchFlag = !redSwitchFlag;
}

let yellowSwitchFlag = true;
function onYellowSwitchChange() {
  if (yellowSwitchFlag) {
    document.getElementById("triangle").style.borderBottomColor = "#0212fe";
  } else {
    document.getElementById("triangle").style.borderBottomColor = "#feee02";
  }
  yellowSwitchFlag = !yellowSwitchFlag;
}

let blueSwitchFlag = true;
function onBlueSwitchChange() {
  if (blueSwitchFlag) {
    document.getElementById("circle").style.backgroundColor = "#cfba1a";
  } else {
    document.getElementById("circle").style.backgroundColor = "#1a2fcf";
  }
  blueSwitchFlag = !blueSwitchFlag;
}
