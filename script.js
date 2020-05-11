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
