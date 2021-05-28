import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class Base {
  constructor() {
    if (this.constructor == Base)
      throw new Error("Abstract classes can't be instantiated");
  }

  @Field(type => Number)
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id;

  @Field(type => Date)
  @CreateDateColumn({ type: 'datetime' })
  createdOn;

  @Field(type => Date)
  @UpdateDateColumn({ type: 'datetime' })
  updatedOn;
}
