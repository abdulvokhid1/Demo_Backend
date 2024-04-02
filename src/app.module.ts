import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from './note/note.module';
import { CenterModule } from './center/center.module';
import { LevelModule } from './level/level.module';
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
    CenterModule,
    LevelModule,
  ],
  // controllers: [NoteController, LevelController],
  // providers: [NoteService],
})
export class AppModule {}
