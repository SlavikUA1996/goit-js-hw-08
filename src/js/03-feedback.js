import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('.feedback-form input');

const messageInput = document.querySelector('.feedback-form textarea');

const FEEDBACK_KEY = "feedback-form-state";

const formData = {};


getDataStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
    const formData = form.elements;

    const email = formData.email.value;

    const message = formData.message.value;

    const dataToSave = { email, message };


    localStorage.setItem(FEEDBACK_KEY, dataToSave)

}


function formSubmit(e) {
    e.preventDefault();

    const { elements: { email, message } } = e.currentTarget;
console.log(localStorage.getItem(FEEDBACK_KEY));


e.currentTarget.reset();
localStorage.removeItem(FEEDBACK_KEY);

}


function getDataStorage() {
    const saveData = localStorage.getItem(FEEDBACK_KEY);

    if (saveData) {
        emailInput.value = saveData.email;
        messageInput.value = saveData.message;
    }
}

