function ValidateEmail(inputText){
    let emailValidMessage = document.getElementById("invalid__message");
    let emailValidlogo = document.getElementById("invalid__logo");
    let emailSumbitOutline = document.getElementById("email__submit__invalid");
    let email = document.getElementById("emailText");
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if(email.value.match(emailRegex))
            {
                emailValidMessage.classList.remove('invalid__email')
                emailValidlogo.classList.remove('invalid__email')
                emailSumbitOutline.classList.remove('invalid__outline');
                emailSumbitOutline.classList.add('valid__outline');

            }
        else {
                emailValidMessage.classList.add('invalid__email')
                emailValidlogo.classList.add('invalid__email')
                emailSumbitOutline.classList.add('invalid__outline');
                emailSumbitOutline.classList.remove('valid__outline');
        }
}

        let email = document.getElementById("emailText");
        email.addEventListener('keydown', function(event) {
            if(event.keycode === 13 || event.key === 'Enter'){
                console.log("Email was entered");
                ValidateEmail();
            }
});

