const textContainer = document.querySelector('.container');

let state = {
  slide: 0,
  arrayOfText: [],
};

const updateState = (newPropsObject, oldState) => {
  console.log(Object.assign(oldState, newPropsObject));
  return Object.assign(oldState, newPropsObject);
};

const setState = newProps => {
  state = updateState(newProps, state);
  const node = createElement('h1', 'title', state.arrayOfText[state.slide]);
  updateView(node, textContainer);
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.classList = className ? className : '';
  element.textContent = text ? text : '';
  return element;
};

function clearContainer(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

const updateView = (node, container) => {
  clearContainer(container);
  toggleBgColor(container);
  container.appendChild(node);
};

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 39:
      setState({ slide: state.slide + 1 });
      break;
    case 37:
      setState({ slide: state.slide - 1 });
      break;
    default:
      setState({});
  }
});

const toggleBgColor = element => {
  element.className = state.slide % 2 === 0
    ? 'container pale-violet-red'
    : 'container teal';
};

setState({
  arrayOfText: [
    'wtf is node?',
    'wtf is javascript?',
    'netscape vs. microsoft',
    "'fuck u microsoft'",
    '10 days!',
    'wow',
    "'let's call it livescript!'",
    'no',
    "'hmm, java's pretty hot right now'",
    'Javascript',
    'cool',
    "'fuck you netscape'",
    'jscript',
    'kinda mean right',
    "'we need to standardise javascript'",
    "'fuck off' - w3c",
    'so they went to ECMA',
    "'lets standardise javascript, u can't call it javascript tho'",
    '...ECMAscript then?',
    '12 years later',
    '~google~',
    'loads of stuff',
    'so many things',
    '~chrome~',
    'V8',
    'lets use JS outside the browser',
    'node is born',
    'npm is cool',
    'core packages are cool too',
    '~file system stuff~',
    "let's read a thing now",
  ],
});
