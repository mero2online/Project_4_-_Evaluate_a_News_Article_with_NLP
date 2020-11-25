function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  fetch('/api')
    .then((data) => data.json())
    .then(function (data) {
      console.log(data);
      let apiKey = data.apiKey;
      // Base URL for MeaningCloud API
      let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${formText}&lang=en`;
      console.log('::: Form Submitted :::');
      fetch(baseURL)
        .then((res) => res.json())
        .then(function (res) {
          console.log(res);
          document.getElementById('results').innerHTML = `
          Agreement: ${res.agreement}
          Confidence: ${res.confidence}
          Irony: ${res.irony}
          Model: ${res.model}
          Subjectivity: ${res.subjectivity}`;
        });
    });
}

export { handleSubmit };
