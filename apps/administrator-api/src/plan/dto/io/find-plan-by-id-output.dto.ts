export type FindPlanByIdOutputDTO = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  totalUsers: number;
  hasStockRedirection: boolean;
  hasPdfReports: boolean;
  hasExcelReports: boolean;
  hasCsvReports: boolean;
  hasPrioritySuport: boolean;
}
