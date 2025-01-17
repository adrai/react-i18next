import { unescape } from './unescape';

let defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  // nsMode: 'fallback' // loop through all namespaces given to hook, HOC, render prop for key lookup
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  // hashTransKey: key => key // calculate a key for Trans component based on defaultValue
  useSuspense: true,
  unescape,
};

export function setDefaults(options = {}) {
  defaultOptions = { ...defaultOptions, ...options };
}

export function getDefaults() {
  return defaultOptions;
}
