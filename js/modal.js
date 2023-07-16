
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop : document.querySelector(".backdrop")
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.backdrop.addEventListener("click", closeModalByBackDrop)

  function openModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.addEventListener("keydown", closeModalByKeyboard);
  }
  function closeModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.removeEventListener("keydown", closeModalByKeyboard);
  }

function closeModalByKeyboard (event){
  if(event.code === "Escape") {
closeModal();
}
}

function closeModalByBackDrop (event){
  if(event.currentTarget === event.target){
    closeModal()
  }
}

