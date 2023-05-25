import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminModuleService {
  public admin = true;
  public seller = true;
  constructor() { }
}
