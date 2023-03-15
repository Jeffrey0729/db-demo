import { Request, Response } from 'express';
import {
  addBook,
  getBookById,
  getAllBooks,
} from '../models/BookModel';
import { addReview, getAllReviews } from '../models/ReviewModel';
import { parseDatabaseError } from '../utils/db-utils';

async function getAllBooks(req: Request, res: Response): Promise<void> {
  res.json(await allBookData());
}

type NewBookRequest = {
    title: string;
    yearOfPublication: number;
}

async function addNewBook(req: Request, res: Response): Promise<void> {
    if (!req.session.isLoggedIn) {
        res.sendStatus(401);
        return;
    }

    const { title, yearOfPublication } = req.body as NewBookRequest;

    try {
        const newBook = await addBook(title, yearOfPublication);
        console.log(newBook);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        const databaseErrorMessage = parseDatabaseError(err);
        res.status(500).json(databaseErrorMessage);
    }
}

export {
  addNewBook,
  getAllBooks,
};
