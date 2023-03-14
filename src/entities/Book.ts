import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, Relation,} from "typeorm"
import { Review } from "./Review";
import { Author } from "./Author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookID: string;

  @Column()
  bookTitle: string;

  @Column()
  yearOfPublication: number;

  @OneToMany(() => Review, (reviews) => reviews.book)
  reviews: Relation<Review>;

  @ManyToMany(() => Author, (authors) => authors.books)
  authors: Relation<Book>;
}