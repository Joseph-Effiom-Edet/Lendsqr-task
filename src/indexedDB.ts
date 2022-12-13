import Dexie, { Table } from 'dexie';

export interface Data {
  name: string;
  data: {};
}

export class LendSqrData extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  userData!: Table<Data>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      userData: 'name, data' // Primary key and indexed props
    });
  }
}

export const db = new LendSqrData();