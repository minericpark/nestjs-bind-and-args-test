import { Bind, Dependencies } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Test } from '../entities/test.entity';
import { TestService } from '../services/test.service';
import { CreateTestInput } from '../inputs/create-test.input';

@Resolver('Test')
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

    @Query(returns => Test)
    @Bind(Args('id', { type: () => Number }))
    test(id) {
        return this.testService.findOne(id);
    }

    @Mutation(returns => [Test])
    @Bind(Args('createTestInput', { type: () => CreateTestInput }))
    createTest(createTestInput) {
        return this.testService.create(createTestInput);
    }


}