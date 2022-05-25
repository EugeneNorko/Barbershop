import { refs } from './sign-form-localstorage.js'
import { STORAGE_KEY } from './sign-form-localstorage.js'
import { onCloseModal } from './sign-form.js';


const { form } = refs;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    onCloseModal();
}