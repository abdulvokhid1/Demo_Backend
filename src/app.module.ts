import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { SaleslevelModule } from './saleslevel/Saleslevel.module';
import { CenterModule } from './center/center.module';
import { LevelModule } from './level/level.module';
import { CategoryModule } from './category/category.module';
import { DepositModule } from './deposit/deposit.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    CenterModule,
    LevelModule,
    SaleslevelModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NoteModule,
    PrismaModule,
    CategoryModule,
    DepositModule,
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}
