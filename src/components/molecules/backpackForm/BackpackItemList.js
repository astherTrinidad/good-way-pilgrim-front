import React, { useState } from "react";
import BackpackForm from "./BackpackForm";
import BackpackList from "./BackpackList";
import { TitleList } from "./styled";
import url from "../../../config/url";

function BackpackItemList() {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newItems = [item, ...items];
    setItems(newItems);
    // const responseAddItem = apiAddItem(item);
    // console.log("response add item: " + responseAddItem);
  };

  const storedInTheBackpack = (id) => {
    let updateItems = items.map((item) => {
      if (item.id === id) {
        item.isStoredinBackpack = !item.isStoredinBackpack;
      }
      return item;
    });

    setItems(updateItems);
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  const removeItem = (id) => {
    const removeItemList = [...items].filter((item) => item.id !== id);
    setItems(removeItemList);
  };

  return (
    <>
      <TitleList>Lista de objetos</TitleList>
      <BackpackForm onSubmit={addItems} />
      <BackpackList
        items={items}
        storedInTheBackpack={storedInTheBackpack}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default BackpackItemList;

async function apiAddItem(itemInfo) {
  return fetch(`${url.base}${url.addItem}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(itemInfo),
  }).then((data) => data.json());
}
