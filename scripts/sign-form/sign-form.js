
export const refs = {
    body: document.querySelector('[data-body]'),
    backdrop: document.querySelector('[data-backdrop]'),
    closeButton: document.querySelector('[data-modalClose]'),
}

refs.body.addEventListener('click', onOpenModal);
refs.closeButton.addEventListener('click', onCloseModal);

function onOpenModal(e) {
    const onOpenFormButtonClick = e.target;

    if (onOpenFormButtonClick.hasAttribute('data-onOpenModal')) {
        refs.backdrop.classList.add('shown');
        refs.body.addEventListener('keydown', onEscCloseModal);
        refs.backdrop.addEventListener('click', onBackdropCloseModal);
    }
}

export function onCloseModal ()  {
    refs.backdrop.classList.remove('shown');
    refs.body.removeEventListener('Keydown', onEscCloseModal);
    refs.backdrop.removeEventListener('click', onBackdropCloseModal);
}

function onEscCloseModal(e) {
    if (e.keyCode === 27) {
        onCloseModal();
    }
}

function onBackdropCloseModal(e) {
    const isBackdrop = e.target === refs.backdrop;

    if (isBackdrop) {
        onCloseModal();
    }
}