window.onload = function () {
  const head = document.getElementsByTagName('HEAD')[0];
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/index.css';
  head.appendChild(link);
  const body = document.getElementsByTagName('BODY')[0];
  const div = document.createElement('div');
  div.id = 'chat-widget';
  body.appendChild(div);
  const script = document.createElement('script');
  script.type = 'module';
  script.src = '/index.js';
  body.appendChild(script);
}