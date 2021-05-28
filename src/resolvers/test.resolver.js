import { Bind, Dependencies } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Test } from '../entities/test.entity';
import { TestService } from '../services/test.service';
import { CreateTestInput } from '../inputs/create-test.input';

@Resolver(of => Test)
@Dependencies(TestService)
export class TestResolver {
    constructor(testService){
        this.testService = testService;
    }

    @Query(returns => [Test])
    tests() {
        return this.testService.findAll();
    }

    @Query(returns => String)
    hello() {
        return this.testService.getHello();
    }

    @Mutation(returns => Test)
    @Bind(Args('createTestInput', { type: () => CreateTestInput }))
    createAddress(createTestInput) {
        return this.testService.create(createTestInput);
    }

}