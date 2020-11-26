function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputURL = document.getElementById('url-input').value;

  let validityAlert = document.querySelector('.validityAlert');
  let validityAlert_message = document.querySelector('.validityAlert-message');
  // check if alert message exist to remove it
  if (
    typeof validityAlert_message != 'undefined' &&
    validityAlert_message != null
  ) {
    validityAlert_message.remove();
  }

  console.log('::: Form Submitted :::');
  
  // check if inputURL vaild print message and if not vaild print another message
  if (Client.checkForURL(inputURL)) {
    validityAlert.insertAdjacentHTML(
      'afterbegin',
      '<div class="validityAlert-message valid-url">URL is valid</div>'
    );
  } else {
    validityAlert.insertAdjacentHTML(
      'afterbegin',
      '<div class="validityAlert-message not-vaild-url">URL is not valid!</div>'
    );
  }
  // fetch api key from server to make API call
  fetch('/api')
    .then((data) => data.json())
    .then(function (data) {
      let apiKey = data.apiKey;

      // Base URL for MeaningCloud API
      let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${inputURL}&lang=en`;

      // fetch data from MeaningCloud API and print it to html file
      fetch(baseURL)
        .then((res) => res.json())
        .then(function (res) {
          console.log(res);
          var allData = JSON.stringify(res);
          document.getElementById('agreement-result').innerHTML = `Agreement: ${res.agreement}`
          document.getElementById('confidence-result').innerHTML = `Confidence: ${res.confidence}`
          document.getElementById('irony-result').innerHTML = `Irony: ${res.irony}`
          document.getElementById('model-result').innerHTML = `Model: ${res.model}`
          document.getElementById('subjectivity-result').innerHTML = `Subjectivity: ${res.subjectivity}`;
          document.getElementById('score-tag-result').innerHTML = `Score Tag: ${res.score_tag}`;
          document.getElementById('all-result').innerHTML = `All info: ${allData}`;
        });
    });
}

export {
  handleSubmit
};