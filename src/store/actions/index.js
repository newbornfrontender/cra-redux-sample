export const increment = (number) => ({
  type: 'INCREMENT',
  payload: number,
});

export const decrement = (number) => ({
  type: 'DECREMENT',
  payload: number,
});

export const signIn = () => ({
  type: 'SIGN_IN',
});
