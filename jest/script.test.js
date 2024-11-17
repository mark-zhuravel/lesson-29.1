const { ageClassification, weekFn } = require("./script.js");

describe('ageClassification', () => {

    test('повертає null для віку < 0', () => {
      expect(ageClassification(-1)).toBeNull();
    });
  
    test('повертає null для віку 0', () => {
      expect(ageClassification(0)).toBeNull();
    });
  
    test('повертає "Дитинство" для віку від 1 до 24', () => {
      expect(ageClassification(1)).toBe('Дитинство');
      expect(ageClassification(24)).toBe('Дитинство');
    });
  
    test('повертає "Молодість" для віку від 24.01 до 44', () => {
      expect(ageClassification(24.01)).toBe('Молодість');
      expect(ageClassification(44)).toBe('Молодість');
    });
  
    test('повертає "Зрілість" для віку від 44.01 до 65', () => {
      expect(ageClassification(44.01)).toBe('Зрілість');
      expect(ageClassification(65)).toBe('Зрілість');
    });
  
    test('повертає "Старість" для віку від 65.01 до 75', () => {
      expect(ageClassification(65.01)).toBe('Старість');
      expect(ageClassification(75)).toBe('Старість');
    });
  
    test('повертає "Довголіття" для віку від 75.01 до 90', () => {
      expect(ageClassification(75.01)).toBe('Довголіття');
      expect(ageClassification(90)).toBe('Довголіття');
    });
  
    test('повертає "Рекорд" для віку від 90.01 до 122', () => {
      expect(ageClassification(90.01)).toBe('Рекорд');
      expect(ageClassification(122)).toBe('Рекорд');
    });
  
    test('повертає null для віку > 122', () => {
      expect(ageClassification(122.01)).toBeNull();
      expect(ageClassification(150)).toBeNull();
    });
});






describe('weekFn', () => {
    test('повертає "Понеділок" для числа 1', () => {
      expect(weekFn(1)).toBe('Понеділок');
    });
  
    test('повертає "Вівторок" для числа 2', () => {
      expect(weekFn(2)).toBe('Вівторок');
    });
  
    test('повертає "Середа" для числа 3', () => {
      expect(weekFn(3)).toBe('Середа');
    });
  
    test('повертає "Четвер" для числа 4', () => {
      expect(weekFn(4)).toBe('Четвер');
    });
  
    test('повертає "П\'ятниця" для числа 5', () => {
      expect(weekFn(5)).toBe('П\'ятниця');
    });
  
    test('повертає "Субота" для числа 6', () => {
      expect(weekFn(6)).toBe('Субота');
    });
  
    test('повертає "Неділя" для числа 7', () => {
      expect(weekFn(7)).toBe('Неділя');
    });
  
    test('повертає null для числа 9', () => {
      expect(weekFn(9)).toBeNull();
    });
  
    test('повертає null для дробового числа (1.5)', () => {
      expect(weekFn(1.5)).toBeNull();
    });
  
    test('повертає null для рядка "2"', () => {
      expect(weekFn('2')).toBeNull();
    });
  
    test('повертає null для від\'ємного числа (-1)', () => {
      expect(weekFn(-1)).toBeNull();
    });
});
