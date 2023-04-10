import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', formSubmit);

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
localStorage.setItem('FEEDBACK_KEY', JSON.stringify(formData))
}

function formSubmit(e) {
    console.log(JSON.parse(localStorage.getItem('FEEDBACK_KEY')));
    
    e.preventDefault();

   
    e.currentTarget.reset();
    
localStorage.removeItem('FEEDBACK_KEY');

}

(function getDataStorage() {
    const saveData = JSON.parse(localStorage.getItem('FEEDBACK_KEY'));

    const emailInput = document.querySelector('.feedback-form input');

    const messageInput = document.querySelector('.feedback-form textarea');

    if (saveData) {
        emailInput.value = saveData.email;
        messageInput.value = saveData.message;
    }
})();

// const emailInput = document.querySelector('.feedback-form input');

// const messageInput = document.querySelector('.feedback-form textarea');

// const FEEDBACK_KEY = "feedback-form-state";

// const formData = {};


// getDataStorage();

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);


// function onFormInput(e) {
//     const formData = form.elements;

//     const email = formData.email.value;

//     const message = formData.message.value;

//     const dataToSave = { email, message };


//     localStorage.setItem(FEEDBACK_KEY, JSON.stringify(dataToSave))

// }


// function formSubmit(e) {
//     e.preventDefault();

//     const {elements: { email, message }} = e.currentTarget;
// console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));


// e.currentTarget.reset();
// localStorage.removeItem(FEEDBACK_KEY);

// }


// function getDataStorage() {
//     const saveData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

//     if (saveData) {
//         emailInput.value = saveData.email;
//         messageInput.value = saveData.message;
//     }
// }

