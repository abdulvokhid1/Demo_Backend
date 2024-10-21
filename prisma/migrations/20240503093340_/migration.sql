-- AlterTable
ALTER TABLE `product` MODIFY `isDeliveriable` BOOLEAN NULL DEFAULT false,
    MODIFY `is_description_img` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_guide_img` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_prod_info_img` BOOLEAN NOT NULL DEFAULT false;
