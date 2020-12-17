const burgerButton = document.querySelector(".header__bottom--icon");
const backDrop = document.querySelector(".backdrop");
const sideBarLeft = document.querySelector(".sidebar__left");
const cross = document.querySelector(".cross");
const sideBarRight = document.querySelector(".sidebar__right");
const profileButton = document.querySelector(".button-2");
const profileButton2 = document.querySelector(".header__name");
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_NAME= document.querySelector(".header__name--title").innerText;
const BOT_IMG = document.querySelector(".header__avatar img").currentSrc;
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";

const PERSON_NAME = "You";
let userMsgCount = 0;
let userName = window.location.pathname;
const modalEle = document.querySelector(".modal");
const modalImage = document.querySelector(".modalImage");

// function appHeight() {
//   const doc = document.documentElement;
//   doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
// }

// window.addEventListener("resize", appHeight);
// appHeight();

function myFunction(classN) {
  let element = document.body;
  let currentsidebarClass = sideBarRight.className;

  element.classList.toggle(classN);
  sideBarRight.classList.toggle(classN);
  msgerInput.classList.toggle(classN);
  msgerForm.classList.toggle(classN);
}

myFunction("dark-mode");

msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
<div class="msg ${side}-msg">
  <div class="msg-img">
    <img src=${img} alt="" />
  </div>

  <div class="msg-bubble">
    <div class="msg-info">
      <div class="msg-info-name">${name}</div>
      <div class="msg-info-time">${formatDate(new Date())}</div>
    </div>

    <div class="msg-text">${text}</div>
  </div>
</div>
`;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse(rawText) {
  userMsgCount = userMsgCount + 1;
  // Bot Response
  $.get("/get", {
    msg: rawText,
    msgCount: userMsgCount,
    userName,
  }).done(function (data, botNameAW) {
    const msgText = data;
    console.log(data);
    console.log(botNameAW);
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  });
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

burgerButton.addEventListener("click", () => {
  sideBarLeft.style.display = "block";
  backDrop.style.display = "block";
});

backDrop.addEventListener("click", () => {
  sideBarLeft.style.display = "none";
  backDrop.style.display = "none";
});

cross.addEventListener("click", () => {
  sideBarRight.style.display = "none";
});

profileButton.addEventListener("click", () => {
  sideBarRight.style.display = "block";
});

profileButton2.addEventListener("click", () => {
  sideBarRight.style.display = "block";
});

Array.from(document.querySelectorAll(".ImgThumbnail")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modalEle.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
});
