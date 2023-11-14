-- CreateTable
CREATE TABLE `Reg_approval` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trait` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trait` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_region` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loginHash` VARCHAR(191) NOT NULL,
    `secretHash` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_registration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `approvalId` INTEGER NOT NULL,
    `contactId` INTEGER NOT NULL,
    `regionId` INTEGER NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Reg_registration_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `captainId` INTEGER NOT NULL,

    UNIQUE INDEX `Reg_team_captainId_key`(`captainId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_teamstats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `casusName` VARCHAR(191) NOT NULL,
    `casusScore` INTEGER NOT NULL,
    `casusResult` VARCHAR(191) NULL,
    `teamId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cms_program` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cms_programentry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` DATETIME(3) NOT NULL,
    `preambule` VARCHAR(191) NULL,
    `ambule` VARCHAR(191) NOT NULL,
    `postambule` VARCHAR(191) NULL,
    `locale` VARCHAR(191) NOT NULL,
    `programId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cms_partners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icon` LONGBLOB NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cms_speakers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cms_stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `registrationOpen` BOOLEAN NOT NULL,
    `registerDeadline` DATETIME(3) NOT NULL,
    `hackatonFound` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reg_registration` ADD CONSTRAINT `Reg_registration_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Reg_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_registration` ADD CONSTRAINT `Reg_registration_approvalId_fkey` FOREIGN KEY (`approvalId`) REFERENCES `Reg_approval`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_registration` ADD CONSTRAINT `Reg_registration_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `Reg_contact`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_registration` ADD CONSTRAINT `Reg_registration_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Reg_region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_team` ADD CONSTRAINT `Reg_team_captainId_fkey` FOREIGN KEY (`captainId`) REFERENCES `Reg_registration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_teamstats` ADD CONSTRAINT `Reg_teamstats_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Reg_team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cms_programentry` ADD CONSTRAINT `Cms_programentry_programId_fkey` FOREIGN KEY (`programId`) REFERENCES `Cms_program`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
