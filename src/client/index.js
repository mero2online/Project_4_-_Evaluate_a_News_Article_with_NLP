import { checkForURL } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log(checkForURL);

// alert('I EXIST');
// console.log('CHANGE!!');

export { checkForURL, handleSubmit };

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var all_result = this.nextElementSibling;
    if (all_result.style.display === 'block') {
      all_result.style.display = 'none';
    } else {
      all_result.style.display = 'block';
    }
  });
}
