import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor() {}

  isAppselected: Boolean = false;
}
