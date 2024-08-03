let form = document.querySelector('.form-app');
let popupCloseBtn = document.querySelector('.popup-close');

form.addEventListener('submit', (e) => {
  showPopup();
})
popupCloseBtn.addEventListener('click', (e) => {
  closePopup();
})

function showPopup() {
    var popupOverlay = document.getElementById('popup-overlay');
    var popup = document.getElementById('popup');
    popupOverlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    var popupOverlay = document.getElementById('popup-overlay');
    var popup = document.getElementById('popup');
    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
    window.location.reload();
}