import ErrorRepository from '../app';

const errors = new ErrorRepository();

describe('ErrorRepository', () => {
  test('should return error`s description', () => {
    const result = errors.translate(403);

    expect(result).toBe('Forbidden');
  });

  test('should return "Unknown error"', () => {
    const result = errors.translate(777);

    expect(result).toBe('Unknown error');
  });
});
