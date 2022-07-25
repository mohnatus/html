export function useHash() {
  const hash = window.location.hash;
  const value = hash ? hash.slice(1) : "";

  const setValue = (v) => {
    window.location.hash = v;
  };

  return [value, setValue];
}
