export interface IDruginfo {
  month_dispensed: string;
  abstral: number;
  actiq: number;
  duragesic: number;
  fentanyl: number;
  fentanyl_citrate: number;
  fentora: number;
  lazanda: number;
  subsys: number;
  all_drug_total: number;
}

export class DrugInfo implements IDruginfo {
  constructor(
    public month_dispensed: string,
    public abstral: number,
    public actiq: number,
    public duragesic: number,
    public fentanyl: number,
    public fentanyl_citrate: number,
    public fentora: number,
    public lazanda: number,
    public subsys: number,
    public all_drug_total: number
  ) {}

  CalculateDoesCost(all_drug_total: number) {
    return this.all_drug_total;
  }
}
