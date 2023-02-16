/*
  Warnings:

  - You are about to drop the `carinstock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `carinstock`;

-- CreateTable
CREATE TABLE `car_in_stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entry_person` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NULL,
    `receipt_date` DATETIME(3) NOT NULL,
    `delivery_date` DATETIME(3) NULL,
    `car_model` VARCHAR(191) NULL,
    `plate_number` VARCHAR(191) NULL,
    `repair_point` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
