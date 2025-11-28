/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Administrator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Telephone` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `Unity` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Administrator" ADD COLUMN     "cpf" VARCHAR(11);

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "cpf" VARCHAR(11);

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_cpf_key" ON "Administrator"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Business_cnpj_key" ON "Business"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_cpf_key" ON "Employee"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Telephone_number_key" ON "Telephone"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_cnpj_key" ON "Unity"("cnpj");
