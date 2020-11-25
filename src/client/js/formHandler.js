function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  fetch('/api')
    .then((data) => data.json())
    .then(function (data) {
      let apiKey = data.apiKey;
      // Base URL for MeaningCloud API
      let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${formText}&lang=en`;
      console.log('::: Form Submitted :::');
      fetch(baseURL)
        .then((res) => res.json())
        .then(function (res) {
          console.log(res);
          document.getElementById('agreement-result').innerHTML = `Agreement: ${res.agreement.toLowerCase()}`
          document.getElementById('confidence-result').innerHTML = `Confidence: ${res.confidence}`
          document.getElementById('irony-result').innerHTML = `Irony: ${res.irony.toLowerCase()}`
          document.getElementById('model-result').innerHTML = `Model: ${res.model}`
          document.getElementById('subjectivity-result').innerHTML = `Subjectivity: ${res.subjectivity.toLowerCase()}`;
          document.getElementById('score-tag-result').innerHTML = `Score Tag: ${res.score_tag}`;
        });
    });
}

export { handleSubmit };
