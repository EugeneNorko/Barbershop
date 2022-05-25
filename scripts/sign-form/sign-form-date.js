export const date = document.querySelector('[data-modal-date]')
export const dateTime = document.querySelector('[data-modal-time]')

export const settingObj = {
        defaultDate: "today",
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        "locale": "ru",
}
    
export function setDate(SettingsObj) {
    flatpickr(date, settingObj);
}

setDate(settingObj);

flatpickr(dateTime, {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    defaultDate: "10:00",
    minTime: "10:00",
    maxTime: "21:00",
    "locale": "ru",
});