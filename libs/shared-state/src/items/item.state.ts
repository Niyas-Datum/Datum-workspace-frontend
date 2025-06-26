import { ItemDto } from "../../../models/ItemDto";

export interface ItemState {
  items: ItemDto[];
}

export const initialItemState: ItemState = {
  items: []
};
