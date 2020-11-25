function checkForURL(inputURL) {
  console.log('::: Running checkForURL :::', inputURL);

  let validityAlert = document.querySelector('.validityAlert');
  let validityAlert_message = document.querySelector('.validityAlert-message');

  function validURL(inputURL) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(inputURL);
  }

  if (
    typeof validityAlert_message != 'undefined' &&
    validityAlert_message != null
  ) {
    validityAlert_message.remove();
  }

  if (validURL(inputURL)) {
    validityAlert.insertAdjacentHTML(
      'afterbegin',
      '<div class="validityAlert-message">URL is valid</div>'
    );
    return true;
  }
  validityAlert.insertAdjacentHTML(
    'afterbegin',
    '<div class="validityAlert-message">URL is not valid!</div>'
  );
  return false;
}

export { checkForURL };
