import MathCharacter from '../MathCharacter';
import ArrayBufferConverter from '../ArrayBuffer';

test('return stoned decrease attack', () => {
  const harry = new MathCharacter('Harry', 100, true, 2);
  expect(harry.attack).toBe(86);
});

test('return usual decrease attack', () => {
  const irvin = new MathCharacter('Irvin', 100, false, 3);
  expect(irvin.attack).toBe(80);
});

test('return object', () => {
  const buffer = new ArrayBufferConverter();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load(result);

  expect(buffer.toString()).toEqual(result);
});