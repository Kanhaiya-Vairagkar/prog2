import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  info1: string[] = ["Kanhaiya", 's1', 'Grand1']
  info2: string[] = ["Ramesh", 's2', 'Grand2']
  info3: string[] = ["Harsh", 's3', 'Grand3']

  getInfor1(): string[] {
    return this.info1;
  }

  getInfor2(): string[] {
    return this.info2;
  }
  getInfor3(): string[] {
    return this.info3;
  }

  constructor() { }
}
