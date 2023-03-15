import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, Relation,} from "typeorm"
import { Review } from "./Review";
import { Author } from "./Author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookID: string;

  @Column()
  bookTitle: string;

  @Column({nullable: false})
  inPublicDomain: boolean;

  @Column({ nullable: true })
  yearOfPublication: number;

  @OneToMany(() => Review, (reviews) => reviews.book, {cascade: ['insert', 'udpate']})
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (authors) => authors.books)
  authors: Relation<Book>;
}