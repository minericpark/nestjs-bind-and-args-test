import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from './base.entity';

@Entity()
export class Test extends Base {
    @Column({ type: 'text' })
    lastName;

    @Column({ type: 'text' })
    firstName;
}