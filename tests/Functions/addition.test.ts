import {add} from '../../src/app/Functions/addition'

test('Addition - should return sum of two numbers', () => {
    const result = add(2,2);
    expect(result).toBe(4);
})