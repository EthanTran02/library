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
    books.forEach(book => {

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
        

        info.appendChild(author)
        info.appendChild(pagesNumber)
        info.appendChild(readStatus)

        bookDiv.appendChild(title)
        bookDiv.appendChild(info)
        
        bookCards.appendChild(bookDiv)
    });
}

// click button to showing form
const button = document.querySelector('#add_button')
const form = document.querySelector('form')
button.addEventListener('click', () => {
        form.style.display = 'flex'
})

// click submit to add new book and showing it
const submit_button = document.getElementById('submit_button')
submit_button.addEventListener('click', (event)=> {
    event.preventDefault()
    
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const status = document.getElementById('status').value

    addBookToLibrary(title, author, pages, status)//add new book
    bookCards.innerHTML = '' //empty cards
    displayBook(myLibrary) //showing new book
    form.style.display = 'none'
})


