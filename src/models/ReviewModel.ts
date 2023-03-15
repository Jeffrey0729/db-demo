import { AppDataSource } from "../dataSource";
import { Book } from "../entities/Book";
import { User } from "../entities/User";
import { Review } from "../entities/Review";

const ReviewRepositor = AppDataSource.getRepository(Review);

async function addReview(
    rating: number, 
    reviewText: string,
    byUser: User,
    forBook: Book): Promise<Review> {


    let newReview = new Review();
    
    newReview.rating = rating;
    newReview.reviewText = reviewText;
    newReview.byUser = byUser;
    newReview.forBook = forBook;


    newReview = await ReviewRepositor.save(newReview);

    return newReview;
}

async function getReviewById( ReviewID: string): Promise<Review | null> {
    return await ReviewRepositor.findOne({ where: { ReviewID }});
}

async function getAllReviews( ReviewID: string): Promise<Review[]> {
    return await ReviewRepositor.find();
}

export  { addReview, getReviewById, getAllReviews, }