/*
  Warnings:

  - You are about to alter the column `point` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `point` DECIMAL(3, 2) NOT NULL;
