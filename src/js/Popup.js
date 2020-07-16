export class Popup {
  constructor(popup) {
    this.popup = popup;
    this.toggle = this.toggle.bind(this);
    this.newCloseButton = this.popup.querySelector('.popup__close');
    this.setEventListeners();
  }

  toggle() {
    this.popup.classList.toggle('popup_is-opened');
  }

  setEventListeners() {
    this.newCloseButton.addEventListener('click', this.toggle);
  }
}
