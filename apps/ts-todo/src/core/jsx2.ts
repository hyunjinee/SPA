// const DIRTY_PREFIX = 'dirtyindex:'; // tag names are always all lowercase
// const DIRTY_REGEX = /dirtyindex:(\d+):/;
// const DIRTY_REGEX_G = /dirtyindex:(\d+):/g;
// const DIRTY_SEPERATOR_REGEX_G = /(dirtyindex:\d+:)/g;
const ARG_FLAG = 'dirtyindex:';
const ARG_REGEX = /dirtyindex:(\d+):/;
const ARG_REGEX_G = /dirtyindex:(\d+):/g;
const ARG_SEPERATOR_REGEX_G = /(dirtyindex:\d+:)/g;

export default (strings: TemplateStringsArray, ...args: unknown[]) => {
  const html = stringToHTML(strings, ...args);

  const $fragment = document.createElement('fragment');
  $fragment.innerHTML = html;

  const walker = document.createNodeIterator($fragment, NodeFilter.SHOW_ALL);

  let node;

  function buildDocumentFragmentWith(str?: string) {
    const df = document.createDocumentFragment();
    if (!str) return df;
    df.appendChild(document.createTextNode(str));
    return df;
  }

  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.includes(ARG_FLAG)) {
      const texts = node.nodeValue.split(ARG_SEPERATOR_REGEX_G);

      const doms = texts.map((text) => {
        const dirtyIndex = ARG_REGEX.exec(text)?.[1];
        // console.log(dirtyIndex, '?');

        if (!dirtyIndex) {
          return buildDocumentFragmentWith(text);
        }

        const arg = args[Number(dirtyIndex)];
        if (arg instanceof Node) return arg;
        if (arg instanceof Array) {
          const df = document.createDocumentFragment();
          arg.forEach(($el) => df.append($el));
          return df;
        }

        return buildDocumentFragmentWith(arg as any);
      });

      for (const dom of doms) {
        node.parentNode?.insertBefore(dom, node);
      }

      node.nodeValue = '';

      continue;
    }

    node = <HTMLElement>node;

    let attributes: Attr[] = Array.from(node.attributes ?? []);

    for (let { name, value } of attributes) {
      if (name && value.includes(ARG_FLAG)) {
        const match = ARG_REGEX.exec(value);
        if (!match) continue;
        value = args[Number(match[1])];

        replaceAttribute(name, value, node);
      }
    }
  }

  // console.log($fragment.firstElementChild);

  return $fragment.firstElementChild || $fragment;
};

function replaceSubstitution(match: string, index: string) {
  const replacement = args[Number(index)];
  if (typeof replacement === 'string') {
    return replacement;
  } else if (typeof replacement === 'number') {
    return `${replacement}`;
  }
  return '';
}

function replaceAttribute(name: string, value: any, element: HTMLElement) {
  if (typeof value === 'function') {
    element.addEventListener(name.replace('on', '').toLowerCase(), value);
    element.removeAttribute(name);
  } else if (['string', 'number'].includes(typeof value)) {
    const attribute = element.getAttribute(name);
    const replaced_attr = attribute?.replace(ARG_REGEX_G, replaceSubstitution);
    element.setAttribute(name, replaced_attr ?? '');
  } else if (typeof value === 'boolean') {
    if (value === true) {
      element.setAttribute(name, '');
    } else {
      element.removeAttribute(name);
    }
  }
}

// const jsx = (strings: TemplateStringsArray, ...args: unknown[]) => {
//   // console.log(strings, args);

//   // console.log(args, 'args', typeof args[0]);
//   const html = stringToHTML(strings, ...args);
//   // console.log(html, 'html');

//   const $fragment = document.createElement('fragment');
//   $fragment.innerHTML = html;

//   const walker = document.createNodeIterator($fragment, NodeFilter.SHOW_ALL);

//   let node: Node | null | HTMLElement;
//   while ((node = walker.nextNode())) {
//     if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.includes(DIRTY_PREFIX)) {
//       handleTextNode(node);

//       continue;
//     }

//     if (node instanceof HTMLElement) {
//       const attributes = Array.from(node.attributes);

//       attributes.forEach((attribute) => {
//         const { name, value } = attribute;
//         const realValueIndex = value.split('=')[1];
//         const realValue = args[realValueIndex as unknown as number];
//         if (name.startsWith('on') && node instanceof HTMLElement) {
//           const eventName = name.slice(2).toLowerCase();
//           node.addEventListener(eventName, realValue as EventListener);
//           node.removeAttribute(name);
//         }
//       });
//     }
//   }

//   return $fragment.firstElementChild || $fragment;
// };

// export default jsx;

// const handleTextNode = (node: Node) => {
//   if (node.nodeType !== Node.TEXT_NODE) return;
//   if (!node.nodeValue?.includes(DIRTY_PREFIX)) return;

//   const text = node.textContent;
//   const texts = node.nodeValue.split(DIRTY_SEPERATOR_REGEX_G);
//   console.log(texts, 'texts');
//   // ontent = args[realValueIndex] as string;
//   // }
// };

const stringToHTML = (strings: TemplateStringsArray, ...args: unknown[]) => {
  return strings.reduce((acc, curr, index) => {
    acc += curr;

    if (typeof args[index] === 'undefined') {
      return acc;
    }

    if (typeof args[index] === 'string') {
      acc += args[index];
    } else {
      acc += `${ARG_FLAG}${index}:`;
    }

    return acc;
  }, '');
};

// const HTMLToDOM = (html: string) => {
//   const parser = new DOMParser();

//   const document = parser.parseFromString(html, 'text/html');
//   console.log(document);

//   return document.body.firstChild;
// };

// // const hello = "world";
// // const a = jsx`
// //   <img src="https://via.placeholder.com/150" alt="placeholder" />
// // `;

// // const a = jsx`
// //   <button onClick=${() => {
// //     console.log("hi");
// //   }}>${123}</button>
// // `;

// // document.body.appendChild(a);

// const $innerDOM = jsx`<div>inner</div>`;
// const $outerDOM = jsx`<div>outer ${$innerDOM}</div>`;

// console.log($outerDOM);
