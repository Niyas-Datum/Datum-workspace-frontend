import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { loadItems, addItem, selectAllItem, updateItem,deleteItem } from '@datum/shared-state';
import { Store } from '@ngrx/store';
import { ItemDto } from '@datum/models';


@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './Auth.html',
  styleUrl: './Auth.css',
})
export class AuthComponent {

    items$: Observable<ItemDto[]>;
  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItem);
  }

  onLoad() {
    this.store.dispatch(loadItems());
  }

  onUpdate(item: ItemDto) {
    const updated: ItemDto = {
      ...item,
      name: item.name + ' (updated)',
      price: item.price + 1
    };

    this.store.dispatch(updateItem({ item: updated }));
  }

  onDelete(id: number) {
    this.store.dispatch(deleteItem({ itemId: id }));
  }

  addNewItem(){
    const newItem: ItemDto = {
      id: Math.floor(Math.random() * 1000),
      name: 'New Item',
      price: Math.floor(Math.random() * 100),
      description: 'This is a new item',
      category: 'New Category',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.store.dispatch(addItem({ item: newItem }));
  }
}
