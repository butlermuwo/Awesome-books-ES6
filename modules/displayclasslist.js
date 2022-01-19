import CreateBookElements from './createbookelements.js';
import LocalStorageClass from './displaybooks.js';

export default class DisplayBookList {
  static displayBooks() {
    const books = LocalStorageClass.getbooksFromStore();
    books.forEach((book) => CreateBookElements.createBookElement(book));
  }

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
    }
  }
}
