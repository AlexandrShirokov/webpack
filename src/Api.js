class Api {
  constructor(options) {
    this.options = options
    this.url = options.url;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
     /** REVIEW: Можно лучше:
     *
     * Повторяющийся код разбора ответа можно вынести в отдельный метод класса и переиспользовать для всех запросов
     * к API
     */
    .then(res => {
      if (res.ok) {
        return res.json();
      }
       /** REVIEW: Можно лучше:
       *
       * return Promise.reject(new Error(`Ошибка: ${res.status}`)); 
       */
      return Promise.reject(res.status)
    })
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(res.status)
    })
  }

  patchUserInfo(nameValue, aboutValue) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: nameValue,
        about: aboutValue
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(res.status)
    })
  }

  // postCard() {

  // }

  // likesCounter() {

  // }

  // deleteCard(cardId) {
  //   return fetch(`${this.url}/cards/${cardId}`, {
  //     headers: this.headers,
  //     method: 'DELETE'
  //   })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } return Promise.reject(res.status)
  //   })
  // }

  // addAndRemoveLike() {

  // }

  // updateAvatar() {

  // }
}

