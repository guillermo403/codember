export const objectToString = (obj) => Object.entries(obj)
  .map(w => w.join(""))
  .join("")