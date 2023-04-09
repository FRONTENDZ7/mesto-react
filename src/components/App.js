import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); // Редактирование аватара
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); // Редактирование профиля
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); // Добавление карточки
  const [isImageOpen, setIsImageOpen] = useState(false); // Увеличение изображения
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // Удаление карточки
  const [selectedCard, setSelectedCard] = useState({}); // Передача данных при увеличении изображения

  function editAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function editProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function addPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function deleteCard() {
    setIsDeleteOpen(true);
  }

  function makeCardClick(cardItem) {
    setIsImageOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: cardItem.name,
      link: cardItem.link,
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
    setIsDeleteOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={editAvatarClick}
        onEditProfile={editProfileClick}
        onAddPlace={addPlaceClick}
        onCardClick={makeCardClick}
        onCardDelete={deleteCard}
      />
      <Footer />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup
        isOpen={isImageOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
      <PopupWithForm
        isOpen={isDeleteOpen}
        onClose={closeAllPopups}
        id="delete-card"
        title="Вы уверены?"
        type="delete-card"
        buttonText="Да"
      />
    </div>
  );
}

export default App;
