import { date, dateTime } from './sign-form-date.js';
import { setDate, settingObj } from './sign-form-date.js';

export const STORAGE_KEY = "clientInfo";
export const refs = {
    form: document.querySelector('.form-modal'),
    name: document.querySelector('[name="name"]'),
    phone: document.querySelector('[name="phone"]'),
    comment: document.querySelector('[name="comment"]'),
}
const { form, name, phone, comment } = refs;

const formData = {
    name: "",
    phone: "",
    date: "",
    time: "10:00",
    comment: "",
}

getSavedFormData()
setDate(settingObj);

form.addEventListener('input', _.throttle(setStorageData, 300));

function setStorageData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getSavedFormData() {
    const SavedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(SavedFormData);

    if (parsedData) {
        name.value = parsedData.name;
        phone.value = parsedData.phone;
        if (date.value) {
            settingObj.defaultDate = parsedData.date;  
        };
        dateTime.value = parsedData.time;
        comment.value = parsedData.comment;

        formData.name = parsedData.name;
        formData.phone = parsedData.phone;
        formData.date = parsedData.date;
        formData.time = parsedData.time;
        formData.comment = parsedData.comment;
    }
}
