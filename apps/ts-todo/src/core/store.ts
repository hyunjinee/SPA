type GlobalState = {
  [key: string]: { state: unknown; observers: Function[] };
};

const globalState: GlobalState = {};

const subscribe = (key: string, observers: Function) => {
  globalState[key].observers = [...globalState[key].observers, observers];
};

const notify = (key: string) => globalState[key].observers.forEach((observer) => observer());

const initState = ({ key, defaultValue }: { key: string; defaultValue: unknown }) => {
  if (key in globalState) throw new Error('key already exists');
  globalState[key] = { state: defaultValue, observers: [] };
};

const getState = (key: string) => {
  if (!(key in globalState)) throw new Error('key not exists');
  return globalState[key].state;
};

const setState = (key: string, newState: unknown) => {
  if (!(key in globalState)) throw new Error('key not exists');
  globalState[key].state = newState;
  notify(key);
};

export { initState, getState, setState, subscribe };
