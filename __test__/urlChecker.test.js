// Import the js file to test
import { checkForURL } from '../src/client/js/urlChecker';

describe('Testing the url checker functionality', () => {
  test('Testing the checkForURL() function', () => {
    expect(checkForURL).toBeDefined();
  });
});

describe('Testing the url checker for Valid URL', () => {
  test('Testing the checkForURL() function', () => {
    let inputURL = 'https://www.nytimes.com/2020/11/23/us/ashley-diamond-transgender-prison.html'
    expect(checkForURL(inputURL)).toBe(true);
  });
});

describe('Testing the url checker for not Valid URL', () => {
  test('Testing the checkForURL() function', () => {
    let inputURL = 'htps://www.nytimes.com/2020/11/23/us/ashley-diamond-transgender-prison.html'
    expect(checkForURL(inputURL)).toBe(false);
  });
});