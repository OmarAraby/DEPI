import React, { useMemo, useState } from "react";

const itemsList = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

export default function Filter() {
  const [items, setItems] = useState(itemsList);
  console.log(items);

  const [search, setSearch] = useState("");

  const filterItems = useMemo(() => {
    console.log("Filtering Item Memo");
    return items.filter((item) => {
      return item.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, items]); // Added items as a dependency to ensure updates are tracked

  console.log("Filtered Items:", filterItems);

  return (
    <div className="container">
      <h1>useMemo Hook</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search items..."
        className="form-control"
      />
      <ul className="list-group list-group-flush">
        {filterItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
