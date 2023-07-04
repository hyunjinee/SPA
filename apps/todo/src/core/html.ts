export const html = (str: TemplateStringsArray, ...args: unknown[]) => {
  const resultHTML = str.map((s, i) => `${s}${args[i] || ''}`).join('');
  const parser = new DOMParser();
  const doc = parser.parseFromString(resultHTML, 'text/html');
  // console.log(doc.body.firstElementChild);
  return doc.body.firstElementChild!;
};
