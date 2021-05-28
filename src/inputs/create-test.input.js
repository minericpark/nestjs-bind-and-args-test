import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  @Field(type => String)
  lastName;

  @Field(type => String)
  firstName;
}