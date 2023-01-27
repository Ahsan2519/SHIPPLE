// global variable declaration start here
const hamburger = document.querySelector(".hamburger"),
  html = document.querySelector("html"),
  navbar = document.querySelector(".navber"),
  form = document.querySelector(".my-form"),
  inputName = document.querySelector(".name"),
  email = document.querySelector(".email"),
  nameRegex = /^[A-Za-z\s]+$/,
  emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
  footerWrapper = document.querySelector("footer .wrapper"),
  galleryItem = document.querySelectorAll(".gallery-item"),
  scrollUp = document.querySelector(".scroll-up");
let isvalid;
// global variable declaration end here

// hamburger event start here
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  html.classList.toggle("hidden");
});
// hamburger event end here

// scroll-up start here
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollUp.offsetHeight + 100) {
    scrollUp.classList.add("scroll-show")
  } else {
    scrollUp.classList.remove("scroll-show")
  }
});
// scroll-up end here

// Form Validation Start here

// function for creating error span start here
const creatError = (input, errorMsg) => {
  const inputGroup = input.parentElement,
    error = document.createElement("span");
  error.className = "error";
  error.innerText = errorMsg;
  inputGroup.appendChild(error);
};
// function for creating error span end here

// function for validation start here
const validate = (input, regex, minChar, maxChar) => {
  const inputGroup = input.parentElement,
    activeError = input.parentElement.querySelector(".error"),
    str = input.value;
  isvalid = true;
  if (activeError) {
    activeError.remove();
  }
  if (!str) {
    creatError(input, "*field is required");
    inputGroup.classList.add("fail");
    return isvalid = false;
  } else if ((str.length < minChar) || (str.length > maxChar)) {
    creatError(input, `*it must be between  ${minChar} to ${maxChar} character`);
    inputGroup.classList.add("fail");
    return isvalid = false;
  } else if (!regex.test(str)) {
    creatError(input, `*please enter a valid ${input.name}`);
    inputGroup.classList.add("fail");
    return isvalid = false;
  } else {
    inputGroup.classList.remove("fail");
    inputGroup.classList.add("succes");
    return isvalid;
  }
};
// function for validation end here

// event for form start here
form.addEventListener("submit", (e) => {
  const activeInputGroup = document.querySelectorAll(".succes");
  e.preventDefault();
  validate(inputName, nameRegex, 4, 40);
  validate(email, emailRegex, 4, 40);
  let errorGet = document.querySelectorAll(".error");
  console.log(errorGet);
  if (isvalid == true && errorGet.length === 0) {
    const sendMsg = document.createElement("span");
    sendMsg.className = "send-msg";
    sendMsg.innerText = "Your message hasbeen sent succesfully..Thank you..!"
    form.insertBefore(sendMsg, form.children[0]);
    setTimeout(() => {
      sendMsg.remove()
    }, 3000);
    form.reset();
    activeInputGroup.forEach(element => {
      element.classList.remove("succes");
    });
  }
});
// event for form end here

// event for input start here
inputName.addEventListener("blur", () => {
  validate(inputName, nameRegex, 4, 40);
});
email.addEventListener("blur", () => {
  validate(email, emailRegex, 4, 40);
});
// event for input end here

// Form Validation end here

// footer Gallery Modal start here
galleryItem.forEach((modalElement, idx) => {
  modalElement.addEventListener("click", () => {
    const image = document.querySelectorAll(".image-link img"),
      imageSrc = image[idx].src,
      modalDiv = document.createElement("div");
    modalDiv.className = "modal";
    modalDiv.innerHTML = `<div class="modal-content">
    <div class="modal-close">
    <span class="modal-bar rotate1">bar</span>
    <span class="modal-bar hide">bar</span>
    <span class="modal-bar rotate2">bar</span>
    </div>
    <figure class="modal-figure">
      <img src="${imageSrc}" alt="Modal Image">
    </figure>
</div>`;
    footerWrapper.appendChild(modalDiv);
    html.classList.add("hidden");
    const modal = document.querySelector(".modal"),
      modalContent = document.querySelector(".modal-content"),
      modalClose = document.querySelector(".modal-close");
    function removeModal() {
      modalDiv.remove();
      html.classList.remove("hidden");
    }
    modalClose.addEventListener("click", function () {
      removeModal();
    });
    modal.addEventListener("click", function (e) {
      if (e.target == modal) {
        removeModal();
      };
    });
    window.addEventListener("keydown", function (e) {
      if (e.key == "Escape") {
        removeModal();
      };
    });

  });
});
// footer Gallery Modal end here

