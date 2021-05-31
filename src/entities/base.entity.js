import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

export class Base {
  constructor() {
    if (this.constructor == Base)
      throw new Error("Abstract classes can't be instantiated");
  }

  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id;

  @CreateDateColumn({ type: 'datetime' })
  createdOn;

  @UpdateDateColumn({ type: 'datetime' })
  updatedOn;
}
