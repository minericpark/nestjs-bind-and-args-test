import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from '../services/test.service';
import { TestResolver } from '../resolvers/test.resolver';
import { Test } from '../entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestService, TestResolver],
})
export class TestModule {}
