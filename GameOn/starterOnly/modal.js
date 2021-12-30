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
const locationsElt = document.getElementsByName("location");
const checkbox1Elt = document.querySelector("#checkbox1");
const checkbox2Elt = document.querySelector("#checkbox2");

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
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    document.querySelectorAll(".formData")[0].appendChild(newError);
  }
});

lastElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.length);
  if (e.target.value.length < 2) {
    let newError = document.createElement("error");
    newError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    document.querySelectorAll(".formData")[1].appendChild(newError);
  }
});

emailElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez entrer une adresse email valide.";
    document.querySelectorAll(".formData")[2].appendChild(newError);
  }
});

birthdateElt.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  if (
    !e.target.value.match(
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/
    )
  ) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez indiquer votre date de naissance";
    document.querySelectorAll(".formData")[3].appendChild(newError);
  }
});

quantityElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.match);
  if (!e.target.value.match(/^([0-9]){1,2}$/)) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez saisir une valeur numérique.";
    document.querySelectorAll(".formData")[4].appendChild(newError);
  }
});

/*locationElt.addEventListener("focusout", (e) => {
  console.log(e.target.value.match);
  if (
    !e.target.value.match ===
    [
      location[0].checked == true ||
        location[1].checked == true ||
        location[2].checked == true ||
        location[3].checked == true ||
        location[4].checked == true ||
        location[5].checked == true,
    ]
  ) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez saisir une ville.";
    document.querySelectorAll(".formData")[5].appendChild(newError);
  }
});*/

/*locationsElt.addEventListener("focusout", (i) => {
  console.log(e.target.value.length);
  let array = [];
  for (let i = 0; i < locationsElt.length; i++) {
    if (locationsElt[i].checked === true) {
      array.push(locationsElt[i].checked);
    }
  }
  if (array.indexOf(true) !== 0) {
    let newError = document.createElement("error");
    newError.textContent = "Veuillez saisir une ville.";
    document.querySelectorAll(".formdata")[5].appendChild(newError);
  }
});*/

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

/* 
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
                'input[name="GFG"]:checked');*/
