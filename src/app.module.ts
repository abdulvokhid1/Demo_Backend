import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { SaleslevelModule } from './saleslevel/Saleslevel.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SaleslevelModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NoteModule,
    PrismaModule,
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}
