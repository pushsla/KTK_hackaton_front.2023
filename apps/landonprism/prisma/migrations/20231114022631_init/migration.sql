/*
  Warnings:

  - Added the required column `hackatonOffers` to the `Cms_stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hackatonWinners` to the `Cms_stats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cms_stats` ADD COLUMN `hackatonOffers` INTEGER NOT NULL,
    ADD COLUMN `hackatonWinners` INTEGER NOT NULL;
