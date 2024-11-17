import{ ageClassification, weekFn } from "./script.js";

describe('ageClassification', () => {

    it('повертає null для віку < 0', () => {
      expect(ageClassification(-1)).toBeNull();
    });
  
    it('повертає null для віку 0', () => {
      expect(ageClassification(0)).toBeNull();
    });
  
    it('повертає "Дитинство" для віку від 1 до 24', () => {
      expect(ageClassification(1)).toBe('Дитинство');
      expect(ageClassification(24)).toBe('Дитинство');
    });
  
    it('повертає "Молодість" для віку від 24.01 до 44', () => {
      expect(ageClassification(24.01)).toBe('Молодість');
      expect(ageClassification(44)).toBe('Молодість');
    });
  
    it('повертає "Зрілість" для віку від 44.01 до 65', () => {
      expect(ageClassification(44.01)).toBe('Зрілість');
      expect(ageClassification(65)).toBe('Зрілість');
    });
  
    it('повертає "Старість" для віку від 65.01 до 75', () => {
      expect(ageClassification(65.01)).toBe('Старість');
      expect(ageClassification(75)).toBe('Старість');
    });
  
    it('повертає "Довголіття" для віку від 75.01 до 90', () => {
      expect(ageClassification(75.01)).toBe('Довголіття');
      expect(ageClassification(90)).toBe('Довголіття');
    });
  
    it('повертає "Рекорд" для віку від 90.01 до 122', () => {
      expect(ageClassification(90.01)).toBe('Рекорд');
      expect(ageClassification(122)).toBe('Рекорд');
    });
  
    it('повертає null для віку > 122', () => {
      expect(ageClassification(122.01)).toBeNull();
      expect(ageClassification(150)).toBeNull();
    });
  
});





describe('weekFn', () => {

  it('повертає "Понеділок" для числа 1', () => {
    expect(weekFn(1)).toBe('Понеділок');
  });

  it('повертає "Вівторок" для числа 2', () => {
    expect(weekFn(2)).toBe('Вівторок');
  });

  it('повертає "Середа" для числа 3', () => {
    expect(weekFn(3)).toBe('Середа');
  });

  it('повертає "Четвер" для числа 4', () => {
    expect(weekFn(4)).toBe('Четвер');
  });

  it('повертає "П\'ятниця" для числа 5', () => {
    expect(weekFn(5)).toBe('П\'ятниця');
  });

  it('повертає "Субота" для числа 6', () => {
    expect(weekFn(6)).toBe('Субота');
  });

  it('повертає "Неділя" для числа 7', () => {
    expect(weekFn(7)).toBe('Неділя');
  });

  it('повертає null для числа 9', () => {
    expect(weekFn(9)).toBeNull();
  });

  it('повертає null для дробового числа (1.5)', () => {
    expect(weekFn(1.5)).toBeNull();
  });

  it('повертає null для рядка "2"', () => {
    expect(weekFn('2')).toBeNull();
  });

  it('повертає null для від\'ємного числа (-1)', () => {
    expect(weekFn(-1)).toBeNull();
  });

});