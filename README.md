# captalize-utility
Função utilitária para colocar as primeiras letras de um texto em upperCase.

## Código

```js
export const toCaptalize = (text) => {
  if(!text) return undefined;
  const words = text.split(' ');
  return words.map(word => word.length == 2 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
```
