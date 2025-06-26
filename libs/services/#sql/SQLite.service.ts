
import { Injectable } from '@angular/core';
import initSqlJs from 'sql.js';

@Injectable({ providedIn: 'root' })
export class SQLiteService {
  private db: any;

  constructor() {
    initSqlJs().then(SQL => {
      this.db = new SQL.Database();
      this.db.run("CREATE TABLE test (col1, col2);");
    });
  }

  insertData() {
    this.db.run("INSERT INTO test VALUES (?, ?);", ['value1', 'value2']);
  }

  queryData(): string[] {
    const res = this.db.exec("SELECT * FROM test;");
    return res[0]?.values || [];
  }
}