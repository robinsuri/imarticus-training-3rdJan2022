let formTag = document.querySelector("#form");
formTag.addEventListener("submit", checkForm);

function checkForm(event) {
    let password = document.querySelector("#password").value;
    let invalidParagraphTag = document.querySelector("#invalid");

    if (password == "") {
        invalidParagraphTag.innerHTML = "!Please enter password.";
        event.preventDefault();
    } else if (password.length < 8 || password.length > 50) {
        invalidParagraphTag.innerHTML = "!Password length must between (8-50) and must contains one uppercase letter, one lowercase letter, one digit and one symbol.";
        event.preventDefault();
    } else {
        let regLower = /[a-z]/;
        let regUpper = /[A-Z]/;
        let regDigit = /\d/;
        let regSybmol = /[!@#$%^&*()_+=-]/;
        let conditionValid = regUpper.test(password) && regLower.test(password) && regDigit.test(password) && regSybmol.test(password);
        if (!conditionValid) {
            invalidParagraphTag.innerHTML = "!Password length must between (8-50) and must contains one uppercase letter, one lowercase letter, one digit and one symbol.";
            event.preventDefault();
        } else {
            let validParagraphTag = document.querySelector("#valid");
            invalidParagraphTag.hidden = true
            validParagraphTag.innerHTML = "Congratulations! password is valid.";
            event.preventDefault();
        }
    }
}