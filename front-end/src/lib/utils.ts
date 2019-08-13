type Handlers<T> = {
  [type: string]: (state: T, action: any) => T;
};

export const createReducer = <S>(handlers: Handlers<S>, initialState: S) => {
  return (state: S = initialState, action: any) => {
    const handler = handlers[action.type];
    if (!handler) return state;
    return handler(state, action);
  };
};
