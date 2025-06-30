import { Component } from '@angular/core';
import { loadItems, selectAllItem } from '@datum/shared-state';
import { ItemDto } from '@datum/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-inventoryApp-entry',
  standalone: false,
  //template: ` Item: {{item$ | async}}`,
  templateUrl: './entry.html',
})
export class RemoteEntry {
    item$: Observable<ItemDto[]>;
    constructor(private store: Store) {
    this.item$ = this.store.select(selectAllItem);
    this.inc();
  }

  inc() {
   // this.store.dispatch(loadItems());
  }
}
