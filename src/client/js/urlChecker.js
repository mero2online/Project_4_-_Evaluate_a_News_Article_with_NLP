function checkForURL(inputURL) {
  console.log('::: Running checkForURL :::', inputURL);

  function validURL(inputURL) {
    var regexp = /(?:http[s]?\/\/)?(?:[\w\-]+(?::[\w\-]+)?@)?(?:[\w\-]+\.)+(?:[a-z]{2,4})(?::[0-9]+)?(?:\/[\w\-\.%]+)*(?:\?(?:[\w\-\.%]+=[\w\-\.%!]+&?)+)?(#\w+\-\.%!)?/;
    return regexp.test(inputURL);
  }

  if (validURL(inputURL)) {
    alert('Url is valid');
    return true;
  }
  alert('Url is not valid!');
  return false;
}

export { checkForURL };
