// utils/toastBus.js
const listeners = [];

export const toast = {
  subscribe(fn) {
    listeners.push(fn);
  },
  unsubscribe(fn) {
    const index = listeners.indexOf(fn);
    if (index > -1) listeners.splice(index, 1);
  },
  emit(data) {
    listeners.forEach((fn) => fn(data));
  },
};