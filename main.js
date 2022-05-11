let selectedOption = '';

const letRating = document.querySelector('.let-rating');
const thankyou = document.querySelector('.thankyou');
const option = document.querySelector('.thankyou span');
const btnSubmit = document.querySelector('.button-submit');
const btnsRating = document.querySelectorAll('.rating');

btnsRating.forEach(btn => btn.addEventListener('click', () => {
    selectedOption = btn.textContent;
    removeSelection();
    btn.classList.add('selected');
}));

btnSubmit.addEventListener('click', () => {
    if (selectedOption === '') return;
    letRating.classList.add('hidden');
    option.textContent = selectedOption;
    thankyou.classList.remove('hidden');
});

function removeSelection() {
    btnsRating.forEach(btn => btn.classList.remove('selected'));
}