export const STORAGE_KEY = 'footer_clientInfo';

export const refs = {
    form: document.querySelector('.footer-form-sign'),
    submit: document.querySelector('[data-footer-form-submit]'),
    name: document.querySelector('[name="footer_name"]'),
    phone: document.querySelector('[name="footer_phone"]'),
    comment: document.querySelector('[name="footer_comment"]'),
}

const { form, name, phone, comment } = refs;

form.addEventListener('input', _.throttle(onFormInput, 300));

const formData = {
    footer_name: "",
    footer_phone: "",
    footer_comment: "",
}

getSavedFormData()

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getSavedFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);

    if (parsedFormData) {
        name.value = parsedFormData.footer_name;
        phone.value = parsedFormData.footer_phone;
        comment.value = parsedFormData.footer_comment;

        formData.footer_name = parsedFormData.footer_name;
        formData.footer_phone = parsedFormData.footer_phone;
        formData.footer_comment = parsedFormData.footer_comment;
    }
}