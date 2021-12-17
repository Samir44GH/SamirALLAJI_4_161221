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
const location1Elt = document.getElementById("location1");
const location2Elt = document.getElementById("location2");
const location3Elt = document.getElementById("location3");
const location4Elt = document.getElementById("location4");
const location5Elt = document.getElementById("location5");
const location6Elt = document.getElementById("location6");

//Validation elements
const validate = (e)=>{
  e.preventDefault()
  console.log(e.target.first.value)
  console.log(e.target.last.value)
  console.log(e.target.email.value)
  console.log(e.target.birthdate.value)
  console.log(e.target.quantity.value)
  console.log(e.target.location1.value)
  console.log(e.target.location2.value)
}

formElt.onsubmit = (e)=> validate(e);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
//closeModalBtn.forEach(e => e.addEventListener("click", closeModal));//
closeModalBtn.addEventListener("click", function(event) {
  event.preventDefault ();
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


