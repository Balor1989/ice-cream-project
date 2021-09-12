(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-yellow]'),
      closeModalBtn: document.querySelector('[data-modal-close-yellow]'),
      modal: document.querySelector('[data-modal-yellow]'),
      body: document.querySelector('[open-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('is-hidden');
    }
  })();