// make a database for testing!
// Everytime we run tests, clean up data
// We must call request like we do with Postman/Jet
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
/**
How to open prisma studio on "TEST" database
  npx dotenv -e .env.test -- prisma studio
How to open prisma studio on "DEV" database
npx dotenv -e .env -- prisma studio
 */
const PORT = 3002;
const BASE_URL = 'http://localhost';
describe('App EndToEnd tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await app.listen(PORT);
    prismaService = app.get(PrismaService);
    await prismaService.cleanDatabase();
    pactum.request.setBaseUrl(`${BASE_URL}:${PORT}`);
  });
  describe('Test Authentication', () => {
    describe('Register', () => {
      it('should show error with empty email', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: '',
            password: 'a123456',
          })
          .expectStatus(400)
          .inspect();
      });
      it('should show error with invalid email format', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: 'testemail01@gmail',
            password: 'a123456',
          })
          .expectStatus(400)
          .inspect();
      });
      it('should show error with empty password', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: 'testemail01@gmail.com',
            password: '',
          })
          .expectStatus(400)
          .inspect();
      });
      it('Register OK', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({
            email: 'testemail01@gmail.com',
            password: 'a123456',
          })
          .expectStatus(201)
          .inspect();
      });
    });
    describe('Login', () => {
      it('Login OK', () => {
        return (
          pactum
            .spec()
            .post('/auth/login')
            .withBody({
              email: 'testemail01@gmail.com',
              password: 'a123456',
            })
            .expectStatus(201)
            // .inspect();
            .stores('accessToken', 'accessToken')
        );
      });
    });
  });
  describe('User', () => {
    describe('Get Detail User', () => {
      it('Get Detail User OK', () => {
        return pactum
          .spec()
          .post('/user/me')
          .withHeaders({
            Authorization: 'Bearer $S{accessToken}',
          })
          .expectStatus(200);
      });
    });
  });
  // describe('Note' () => {
  //   describe('Insert Note' () => {
  //
  //   });
  //   describe('Get all Notes', () => {
  //
  //   });
  // });
  afterAll(async () => {
    await app.close();
  });
});
