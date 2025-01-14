const dropDownIcon = document.getElementById('drop-down-icon');
const dropDown = document.getElementById('drop-down-ele');
const dropDownItem = document.getElementById('drop-down-item');

function removeActiveClass() {
  setTimeout(() => {
    if (!dropDown.matches(':hover') && !dropDownItem.matches(':hover')) {
      dropDownIcon.classList.remove('active');
      dropDownItem.classList.remove('active');
    }
  }, 100);
}

dropDown.addEventListener('mouseover', () => {
  dropDownIcon.classList.add('active');
  dropDownItem.classList.add('active');
});

dropDown.addEventListener('mouseleave', removeActiveClass);
dropDownItem.addEventListener('mouseleave', removeActiveClass);
