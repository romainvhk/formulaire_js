const form = document.querySelector(".form");
const total = document.querySelector('#total');

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
        console.log(userChoice);
        alert('Votre commande est bien enregistrée ! Merci pour votre confiance.')
        form.reset();
        total.reset();
    }
    
})


const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.reset();
    total.reset();
});

// evenement change au changement des selects, vérifie si ils sont valide et alors ajoute total


const sizePizza = document.querySelector('#size');
const choixPizza = document.querySelector('#choixPizza');
let totalPrice = 0;

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

let pizzaSizeValue = 0;
let pizzaChoice = 0;

sizePizza.addEventListener('change', () => {

    if (sizePizza.value !== "" && choixPizza!== "") {
        if (["small", "medium", "large"].includes(sizePizza.value)) {
            pizzaSizeValue = sizePrice[sizePizza.value];
            total.textContent = `Total = ${pizzaSizeValue + pizzaChoice} €`
        }
    } else {
        pizzaSizeValue = 0;
        total.textContent = `Total = €`
    }


});

choixPizza.addEventListener('change', () => {
    if (choixPizza.value !== "") {
        if (["nordiste", "montagnard", "viande"].includes(choixPizza.value)) {
            pizzaChoice = choixPrice[choixPizza.value];
            total.textContent = `Total = ${pizzaSizeValue + pizzaChoice} €`
        }
    } else {
        pizzaChoice = 0;
        total.textContent = `Total = €`
    }    
})