import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private readonly prismaService: PrismaService) {}


  async saveLocalFileData(fileData: LocalFileDto) {
    const newFile = await this.prismaService.localfiles.create({
      data: {
        filename: fileData.filename,
        path: fileData.path,
        mimetype: fileData.mimetype,
      },
    });
    return newFile;
  }

  async getFileById(fileId: number) {
    const file = await this.prismaService.localfiles.findUnique({
      where: {
        id: fileId,
      },
    });
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }
}
