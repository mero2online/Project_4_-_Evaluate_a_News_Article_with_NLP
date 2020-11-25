function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputURL = document.getElementById('url-input').value;
  Client.checkForURL(inputURL);

  fetch('/api')
    .then((data) => data.json())
    .then(function (data) {
      let apiKey = data.apiKey;
      // Base URL for MeaningCloud API
      let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${inputURL}&lang=en`;
      console.log('::: Form Submitted :::');
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

export { handleSubmit };
