const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");
const usernameInputLogin = document.querySelector('.login-box .email');
const passwordInputLogin = document.querySelector('.login-box .password');
const loginButton = document.querySelector('.login-box .clkbtn');
const usernameInputSignup = document.querySelector('.signup-box .email');
const passwordInputSignup = document.querySelector('.signup-box .password');
const signupButton = document.querySelector('.signup-box .clkbtn');

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function handleLoginInputChange() {
    if (usernameInputLogin.value.trim() !== '' && passwordInputLogin.value.trim() !== '') {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', 'disabled');
    }
}

function handleSignupInputChange() {
    if (usernameInputSignup.value.trim() !== '' && passwordInputSignup.value.trim() !== '') {
        signupButton.removeAttribute('disabled');
    } else {
        signupButton.setAttribute('disabled', 'disabled');
    }
}

handleLoginInputChange();
handleSignupInputChange();

usernameInputLogin.addEventListener('input', handleLoginInputChange);
passwordInputLogin.addEventListener('input', handleLoginInputChange);
usernameInputSignup.addEventListener('input', handleSignupInputChange);
passwordInputSignup.addEventListener('input', handleSignupInputChange);

loginButton.addEventListener('click', function() {
    window.location.href = 'a.html';
});

signupButton.addEventListener('click', function() {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
