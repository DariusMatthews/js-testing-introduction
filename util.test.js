const { generateText, checkAndGenerate } = require('./util');

// unit test function output
test('should output name and age', () => {
  const text = generateText('max', 29);
  expect(text).toBe('max (29 years old)');
});

// unit test output with no input data
test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

// integration test 
test('should generate a valid text output', () => {
  const text = checkAndGenerate('max', 29);
  expect(text).toBe('max (29 years old)');
})
