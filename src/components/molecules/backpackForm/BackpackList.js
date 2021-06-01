import React, { useState } from "react";
import { TiEdit, TiDelete } from "react-icons/ti";
import BackpackForm from "./BackpackForm";
import { Icons, Container } from "./styled";

function BackpackList({ items, storedInTheBackpack, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    quantity: "",
  });

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
      quantity: "",
    });
  };

  if (edit.id) {
    return <BackpackForm edit={edit} onSubmit={submitUpdate} />;
  }

  return items.map((item, index) => (
    <>
      <Container
        className={item.isStoredInTheBackpack ? "item-row stored" : "item-row"}
        key={index}
      >
        <div key={index} onClick={() => storedInTheBackpack(item.id)}>
          {item.quantity} {item.text}
        </div>

        <Icons className="icons">
          <TiEdit
            onClick={() =>
              setEdit({
                id: item.id,
                value: item.text,
                quantity: item.quantity,
              })
            }
            className="edit-icon"
          />
          <TiDelete
            onClick={() => removeItem(item.id)}
            className="delete-icon"
          />
        </Icons>
      </Container>
    </>
  ));
}

export default BackpackList;
