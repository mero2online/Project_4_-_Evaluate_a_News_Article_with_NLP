// Import the js file to test
import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe('Testing the typeof handleSubmit() to be a function', () => {
  test('It should be a function', () => {
    expect(typeof handleSubmit).toBe('function');
  });
});
