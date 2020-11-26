# Evaluate a News Article with Natural Language Processing Project

## Main Object

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites with using an API called [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis), we can build a simple web interface to interact with NLP system.
We will use Sentiment Analysis API tools.

#### What is Sentiment Analysis?

Sentiment Analysis is MeaningCloud's solution for performing a detailed multilingual sentiment analysis of texts from different sources.

The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment; to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

Besides polarity at sentence and global level, Sentiment Analysis uses advanced natural language processing techniques to also detect the polarity associated to both entities and concepts in the text. It provides a reference in the relevant sentence and a list of elements detected with the aggregated polarity derived from all their appearances, also taking into account the grammatical structures in which they are contained.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

## Objects

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

---

## Tools

1- MeaningCloud Sentiment Analysis API
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Create an account with MeaningCloud, you will be given a license key to start using the API.
2- Environment Variables called dotenv
We need to declare our API keys, which will look something like this:

```javascript
// set MeaningCloud API credentias
const apiKey = 'your-key';
```
...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

We will use npm called dotenv to allow us to use environment variables.
- [ ] Create a new ```.env``` file in the root of project
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Start run the project
```
npm start
```
3- Unit Testing using Jest Framework
[Jest](https://jestjs.io/en/) is a framework for testing JavaScript projects. We are interested in the unit-testing of our project. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. Let's learn to add Jest to your project to handle unit-testing.
```
// To run test
npm run test
```
4- Service Workers
We add Work box Plugin from Google to make the site available offline when you stop your local server.

## Deployment
I have deploy this project to be live on [Netlify](https://www.netlify.com/)
To access it live [Click Here](https://evaluate-news-article-with-nlp.netlify.app/)

#### Issue
I got issue with deploy the project on Netlify because ```.env``` file not included in the project but I still working on this issue to solve it.
### License

Evaluate a News Article with Natural Language Processing App Project is Copyright © 2020 Udaciy.
It is open source project, and redistributed under the terms specified in the
[LICENSE] file.

[license]: https://github.com/mero2online/Project_4_-_Evaluate_a_News_Article_with_NLP/blob/master/LICENSE
