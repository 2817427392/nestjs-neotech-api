-- CreateTable
CREATE TABLE "Administrator" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "annualPrice" MONEY NOT NULL,
    "monthlyPrice" MONEY NOT NULL,
    "totalUsers" INTEGER NOT NULL,
    "hasPdfReports" BOOLEAN NOT NULL DEFAULT false,
    "hasExcelReports" BOOLEAN NOT NULL DEFAULT false,
    "hasCsvReports" BOOLEAN NOT NULL DEFAULT false,
    "hasStockRedirection" BOOLEAN NOT NULL DEFAULT false,
    "hasPrioritySuport" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signature" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "cnpj" CHAR(14) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unity" (
    "id" TEXT NOT NULL,
    "cnpj" CHAR(14) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "country" VARCHAR(256) NOT NULL,
    "state" VARCHAR(256) NOT NULL,
    "city" VARCHAR(256) NOT NULL,
    "neighbourhood" VARCHAR(256) NOT NULL,
    "subRegion" VARCHAR(256) NOT NULL,
    "street" VARCHAR(512) NOT NULL,
    "number" INTEGER NOT NULL,
    "businessId" TEXT NOT NULL,

    CONSTRAINT "Unity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sector" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "descricao" TEXT NOT NULL,
    "unityId" TEXT NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "position" INTEGER NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" TEXT NOT NULL,
    "sectorId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelephoneRelation" (
    "id" TEXT NOT NULL,
    "type" CHAR(1) NOT NULL,
    "telephoneId" TEXT NOT NULL,
    "administratorId" TEXT,
    "businessId" TEXT,
    "unityId" TEXT,
    "sectorId" TEXT,
    "employeeId" TEXT,

    CONSTRAINT "TelephoneRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unity" ADD CONSTRAINT "Unity_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_unityId_fkey" FOREIGN KEY ("unityId") REFERENCES "Unity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_telephoneId_fkey" FOREIGN KEY ("telephoneId") REFERENCES "Telephone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_administratorId_fkey" FOREIGN KEY ("administratorId") REFERENCES "Administrator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_unityId_fkey" FOREIGN KEY ("unityId") REFERENCES "Unity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelephoneRelation" ADD CONSTRAINT "TelephoneRelation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
