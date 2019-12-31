export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [503, 'Service Unavailable'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
