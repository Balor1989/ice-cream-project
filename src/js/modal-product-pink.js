(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pink]'),
    closeModalBtn: document.querySelector('[data-modal-close-pink]'),
    modal: document.querySelector('[data-modal-pink]'),
    body: document.querySelector('[open-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('is-hidden');
  }
})();