window.RecordPopup = function (callback) {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.width = "100%";
    container.style.height = "100%";
    const innerContainer = document.createElement("div");
    innerContainer.style.position = "relative";
    innerContainer.style.width = "250px";
    innerContainer.style.height = "150px";
    innerContainer.style.background = "#00000080";
    const title = document.createElement("p");
    title.innerText = "Video Recorder";
    title.style.textAlign = "center";
    const close = document.createElement("button");
    close.innerText = "X";
    close.style.position = "absolute";
    close.style.top = "0";
    close.style.right = "0";
    close.style.textAlign = "center";
    close.onclick = () => container.remove();
    const option1 = document.createElement("select");
    var option = document.createElement("option");
    option.innerText = "mediaRecorder";
    option1.appendChild(option);
    const label1 = document.createElement("label");
    label1.innerText = "Recorder: ";
    const option2 = document.createElement("input");
    option2.type = "checkbox";
    option2.style.verticalAlign = "middle";
    const label2 = document.createElement("label");
    label2.appendChild(option2);
    label2.innerHTML += "Record Microphone?";
    const option3 = document.createElement("input");
    option3.type = "number";
    option3.value = 60;
    option3.style.verticalAlign = "middle";
    const label3 = document.createElement("label");
    label3.innerHTML = "Framerate: ";
    label3.appendChild(option3);
    const recordButton = document.createElement("button");
    recordButton.innerText = "Start Recording";
    recordButton.style.position = "absolute";
    recordButton.style.left = "0";
    recordButton.style.right = "0";
    recordButton.style.bottom = "0";
    recordButton.onclick = () => {
        try { callback(recordButton.parentElement.children[2].children[0].value, recordButton.parentElement.children[4].children[0].checked, recordButton.parentElement.children[6].children[0].value); } catch {}
        container.remove();
    };
    innerContainer.appendChild(title);
    innerContainer.appendChild(close);
    label1.appendChild(option1);
    innerContainer.appendChild(label1);
    innerContainer.appendChild(document.createElement("br"));
    innerContainer.appendChild(label2);
    innerContainer.appendChild(document.createElement("br"));
    innerContainer.appendChild(label3);
    innerContainer.appendChild(recordButton);
    container.appendChild(innerContainer);
    document.body.appendChild(container);
}