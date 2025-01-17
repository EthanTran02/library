const myLibrary = [];

function Book(title, author,pages_number, read_status) {
    this.title = title
    this.author = author
    this.pages_number = pages_number
    this.read_status = read_status
}

function addBookToLibrary(title, author,pages_number, read_status) {
    book = new Book(title, author,pages_number, read_status)
    myLibrary.push(book)
}

// creating book cards and showing cards function
const bookCards = document.querySelector('#book_cards')
function displayBook(books) {
    bookCards.innerHTML = '' // emty cards
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div')
        const info = document.createElement('div')

        const title = document.createElement('h2')
        title.textContent = book.title

        const author = document.createElement('p')
        author.textContent = `By ${book.author}`

        const pagesNumber = document.createElement('p')
        pagesNumber.textContent = `${book.pages_number} pages`

        const readStatus = document.createElement('p')
        readStatus.textContent = `Read Status: ${book.read_status}`

        const removeButton = document.createElement('div')
        removeButton.className = 'remove_button'
        removeButton.textContent = 'x'

        info.appendChild(author)
        info.appendChild(pagesNumber)
        info.appendChild(readStatus)

        bookDiv.appendChild(title)
        bookDiv.appendChild(info)
        bookDiv.appendChild(removeButton)
        
        bookCards.appendChild(bookDiv)

        // create event for remove button that remove book 
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1)
            displayBook(myLibrary)
        })
    });
}

// remove book function
    

// ACTION: click button to showing form
const button = document.querySelector('#add_button')
const form = document.querySelector('form')
button.addEventListener('click', () => {
        form.style.display = 'flex'
})

// ACTION: click submit to add new book and display it
const submit_button = document.getElementById('submit_button')
submit_button.addEventListener('click', (event)=> {
    event.preventDefault()
    
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const status = document.getElementById('status').value

    addBookToLibrary(title, author, pages, status)// call add new book funciton
    displayBook(myLibrary) // call display books function

    form.style.display = 'none' // hide form
})


addBookToLibrary('title', 'author','123', 'yes')
displayBook(myLibrary)