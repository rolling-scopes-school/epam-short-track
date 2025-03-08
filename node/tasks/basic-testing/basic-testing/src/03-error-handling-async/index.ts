export const resolveValue = async (value: unknown) => {
  return value;
};

export const throwError = (msg?: string) => {
  throw new Error(msg ?? 'Oops!');
};

export const throwCustomError = () => {
  throw new MyAwesomeError();
};

export const rejectCustomError = async () => {
  throw new MyAwesomeError();
};

export class MyAwesomeError extends Error {
  constructor() {
    super('This is my awesome custom error!');
  }
}
