function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

Date.prototype.isValid = function () {
  // If the date object is invalid it
  // will return 'NaN' on getTime()
  // and NaN is never equal to itself.
  return this.getTime() === this.getTime();
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const formElt = document.getElementById("form");

//Form elements
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const locationsElt = document.getElementsByName("location");
const checkbox1Elt = document.querySelector("#checkbox1");
const checkbox2Elt = document.querySelector("#checkbox2");

// Submit form
formElt.onsubmit = (e) => validate(e);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeModalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeModal();
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Validation elements
const validate = (e) => {
  e.preventDefault();
  console.log(e.target.first.value);
  console.log(e.target.last.value);
  console.log(e.target.email.value);
  console.log(e.target.birthdate.value);
  console.log(e.target.quantity.value);
  console.log(e.target.location.value);
  console.log(e.target.checkbox1.checked);
  console.log(e.target.checkbox2.value);

  let checkRadio = document.querySelector('input[name="location"]:checked');
  //Si la valeur retournée ne correspond pas à une radio saisie => l'utilisateur sera informé par le message d'erreur

  if (!checkbox1Elt.checked) {
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez accepter les conditions d'utilistaion");
    newError.textContent = "Veuillez accepter les conditions d'utilistaion";
    document.querySelectorAll(".formData")[6].appendChild(newError);
  } else if (!checkRadio) {
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez saisir une ville.");
    newError.textContent = "Veuillez saisir une ville.";
    document.querySelectorAll(".formData")[5].appendChild(newError);
  } else {
    document.querySelector(".modal-body").textContent =
      "Merci pour votre inscription.";
  }
};

//Création d'un élément newError
let newError = document.createElement("error");

//Message d'erreur(first)
firstElt.addEventListener("focusout", (e) => {
  //Si la valeur retournée est < de 2 caractères => l'utilisatuer sera informé par le message d'erreur
  if (e.target.value.length < 2) {
    newError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    document.querySelectorAll(".formData")[0].appendChild(newError);
    //Permet de connaître la validation de l'entrée sur la console
    console.log(
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  }
});
//Message d'erreur(last)
lastElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.length);
  //Si la valeur retournée est < de 2 caractères => l'utilisateur sera informé par le message d'erreur
  if (e.target.value.length < 2) {
    newError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    document.querySelectorAll(".formData")[1].appendChild(newError);
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
});
//Message d'erreur(email)
emailElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  //Si la valeur retournée ne correspond pas à la regex => l'utilisateur sera informé par le message d'erreur
  if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    newError.textContent = "Veuillez entrer une adresse email valide.";
    document.querySelectorAll(".formData")[2].appendChild(newError);
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez entrer une adresse email valide.");
  }
});

//Message d'erreur(birthdate)
birthdateElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  let d = new Date(e.target.value);
  //Si la valeur retournée ne correspond pas à la regex => l'utilisateur sera informé par le message d'erreur
  if (!d.isValid()) {
    newError.textContent = "Veuillez entrer votre date de naissance";
    document.querySelectorAll(".formData")[3].appendChild(newError);
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez entrer votre date de naissance");
  }
});
//Message d'erreur(quantity)
quantityElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  //Si la valeur retournée ne correspond pas à la regex => l'utilisateur sera informé par le message d'erreur
  if (!e.target.value.match(/^([0-9]){1,2}$/)) {
    newError.textContent = "Veuillez saisir une valeur numérique.";
    document.querySelectorAll(".formData")[4].appendChild(newError);
    //Permet de connaître la validation de l'entrée sur la console
    console.log("Veuillez saisir une valeur numérique.");
  }
});
