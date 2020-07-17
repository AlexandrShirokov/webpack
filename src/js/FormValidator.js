export class FormValidator {
  constructor(form, errorMessages) {
    this.form = form;
    this.errorMessages = errorMessages;
    this.button = this.form.querySelector('.popup__button');
    this.error = this.form.querySelectorAll('.error');
  }

  clearError() {
   this.error.forEach(function(elem) {
      elem.textContent = "";
    });
  }

  checkInputValidity(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity(this.errorMessages.empty);
      return false
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(this.errorMessages.wrongLength);
      return false
    }
    if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity(this.errorMessages.wrongUrl);
      return false
    }
    return input.checkValidity();
  }

  validFieldInput(input) {
    const errorElem = input.closest('.popup__form').querySelector(`#${input.id}-error`);
    this.checkInputValidity(input);
    errorElem.textContent = input.validationMessage;
  }

  setSubmitButtonState(state) {
    if (state) {
      this.button.removeAttribute('disabled');
      this.button.classList.add('popup__button_valid');
      this.button.classList.remove('popup__button_invalid');
    } else {
        this.button.setAttribute('disabled', true);
        this.button.classList.add('popup__button_invalid');
        this.button.classList.remove('popup__button_valid');
      }
  }

  handlerInputForm(event) {
    const target = event.target;
    const currentForm = event.currentTarget;
    this.validFieldInput(target);
    if (currentForm.checkValidity()) {
      this.setSubmitButtonState(true);
    } else {
        this.setSubmitButtonState(false);
    }
  }

  setEventListeners() {
    this.form.addEventListener('input', this.handlerInputForm.bind(this), true);
  }
}

