"use strict";

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("/")) {
    const btnCodeModal = document.querySelector(".btn-test");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const btnSignIn = document.querySelector(".sign-in-button");
    const sectionLogIn = document.querySelector(".log-in");

    // Sign up process variables
    const sectionSignUp = document.querySelector(".sign-up");
    const btnSignUpSplash = document.querySelector(".sign-up-button");
    const sectionName = document.querySelector(".sign-up-name");
    const btnContinueName = document.querySelector(".btn-continue-name");
    const sectionBDate = document.querySelector(".sign-up-birthdate");
    const btnContinueDate = document.querySelector(".btn-continue-date");

    // Sign up - name screen
    btnSignUpSplash.addEventListener("click", () => {
      sectionLogIn.classList.add("hide");
      sectionSignUp.classList.remove("hide");
      console.log("click sign up");
    });

    btnContinueName.addEventListener("click", () => {
      // logic to continue
      console.log(document.querySelector(".name").value);
      if (document.querySelector(".name").value.length > 0) {
        sectionName.classList.add("hide");
        sectionBDate.classList.remove("hide");
      } else {
        document.querySelector(".name-error").style.color = "#dc2f02";
      }
    });

    // Sign up - birthdate screen

    // Log in code
    btnCodeModal.addEventListener("click", () => {
      document.querySelector(".modal-code").classList.toggle("hide");
      document.querySelector(".app").classList.toggle("hide");
    });

    btnSignIn.addEventListener("click", () => {
      //verify at least one number in password
      const passwordArr = password.value
        .split("")
        .map((l) => (!isNaN(l) ? true : false))
        .filter((l) => l === true);
      console.log(passwordArr);

      // Verify correct email format
      if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.querySelector(".email-condition").classList.remove("hide");
      } else if (
        email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) &&
        passwordArr.length > 0 &&
        password.value.length > 7
      ) {
        document.querySelector(".email-condition").classList.add("hide");
        window.location.href = "camera.html";
      }

      // Password conditions
      if (passwordArr.length === 0 && password.value.length < 8) {
        document.querySelector(".one-number-span").style.color = "#dc2f02";
        document.querySelector(".eight-characters-span").style.color =
          "#dc2f02";
      } else if (passwordArr.length === 0) {
        document.querySelector(".one-number-span").style.color = "#dc2f02";
      } else if (password.value.length < 8) {
        document.querySelector(".eight-characters-span").style.color =
          "#dc2f02";
      }

      password.addEventListener("keypress", () => {
        document.querySelector(".one-number-span").style.color = "#fff";
        document.querySelector(".eight-characters-span").style.color = "#fff";
      });
    });
  } else if (window.location.pathname.endsWith("html/camera.html")) {
    const flash = document.querySelector(".camera-flash");
    const body = document.querySelector("body");
    // camera flash
    flash.addEventListener("click", () => {
      console.log(flash);
      body.style.background = "linear-gradient(#ffe14e,rgb(255, 212, 42))";
    });
  }
});
