import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { UploadDTO } from 'src/category/dto';
import LocalFilesInterceptor from 'src/common/localFiles.interceptor';
import { UploadService } from './upload.service';
import { existsSync, createReadStream } from 'fs';
import { join } from 'path';
import { TransformErrorFilter } from 'src/core/filters/transform-error.filter';
import { ResponseDto } from '../core/dto/response.dto';
import { MyJwtGuard } from '../auth/guard';

@Controller('upload')
export class UploadController {
  constructor(private service: UploadService) {}

  @UseGuards(MyJwtGuard)
  @Post('upload_category')
  @UseInterceptors(
    LocalFilesInterceptor({
      fieldName: 'image',
      path: '/category',
    }),
  )
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1000 * 1024 }), // 1MB
          new FileTypeValidator({
            fileType:
              /(jpg|jpeg|png|gif|pdf|msword|plain|doc|docx|vnd.openxmlformats-officedocument.wordprocessingml.document)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() data: UploadDTO,
  ) {
    const newFile = await this.service.saveLocalFileData({
      path: file.path || '',
      filename: file.originalname || '',
      mimetype: file.mimetype || 'image/png',
    });

    return newFile.id;
  }

  @UseGuards(MyJwtGuard)
  @Post('upload_product')
  @UseInterceptors(
    LocalFilesInterceptor({
      fieldName: 'image',
      path: '/product',
    }),
  )
  async uploadProductFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1000 * 10240 }), // 10MB
          new FileTypeValidator({
            fileType:
              /(jpg|jpeg|png|gif|pdf|msword|plain|doc|docx|vnd.openxmlformats-officedocument.wordprocessingml.document)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() data: UploadDTO,
  ) {
    const newFile = await this.service.saveLocalFileData({
      path: file.path || '',
      filename: file.originalname || '',
      mimetype: file.mimetype || 'image/png',
    });

    return newFile.id;
  }

  @Get('info/:id')
  @UseFilters(
    new TransformErrorFilter([
      {
        fromMessage: 'INVALID_FILE_ID',
        toMessage: 'INVALID_FILE_ID',
        statusCode: HttpStatus.BAD_REQUEST,
      },
    ]),
  )
  async getDatabaseFileInfoById(@Param('id') id: number): Promise<ResponseDto> {
    const file = await this.service.getFileById(id);

    return new ResponseDto().withData(file);
  }

  @Get(':id')
  @UseFilters(
    new TransformErrorFilter([
      {
        fromMessage: 'INVALID_FILE_ID',
        toMessage: 'INVALID_FILE_ID',
        statusCode: HttpStatus.BAD_REQUEST,
      },
    ]),
  )
  async getDatabaseFileById(
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    const file = await this.service.getFileById(id);
    if (existsSync(join(process.cwd(), file.path))) {
      const stream = createReadStream(join(process.cwd(), file.path));
      response.set({
        'Content-Disposition': `inline; filename="${file.filename}"`,
        'Content-Type': file.mimetype,
      });
      return new StreamableFile(stream);
    }
    return '';
  }
}
