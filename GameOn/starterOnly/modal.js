function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
const locationElt = document.getElementById("location");
const checkbox1Elt = document.querySelector("#checkbox1");
const checkbox2Elt = document.querySelector("#checkbox2");

/*firstElt.addEventListener("focusout", (e)=> {
  console.log(e.target.value.length);
  if(e.target.value.length<2) {
    let newError = document.createElement("error")
newError.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom"
document.querySelectorAll(".formData")[0].appendChild(newError)
  }
});

lastElt.addEventListener("focusout", (e)=> {
  console.log(e.target.value.length);
  if(e.target.value.length<2) {
    let newError = document.createElement("error")
newError.textContent="Veuillez entrer 2 caractères ou plus pour le champ du nom."
document.querySelectorAll(".formData")[1].appendChild(newError)
  }
});*/
//Validation elements
const validate = (e) => {
  e.preventDefault();
  console.log(e.target.first.value);
  console.log(e.target.first.isvalid);
  console.log(e.target.last.value);
  console.log(e.target.email.value);
  console.log(e.target.birthdate.value);
  console.log(e.target.quantity.value);
  console.log(e.target.location.value);
  console.log(e.target.checkbox1.checked);
  console.log(e.target.checkbox2.value);
};

//Message error validation
firstElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.length);
  if (e.target.value.length < 2) {
    let newError = document.createElement("error");
    newError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    document.querySelectorAll(".formData")[0].appendChild(newError);
    return false;
  }
});

lastElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.length);
  if (e.target.value.length < 2) {
    let newError = document.createElement("error");
    newError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    document.querySelectorAll(".formData")[1].appendChild(newError);
    return false;
  }
});

emailElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez entrer une adresse email valide.";
    document.querySelectorAll(".formData")[2].appendChild(newError);
    return false;
  }
});

birthdateElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  let minBirthdate = new Date("2003/12/01");
  if (
    !e.target.value.date(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    )
  ) {
    let newError = document.createElement("error");
    newError.textContent = "Vous n'avez pas le minimum d'âge requis.";
    document.querySelectorAll(".formData")[3].appendChild(newError);
    return false;
  }
});

quantityElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.length);
  if (!e.target.value.match(/^([0-9]){1,2}$/)) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez saisir une valeur numérique.";
    document.querySelectorAll(".formData")[4].appendChild(newError);
  }
});

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

/*//Validate email message
emailElt.addEventListener("input",function (event) {
  if(emailElt.validity.typeMismatch) {
    email.setCustomValidity("L'email n'est pas valide");
  }else {
    email.setCustomValidity("");
  }
});*/
/*
formElt.addEventListener("submit", function(e) {
  if(!first.value) {
    erreur = ("Veuillez renseigner 2 caractères ou plus pour le champ du prénom" );
  }
  if (erreur) {
    e.preventDefault();
    document.getElementsByClassName("erreur").innerHTML = erreur;
   return false;  }
   else {
     alert('Formulaire envoyé');
   }
})

 
let d = new Date("2012/2/30");
          
        up.innerHTML = "Click on the button to check"
                    + " validity of data.<br>";
          
        Date.prototype.isValid = function () {
              
            // If the date object is invalid it
            // will return 'NaN' on getTime() 
            // and NaN is never equal to itself.
            return this.getTime() === this.getTime();
        };
let checkRadio = document.querySelector(
                'input[name="GFG"]:checked');
*/
