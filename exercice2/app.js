const form = document.querySelector(".form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const adresse = document.querySelector('#adresse');
    const sizePizza = document.querySelector('#size');
    const choixPizza = document.querySelector('#choixPizza');

    const userChoice = {
        name: name.value,
        phone: phone.value,
        adresse: adresse.value,
        sizePizza: sizePizza.value,
        choixPizza: choixPizza.value,
    }

    const errors = {
        name: document.querySelector('#nameError'),
        phone: document.querySelector('#phoneError'),
        adresse: document.querySelector('#adresseError'),
        sizePizza: document.querySelector('#sizeError'),
        choixPizza: document.querySelector('#choixError'),
    }

    const sizePrice = {
        small: 5,
        medium: 7,
        large: 9,
    }

    const choixPrice = {
        nordiste : 6,
        montagnard : 5,
        viande: 8,
    }

    const total = document.querySelector('#total');
    let totalPrice = sizePrice[sizePizza.value] + choixPrice[choixPizza.value];


    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const adresseRegex = /^[a-zA-Z0-9\s,'-]*$/;

    if (!userChoice.name || !userChoice.phone || !userChoice.adresse || userChoice.sizePizza === "" || userChoice.choixPizza === "") {
        if (!userChoice.name || !nameRegex.test(userChoice.name)) {
            errors.name.style.display = 'block';
        }
        if (!userChoice.phone || !phoneRegex.test(userChoice.phone)) {
            errors.phone.style.display = 'block';
        }
        if (!userChoice.adresse || !adresseRegex.test(userChoice)) {
            errors.adresse.style.display = 'block';
        }
        if (userChoice.sizePizza === "") {
            errors.sizePizza.style.display = 'block';
        }
        if (userChoice.choixPizza === "") {
            errors.choixPizza.style.display = 'block';
        }
    } else {
        total.textContent = `Total = ${totalPrice} €`;
        console.log(userChoice);
        form.reset();
    }

})


const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.reset();
})