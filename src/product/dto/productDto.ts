export class ParameterDto {
  id?: number;
  name?: string;
  code?: string;
  catId?: number;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

export class ProductDto {
  id?: number;
  name?: string;
  isActive?: boolean;
  sellType?: number;
  startSellDate?: Date;
  endSellDate?: Date;
  code?: string;
  customercode?: string;
  isDeliveriable?: boolean;
  price_origin?: number;
  price_sell?: number;
  price_provider?: number;
  cardFee?: number;
  vat?: number;
  amountPV?: number;
  pricePV?: number;
  isDuplicatable?: boolean;
  mileage?: number;
  quantity?: number;
  maxPerSell?: number;
  soldQuantity?: number;
  producer?: string;
  origin?: string;
  branch?: string;
  short_desc?: string;
  is_guide_img?: boolean;
  guide_img_id?: number;
  guide_info?: string;
  is_prod_info_img?: boolean;
  prod_img_id?: number;
  prod_info?: string;
  is_description_img?: boolean;
  description_img_id?: number;
  description?: string;
  description_m?: string;
  mainImg?: number;
  listImg?: number;
  thumbnailImg?: number;
  extraImg1?: number;
  extraImg2?: number;
  extraImg3?: number;
  extraImg4?: number;
  extraImg5?: number;
  catIds?: number[];
}

export class UploadDTO {
  image: any;
}
