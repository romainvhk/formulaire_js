const form = document.getElementById('form');


// Ajout des variables
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const phoneError = document.querySelector('#phoneError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    
    const errors = {
        firstName : false,
        lastName : false,
        phone : false,
        email : false,
        password : false,
    }

        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^((\+)33|0)[1-9](\d{2}){4}$/g;
        const nameRegex = /^[a-zA-Z ]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/;

        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }

        if (!formData.lastName || !nameRegex.test(formData.lastName)) {
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        
        if ((!formData.password ||!passwordRegex.test(formData.password)) ) {
            errors.password = true;
            passwordError.style.display = 'block';
        }

    if (!Object.values(errors).includes(true)) {
        console.log(formData);
        form.reset();
    }

})

const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    form.reset();
})