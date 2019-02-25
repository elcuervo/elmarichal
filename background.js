window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    return { cancel: true, };
  },
  { urls: ['*://*.evolok.net/*'] },
  ['blocking' ]
);
