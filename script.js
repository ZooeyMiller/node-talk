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

setState({});
