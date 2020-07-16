export class UserInfo {
  constructor(avatar, name, about) {
    this.avatar = avatar;
    this.name = name;
    this.about = about;
    this.inputName = '';
    this.inputAbout = '';
  }

  setUserInfo(avatarLink, nameValue, aboutValue) {
    this.avatar.setAttribute('src', avatarLink);
    this.inputName = nameValue;
    this.inputAbout = aboutValue;
  }

  updateUserInfo() {
    this.name.textContent = this.inputName;
    this.about.textContent = this.inputAbout;
  }

  getUserInfo() {
    return {
      name: this.inputName,
      about: this.inputAbout
    };
  }
}

