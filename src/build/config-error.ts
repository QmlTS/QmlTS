export class ConfigError extends Error {
  constructor(
    readonly field: string,
    readonly value: unknown,
    message: string,
  ) {
    super(message);
    this.name = 'ConfigError';
  }
}
