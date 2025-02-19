const myLibrary = [];

class Book {
  constructor(title, author, pages_number, read_status) {
    this.title = title;
    this.author = author;
    this.pages_number = pages_number;
    this.read_status = read_status;
  }
}

function addBookToLibrary(title, author, pages_number, read_status) {
  book = new Book(title, author, pages_number, read_status);
  myLibrary.push(book);
}

// creating book cards and showing cards function
const bookCards = document.querySelector("#book_cards");
function displayBook(books) {
  bookCards.innerHTML = ""; // emty cards

  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    const info = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `By ${book.author}`;

    const pagesNumber = document.createElement("p");
    pagesNumber.textContent = `${book.pages_number} pages`;

    const readStatus = document.createElement("p");
    readStatus.textContent = `Read Status: ${book.read_status}`;
    if (book.read_status == "readed") {
      // add color base on status
      readStatus.style.color = "green";
    } else {
      readStatus.style.color = "red";
    }

    const removeButton = document.createElement("div");
    removeButton.className = "remove_button";
    removeButton.textContent = "x";

    const changeStateButton = document.createElement("button");
    changeStateButton.className = "change_state";
    changeStateButton.textContent = "changes status";

    info.appendChild(author);
    info.appendChild(pagesNumber);
    info.appendChild(readStatus);

    bookDiv.appendChild(title);
    bookDiv.appendChild(info);
    bookDiv.appendChild(removeButton);
    bookDiv.appendChild(changeStateButton);

    bookCards.appendChild(bookDiv);

    // create event for remove button that remove book
    removeButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBook(myLibrary);
    });

    // create event for change state button that change book's status book
    changeStateButton.addEventListener("click", () => {
      if (book.read_status == "readed") {
        book.read_status = "non-readed";
        displayBook(myLibrary);
      } else {
        book.read_status = "readed";
        displayBook(myLibrary);
      }
    });
  });
}

// ACTION: create event for button to showing form
// and another button for close the form
const button = document.querySelector("#add_button");
const form = document.querySelector("form");
const closeButton = document.querySelector("form > p");

button.addEventListener("click", () => {
  form.style.display = "flex"; // displaying the form
});

closeButton.addEventListener("click", () => {
  form.style.display = "none"; // click x to close the form
});

// Form validation
const inputs = document.querySelectorAll("#title, #author, #pages");
const radioInputs = document.querySelectorAll('input[name="status"]');
const submit_button = document.getElementById("submit_button");

const validateForm = () => {
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.setCustomValidity("This is required!");
      input.reportValidity();
      isValid = false;
    } else {
      input.setCustomValidity("");
    }

    const radioSelected = Array.from(radioInputs).some(
      (radio) => radio.checked
    );
    if (!radioSelected) {
      radioInputs[0].setCustomValidity("Please select a read status!");
      radioInputs[0].reportValidity();
      isValid = false;
    } else {
      radioInputs[0].setCustomValidity("");
    }
  });
  return isValid;
};

// Validate radio buttons

// ACTION: click submit to add new book and display it
submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateForm()) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.querySelector('input[name="status"]:checked').value;

    addBookToLibrary(title, author, pages, status); // call add new book funciton
    displayBook(myLibrary); // call display books function

    document.querySelector("form").reset(); // reset input field

    form.style.display = "none"; // hide form
  }
});
