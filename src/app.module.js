import { Dependencies, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TestModule } from './modules/test.module';

@Dependencies(Connection)
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*test.graphql'],
      definition: {
        path: join(process.cwd(), 'src/graphql.js'),
        outputAs: 'class',
      }
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(connection) {
    this.connection = connection;
  }
}
