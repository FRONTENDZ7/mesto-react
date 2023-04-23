import apiFindings from './apiFindings';

class Api {
  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
  }

  _processingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  addNewCard(name, link) {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  getUserData() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  sendUserData(userName, userAbout) {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name: userName, about: userAbout }),
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  sendAvatarData(avatarLink) {
    return fetch(`${this._link}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatar }),
    }).then((res) => {
      return this._processingServerResponse(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._link}cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'PUT',
      }).then((res) => {
        return this._processingServerResponse(res);
      });
    } else {
      return fetch(`${this._link}cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'DELETE',
      }).then((res) => {
        return this._processingServerResponse(res);
      });
    }
  }
}

const apiConnect = new Api(apiFindings);

export default apiConnect;
