// https://www.npmjs.com/package/marked
// https://www.npmjs.com/package/dompurify
// https://www.npmjs.com/package/html-react-parser

import { Marked } from 'marked';
import * as DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const marked = new Marked({
  async: false,
  pedantic: false, // If true, conform to the original markdown.pl as much as possible.
  gfm: true, // If true, use approved GitHub Flavored Markdown (GFM) specification.*/
  silent: false,
  breaks: true,
});

const purifySettings = {
  USE_PROFILES: { html: true }, // allow all safe HTML elements but neither SVG nor MathML
  FORBID_TAGS: ['style', 'script'],
  FORBID_ATTR: ['style'],
  ALLOWED_TAGS: ['br'],
  ALLOW_ARIA_ATTR: false,
  ALLOW_DATA_ATTR: false,
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: null, // no custom elements are allowed
    attributeNameCheck: null, // default / standard attribute allow-list is used
    allowCustomizedBuiltInElements: false, // no customized built-ins allowed
  },
  ALLOW_UNKNOWN_PROTOCOLS: false,
};

export const converMdToHTML = (data: string, isAnnotation: boolean) => {
  let cleanData;
  let finishData;
  let preparedMD;

  preparedMD = marked.parse(data);
  if (typeof preparedMD === 'string') {
    // h1-h(n) -> p
    preparedMD = isAnnotation
      ? preparedMD.replace(/h[0-9]{0,2}/, 'p')
      : preparedMD;
    cleanData = DOMPurify.sanitize(preparedMD, purifySettings);
    finishData = parse(cleanData);
    return finishData;
  }
  return null;
};
