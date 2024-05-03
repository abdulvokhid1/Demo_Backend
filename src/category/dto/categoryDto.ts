export class ParameterDto {
  depth?: number;
  parent?: number;
  asc?: boolean;
}

export class CategoryDto {
  id?: number;
  name?: string;
  order?: number;
  isActive?: boolean;
  imgId?: number;
  depth?: number;
  parentId?: number;
  subs?: CategoryDto[];
}

export class UploadDTO {
  image: any;
}
