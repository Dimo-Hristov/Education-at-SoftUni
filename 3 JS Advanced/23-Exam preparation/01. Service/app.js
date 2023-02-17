window.addEventListener("load", solve);

function solve() {
  let description = document.querySelector("#description");
  let clientName = document.querySelector("#client-name");
  let phone = document.querySelector("#client-phone");
  let repairType = document.querySelector("#type-product");
  let box = document.getElementById("received-orders");
  let completed = document.getElementById("completed-orders");

  let btn = document.querySelector("form button");
  btn.addEventListener("click", onClickSubmit);

  function onClickSubmit(ev) {
    ev.preventDefault();
    let descriptionValue = description.value;
    let clientNameValue = clientName.value;
    let phoneValue = phone.value;

    description.value = "";
    clientName.value = "";
    phone.value = "";

    if (descriptionValue != "" && clientNameValue != "" && phoneValue != "") {
      let newField = document.createElement("div");
      newField.className = "container";
      box.appendChild(newField);

      let typeField = createElements(
        "h2",
        {},
        `Product type for repair: ${repairType.value}`
      );
      newField.appendChild(typeField)

      let clientInfo = createElements(
        "h3",
        {},
        `Client information: ${clientNameValue}, ${phoneValue}`
      );
      newField.appendChild(clientInfo);
      let descriptionField = createElements(
        "h4",
        {},
        `Description of the problem: ${descriptionValue}`
      );
      newField.appendChild(descriptionField)

      let startBtn = createElements(
        "button",
        { className: "start-btn" },
        "Start repair"
      );
      newField.appendChild(startBtn)

      let finishBtn = createElements(
        "button",
        { className: "finish-btn", disabled: true },
        "Finish repair"
      );
      newField.appendChild(finishBtn)

      function createElements(element, attr, content) {
        let newElement = document.createElement(element);
        newElement.textContent = content;
        for (let a in attr) {
          newElement[a] = attr[a];
        }

        newField.appendChild(newElement);

        return newElement;
      }

      startBtn.addEventListener("click", onClickStart);

      function onClickStart(e) {
        startBtn.disabled = true;
        finishBtn.disabled = false;

        finishBtn.addEventListener("click", onClickFinish);

        function onClickFinish(event) {
          let newDiv = document.createElement("div");
          newDiv.className = "container";
          completed.appendChild(newDiv);

          newDiv.appendChild(typeField);
          newDiv.appendChild(clientInfo);
          newDiv.appendChild(descriptionField);

          newField.remove();

          let clearBtn = document.querySelector(".clear-btn");
          clearBtn.addEventListener("click", clear);

          function clear(ev2) {
            newDiv.remove();
          }
        }
      }
    }
  }
}
