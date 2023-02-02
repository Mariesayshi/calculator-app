let inputAndResult = document.querySelector(".inputAndResult");
const ops = document.querySelectorAll(".op");
const sw = document.querySelector(".switch");
const calc = document.querySelector(".calc");
const posAll = document.querySelectorAll(".pos");
let curOp = "";
let nums = [];
let typing = false;
let notAnOpChange = true;

for (let op of ops) {
  op.addEventListener("click", () => {
    if (op.classList.contains("num")) {
      if (!typing) {
        inputAndResult.value = op.innerHTML;
        typing = true;
      } else {
        inputAndResult.value += op.innerHTML;
      }
      notAnOpChange = true;
    } else if (op.classList.contains("del")) {
      inputAndResult.value = inputAndResult.value.slice(
        0,
        inputAndResult.value.length - 1
      );
    } else if (op.classList.contains("point")) {
      inputAndResult.value += ".";
    } else if (op.classList.contains("plus")) {
      if (notAnOpChange) {
        nums.push(inputAndResult.value);
      }
      if (nums.length === 2) {
        makeOp();
      }
      curOp = "+";
      if (nums.length === 2) {
        makeOp();
      }
      typing = false;
      notAnOpChange = false;
    } else if (op.classList.contains("minus")) {
      if (notAnOpChange) {
        nums.push(inputAndResult.value);
      }
      if (nums.length === 2) {
        makeOp();
      }
      curOp = "-";
      if (nums.length === 2) {
        makeOp();
      }
      typing = false;
      notAnOpChange = false;
    } else if (op.classList.contains("multiply")) {
      if (notAnOpChange) {
        nums.push(inputAndResult.value);
      }
      if (nums.length === 2) {
        makeOp();
      }
      curOp = "*";
      if (nums.length === 2) {
        makeOp();
      }
      typing = false;
      notAnOpChange = false;
    } else if (op.classList.contains("divide")) {
      if (notAnOpChange) {
        nums.push(inputAndResult.value);
      }
      if (nums.length === 2) {
        makeOp();
      }
      curOp = "/";
      if (nums.length === 2) {
        makeOp();
      }
      typing = false;
      notAnOpChange = false;
    } else if (op.classList.contains("reset")) {
      inputAndResult.value = "";
      nums = [];
    } else if (op.classList.contains("equal")) {
      nums.push(inputAndResult.value);
      makeOp();
      notAnOpChange = false;
    }
  });
}

let makeOp = () => {
  typing = false;
  if (curOp === "+") {
    inputAndResult.value = parseFloat(nums[0]) + parseFloat(nums[1]);
    nums = [];
    nums.push(inputAndResult.value);
  } else if (curOp === "-") {
    inputAndResult.value = parseFloat(nums[0]) - parseFloat(nums[1]);
    nums = [];
    nums.push(inputAndResult.value);
  } else if (curOp === "*") {
    inputAndResult.value = parseFloat(nums[0]) * parseFloat(nums[1]);
    nums = [];
    nums.push(inputAndResult.value);
  } else if (curOp === "/") {
    inputAndResult.value = parseFloat(nums[0]) / parseFloat(nums[1]);
    nums = [];
    nums.push(inputAndResult.value);
  }
};

for (let pos of posAll) {
  pos.addEventListener("click", () => {
    sw.className = "switch";
    calc.className = "calc";
    if (Array.from(posAll).indexOf(pos) === 1) {
      sw.classList.add("swPos2");
      calc.classList.add("theme2");
      document.body.style.background = "#e6e6e6";
    }
    if (Array.from(posAll).indexOf(pos) === 2) {
      sw.classList.add("swPos3");
      calc.classList.add("theme3");
      document.body.style.background = '#17062a';
    }
    if (Array.from(posAll).indexOf(pos) === 0) {
      sw.classList.add("swPos1");
      calc.classList.add("theme1");
      document.body.style.background = "#404e72";
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (!isNaN(parseInt(e.key))) {
    if (!typing) {
      inputAndResult.value = e.key;
      typing = true;
    } else {
      inputAndResult.value += e.key;
    }
    notAnOpChange = true;
  } else if (e.key === ".") {
    if (inputAndResult.value === "") {
      inputAndResult.value += "0" + e.key;
    } else {
      inputAndResult.value += e.key;
    }
  } else if (e.shiftKey && e.code === "Equal") {
    if (notAnOpChange) {
      nums.push(inputAndResult.value);
    }
    if (nums.length === 2) {
      makeOp();
    }
    curOp = "+";
    if (nums.length === 2) {
      makeOp();
    }
    typing = false;
    notAnOpChange = false;
  } else if (e.code === "Minus") {
    if (notAnOpChange) {
      nums.push(inputAndResult.value);
    }
    if (nums.length === 2) {
      makeOp();
    }
    curOp = "-";
    if (nums.length === 2) {
      makeOp();
    }
    typing = false;
    notAnOpChange = false;
  } else if (e.shiftKey && e.key === "8") {
    if (notAnOpChange) {
      nums.push(inputAndResult.value);
    }
    if (nums.length === 2) {
      makeOp();
    }
    curOp = "*";
    if (nums.length === 2) {
      makeOp();
    }
    typing = false;
    notAnOpChange = false;
  } else if (e.key === "/") {
    if (notAnOpChange) {
      nums.push(inputAndResult.value);
    }
    if (nums.length === 2) {
      makeOp();
    }
    curOp = "/";
    if (nums.length === 2) {
      makeOp();
    }
    typing = false;
    notAnOpChange = false;
  } else if (e.key === "=" || e.key === "Enter") {
    nums.push(inputAndResult.value);
    makeOp();
    notAnOpChange = false;
  } else if (e.key === "Backspace") {
    inputAndResult.value = inputAndResult.value.slice(
      0,
      inputAndResult.value.length - 1
    );
  } else if (e.key === ".") {
    inputAndResult.value += inputAndResult.value;
  }
});
