import { AppDataSource } from "../dataSource";
import { Book } from "../entities/Book";

const bookRepositor = AppDataSource.getRepository(Book);

async function addBook(
    title: string, 
    yearOfPublication: number | undefined): Promise<Book> {


    let newBook = new Book();
    newBook.bookTitle = title;
    newBook.yearOfPublication = yearOfPublication;

    newBook = await bookRepositor.save(newBook);

    return newBook;
}

async function getBookById( bookID: string): Promise<Book | null> {
    return await bookRepositor.findOne({ where: { bookID }});
}

async function getAllBooks( bookID: string): Promise<Book[]> {
    return await bookRepositor.find();
}

export  { addBook, getBookById, getAllBooks, }