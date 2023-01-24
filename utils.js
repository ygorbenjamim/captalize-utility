export const capitalize = text => {
  if (!text) return undefined;
  return text
    .split(" ")
    .map(word => (word.length === 2 ? word : word[0].toUpperCase() + word.slice(1)))
    .join(" ");
};
