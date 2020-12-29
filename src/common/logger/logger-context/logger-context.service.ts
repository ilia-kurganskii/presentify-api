import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable({
  scope: Scope.REQUEST,
})
export class LoggerContextService {
  private readonly traceId = '';

  public constructor() {
    this.traceId = uuid();
  }

  public getTraceId(): string {
    return this.traceId;
  }
}
