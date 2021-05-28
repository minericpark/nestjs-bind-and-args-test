import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from './base.entity';

@ObjectType()
@Entity()
export class Test extends Base {
    @Field(type => String)
    @Column({ type: 'text' })
    lastName;

    @Field(type => String)
    @Column({ type: 'text' })
    firstName;
}