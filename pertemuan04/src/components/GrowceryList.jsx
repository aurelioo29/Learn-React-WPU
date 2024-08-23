import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem, handleClearItems }) {
  const [sort, setSort] = useState("input");

  let sortItems;

  switch (sort) {
    case "name":
      sortItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortItems = items.slice().sort((a, b) => b.checked - a.checked);
      break;
    default:
      sortItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={handleClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
