import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Saleslevel } from '@prisma/client';
import { saleslevelDto } from './dto/saleslevel.dto';

@Injectable()
export class SaleslevelService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const saleslevel = await this.prismaService.saleslevel.findMany();
    return saleslevel;
  }

  async update() {}
}
