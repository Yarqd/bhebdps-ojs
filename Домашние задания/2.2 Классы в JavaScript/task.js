class PrintEditionItem {
  #state = 100;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = Math.max(0, Math.min(100, value));
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) ?? null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);

    if (index === -1) {
      return null;
    }

    const [book] = this.books.splice(index, 1);
    return book;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = { __proto__: null };
  }

  addMark(mark, subject) {
    if (!Number.isFinite(mark) || mark < 2 || mark > 5) {
      return;
    }

    this.marks[subject] ??= [];
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const marks = this.marks[subject];

    if (!marks || marks.length === 0) {
      return 0;
    }

    const sum = marks.reduce((total, mark) => total + mark, 0);
    return sum / marks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0;
    }

    const sum = subjects.reduce((total, subject) => total + this.getAverageBySubject(subject), 0);
    return sum / subjects.length;
  }
}
