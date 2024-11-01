export class LowStockWarningEvent {
  constructor(public machineId: any) {}
}

export class StockLevelOkEvent {
  constructor(public machineId: any) {}
}
