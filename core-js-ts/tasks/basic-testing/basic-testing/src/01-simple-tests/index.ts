export enum Action {
  Add = '+',
  Subtract = '-',
  Divide = '/',
  Multiply = '*',
  Exponentiate = '^',
}

type RawCalculatorInput = {
  a: unknown;
  b: unknown;
  action: unknown;
};

type ValidCalculatorInput = {
  a: number;
  b: number;
  action: Action;
};

export const simpleCalculator = (
  rawInput: RawCalculatorInput,
): number | null => {
  if (!isInputValid(rawInput)) {
    return null;
  }

  const { a, b, action } = rawInput;

  switch (action) {
    case Action.Add:
      return a + b;
    case Action.Subtract:
      return a - b;
    case Action.Multiply:
      return a * b;
    case Action.Divide:
      return a / b;
    case Action.Exponentiate:
      return a ** b;
  }
};

const isInputValid = (
  input: RawCalculatorInput,
): input is ValidCalculatorInput => {
  const { a, b, action } = input;

  const actionValid = Object.values(Action).includes(action as Action);
  const argumentsValid = typeof a === 'number' && typeof b === 'number';

  return actionValid && argumentsValid;
};
