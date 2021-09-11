(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-modal-close-mobile]'),
    modal: document.querySelector('[data-modal-mobile]'),
    body: document.querySelector('[open-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('is-hidden');
  }
})();