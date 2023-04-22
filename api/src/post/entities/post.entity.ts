import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Category } from '../../category/entities/category.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdOn: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modifiedOn: Date;
  @Column()
  imageUrl: string;
  @Column()
  slug: string;

  @ManyToOne(() => Users, (user) => user.post, { eager: true })
  user: Users;

  @ManyToOne(() => Category, (category) => category.post, { eager: true })
  category: Category;
}
