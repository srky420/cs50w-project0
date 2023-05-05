// Apps tab
const appsList = document.querySelector('.apps-list');
const appsBtn = document.querySelector('.apps-btn');

appsBtn.addEventListener('click', function(e) {
    appsList.classList.toggle('hidden');
});

// Settings tab
const settingsList = document.querySelector('.settings-list');
const settingsBtn = document.querySelector('.settings-link');

settingsBtn.addEventListener('click', function(e) {
    settingsList.classList.toggle('hidden');
});

// Reset
document.body.addEventListener('click', function(e) {
    if (e.target !== settingsBtn) {
        settingsList.classList.add('hidden');
    }
    if (e.target.id !== 'app') {
        appsList.classList.add('hidden');
    }   
});
