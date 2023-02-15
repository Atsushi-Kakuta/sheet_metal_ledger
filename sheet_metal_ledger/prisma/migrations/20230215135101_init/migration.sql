-- CreateTable
CREATE TABLE `CarInStock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entry_person` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NULL,
    `receipt_date` DATETIME(3) NULL,
    `delivery_date` DATETIME(3) NOT NULL,
    `car_model` VARCHAR(191) NULL,
    `plate_number` VARCHAR(191) NULL,
    `repair_point` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
