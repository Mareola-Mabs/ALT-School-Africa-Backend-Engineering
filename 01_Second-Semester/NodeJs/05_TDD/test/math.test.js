const sum = require('../src/mathLib')

// Addition Test
test('adds 1 + 2 to equal 3', () => {
  expect(sum.add(1, 2)).toBe(3);
});

// Subtraction Test
test('subtracts 10 - 5 to equal 5', ()=>{
    expect(sum.sub(1, 2)).toBe(-1)
})

// Multiplication Test
test('multiplies 1 and 2 to equal 2', ()=>{
    expect(sum.mul(1, 2)).toBe(2)
})

// Power Test
test('raises 1 to power 2 to equal 1', ()=>{
    expect(sum.pow(1, 2)).toBe(1)
})

// Division Test
test('divides 1 by 2 equal 0.5', ()=>{
    expect(sum.div(1, 2)).toBe(0.5)
})

// Mean Test
test('find mean of [1,2,3,4,5] equal 3', ()=>{
    expect(sum.mean([1, 2, 3, 4, 5])).toBe(3)
})