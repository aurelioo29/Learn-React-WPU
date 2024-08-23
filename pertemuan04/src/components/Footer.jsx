import Item from "./Item";

export default function Footer({ items }) {
  const totalItems = items.length;
  const purchasedItems = items.filter((item) => item.checked).length;
  const percentage = totalItems
    ? Math.round((purchasedItems / totalItems) * 100)
    : 0;

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {purchasedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
