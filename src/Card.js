class Card {
  constructor(item, template, openImageCallback) {
    this.item = item;
    this.template = template;
    this.card = null;
    this.remove = this.remove.bind(this);
    this.openImageCallback = openImageCallback;
    this.openImage = this.openImage.bind(this);
  }

  like(event) {
    const target = event.target;
    if (target.classList.contains('place-card__like-icon')) {
      target.classList.toggle('place-card__like-icon_liked')
    }
  }

  remove(event) {
    const target = event.target;
    if (target.classList.contains('place-card__delete-icon')) {
      this.card.remove();
      this.removeListeners();
      this.card = null;
    }
  }

  create() {
    this.card = this.template.cloneNode(true);
    this.card.querySelector('.place-card__name').textContent = this.item.name;
    this.card.querySelector('.place-card__image').setAttribute('style', `background-image: url(${this.item.link})`);
    this.card.querySelector('.place-card__image').setAttribute('data-url', `${this.item.link}`);
    this.likeIcon = this.card.querySelector('.place-card__like-icon');
    this.deleteIcon = this.card.querySelector('.place-card__delete-icon');
    this.image = this.card.querySelector('.place-card__image');
    this.setListeners();
    return this.card
  }

  openImage() {
    this.openImageCallback(this.item.link);
}

  setListeners() {
    this.likeIcon.addEventListener('click', this.like);
    this.deleteIcon.addEventListener('click', this.remove);
    this.image.addEventListener('click', this.openImage);
  }

  removeListeners() {
    this.likeIcon.removeEventListener('click', this.like);
    this.deleteIcon.removeEventListener('click', this.remove);
    this.image.removeEventListener('click', this.openImage);
  }
}



