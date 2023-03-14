import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, Relation,} from "typeorm"
import { Book } from "./Book";

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorID: string;

  @Column()
  authorName: string;

  @Column()
  countryOfOrgin: string;

  @OneToMany(() => Book, (book) => book.books)
  book: Relation<Book>;
}