import CreateBook from './modules/creatbook.js';
import DisplaySection from './modules/displaysection.js';
import CreateBookElements from './modules/createbookelements.js';
import LocalStorageClass from './modules/displaybooks.js';
import DisplayBookList from './modules/displayclasslist.js';

// class to make the web app an SPA

document.addEventListener('DOMContentLoaded', DisplayBookList.displayBooks);
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title');
  const author = document.getElementById('author');

  //   create book
  const book = new CreateBook(title, author);

  LocalStorageClass.addbookToStore(book);
  CreateBookElements.createBookElement(book);
  const form = document.querySelector('#form');
  form.reset();
});

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
  DisplayBookList.removeBook(e.target);
  const child = e.target.parentElement.children[0].firstElementChild.innerHTML;
  LocalStorageClass.removeFromTheStore(child);
});

// displaying one section

document.addEventListener('DOMContentLoaded', DisplaySection.DisplayOnly);

document.getElementById('date').innerHTML = Date();
