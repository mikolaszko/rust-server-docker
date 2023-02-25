function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function pickBook() {
    const rndInt = randomIntFromInterval(0, books.length - 1);
    let book = books[rndInt];
    document.querySelector('#theBook').innerHTML = book;
  }
  
  let books = [
    'The house on the Mango Street',
    'These Ghosts Are Family',
    'Strange Bedfellows',
    'Aristotle 1',
    'The Mind of a Murderer',
    'Czula przewodniczka',
    'Whats mine and yours',
    'The House in the Cerulean Sea',
    'Before the Coffee Gets Cold',
    'The Housekeeper and the Professor',
    'Piranesi',
    'Upstream: Selected Essays',
    'Harry Potter and the Sorcerers Stone',
    'Heaven',
    'A Little Life',
    'One of Us Is Lying',
    'The Unhoneymooners',
    'Marriage for One',
  ];
  
  let listOfBooks = document.querySelector('.list-of-books');
  
  function populateListOfBooks() {
    books.forEach((element) => {
      listOfBooks.innerHTML += `<li>${element}</li>`;
    });
  }
  
  populateListOfBooks();