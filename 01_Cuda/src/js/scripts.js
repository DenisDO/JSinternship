function createWindow() {
  let body = document.querySelector('body');
  
  let fragment = document.createDocumentFragment();
  let windowContainer = document.createElement('div');
  let windowContainerHeader = document.createElement('div');
  let windowTitle = document.createElement('h2');
  let windowCloseButton = document.createElement('span');
  let form = document.createElement('form');
  let input = document.createElement('input');
  let searchButton = document.createElement('button');
  let prevButton = document.createElement('button');
  let nextButton = document.createElement('button');
  let parentButton = document.createElement('button');
  let childrenButton = document.createElement('button');

  windowTitle.innerHTML = 'Search node element'
  searchButton.innerHTML = 'Search';
  prevButton.innerHTML = 'prev';
  nextButton.innerHTML = 'next';
  parentButton.innerHTML = 'parent';
  childrenButton.innerHTML = 'children';
  windowCloseButton.innerHTML = '<i class="fas fa-times"></i>';

  windowContainer.className = 'window__container';
  windowContainerHeader.className = 'window__container__header';
  windowTitle.className = 'window__title';
  windowCloseButton.className = 'window__close__button';
  form.className = 'form';
  input.className = 'input';
  searchButton.className = 'button';
  prevButton.className = 'button button--disable';
  nextButton.className = 'button button--disable';
  parentButton.className = 'button button--disable';
  childrenButton.className = 'button button--disable';

  prevButton.disabled = true;
  nextButton.disabled = true;
  parentButton.disabled = true;
  childrenButton.disabled = true;

  windowContainerHeader.appendChild(windowTitle);
  windowContainerHeader.appendChild(windowCloseButton);

  form.appendChild(input);
  form.appendChild(searchButton);
  form.appendChild(prevButton);
  form.appendChild(nextButton);
  form.appendChild(parentButton);
  form.appendChild(childrenButton);

  windowContainer.appendChild(windowContainerHeader);
  windowContainer.appendChild(form);
  fragment.appendChild(windowContainer);
  body.appendChild(fragment);
  console.log('lol');
}

window.addEventListener('load', createWindow);