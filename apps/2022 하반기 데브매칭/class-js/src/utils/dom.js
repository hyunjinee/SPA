export const $ = (selector, $parent = document) =>
  $parent.querySelector(selector);

// export const createElement = (tagName, props, ...children) => {
//   const $el = document.createElement(tagName);
//   Object.entries(props || {}).forEach(([key, value]) => {
//     $el[key.toLowerCase()] = value;
//   });
//   children.flat().forEach((child) => {
//     if (child instanceof Element) {
//       $el.appendChild(child);
//     } else {
//       $el.appendChild(document.createTextNode(child));
//     }
//   });
//   return $el;
// };

export const createElement = (tagName, props, children) => {
  const $elem = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    $elem[key.toLowerCase()] = value;
  });
  if (children) {
    $elem.append(...children);
  }

  return $elem;
};
