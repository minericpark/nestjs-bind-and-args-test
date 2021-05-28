import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test } from '../entities/test.entity';

@Injectable()
@Dependencies(getRepositoryToken(Test))
export class TestService {
  constructor(testRepository) {
    this.testRepository = testRepository;
  }

  getHello() {
    return 'Hello address';
  }

  async create(createTestInput) {
    try {
      const newTest = this.testRepository.create(createTestInput);
      return this.testRepository.save(newTest);
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    return this.testRepository.find();
  }

  async findOne(id) {
    return this.testRepository.findOne(id);
  }

  async remove(id) {
    try {
      await this.testRepository.delete(id);
    } catch (err) {
      throw err;
    }
  }
}
