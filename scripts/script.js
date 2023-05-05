// Get apps list and apps btn
const appsList = document.querySelector('.apps-list');
const appsBtn = document.querySelector('.apps-btn');

// Add event listener
appsBtn.addEventListener('click', function(e) {
    appsList.classList.toggle('hidden');
});