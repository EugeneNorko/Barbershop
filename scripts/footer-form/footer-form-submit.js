import { refs } from './footer-form-localstorage.js'
import { STORAGE_KEY } from './footer-form-localstorage.js';


const { form } = refs;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}