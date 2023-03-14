import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation, JoinTable } from 'typeorm';
import { Group } from './Group';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  artistId: string;

  @Column()
  name: string;

  @Column()
  birthYear: Date;

  @ManyToMany(() => Group, (group) => group.members, { cascade: ['insert', 'update'] })
  @JoinTable()
  groups: Relation<Group>[];
}