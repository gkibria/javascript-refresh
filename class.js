// Book class
class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        const year = new Date().getFullYear() - this.year
        return `${this.title} is ${year} years old`
    }

    revise(newYear){
        this.year = newYear
        this.revised = true
    }

    // static function
    static description(){
        return 'A brief history of tomorrow'
    }
}

// instantiate
const book1 = new Book('Homo Deos', 'Yuval Harari', 2016)

console.log(book1)

book1.revise(2018)

console.log(book1)

console.log(Book.description())

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year, month)
        this.month = month
    }
}

// instantiate

const mag1 = new Magazine('The Nature', 'Science', 2019, 'January')

console.log(mag1)