export default function useSessionStorage() {
  const sendToSessionStorage = (key, data) => window
    .sessionStorage.setItem(key, JSON.stringify(data));

  const getFromSessionStorage = (key) => {
    const data = window.sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  return { sendToSessionStorage, getFromSessionStorage };
}
