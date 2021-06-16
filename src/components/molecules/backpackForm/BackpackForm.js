import React, { useState, useEffect, useRef } from "react";
import url from "../../../config/url";
import {
  Input,
  InputUpdate,
  InputQuantity,
  ButtonList,
  ButtonListUpdate,
  Form,
} from "./styled";

function BackpackForm(props) {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(Number);
  const [addInUserBackpack, setAddInUserBackpack] = useState({
    camino: Number,
    object: "",
    quantity: "",
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.onSubmit({
      camino: 0 /*id: Math.floor(Math.random() * 1000)*/,
      object: input,
      quantity: quantity,
    });
    addInUserBackpack.camino = 1;
    addInUserBackpack.object = input;
    addInUserBackpack.quantity = quantity;

    const responseAddItem = await apiAddItem(addInUserBackpack);

    setInput("");
    setQuantity(1);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <InputQuantity
              placeholder="Cantidad"
              value={quantity}
              onChange={handleChangeQuantity}
              name="quantity"
              className="edit"
              contenteditable="true"
              aria-placeholder="Cantidad"
              aria-labelledby="cantidadObjeto"
            />
            <InputUpdate
              placeholder="Escribe un nuevo nombre"
              value={input}
              onChange={handleChange}
              name="text"
              className="edit"
              contenteditable="true"
              aria-placeholder="Escribe un nuevo nombre"
              aria-labelledby="actualizarObjeto"
            />
            <ButtonListUpdate
              onClick={handleSubmit}
              className="edit"
              aria-label="Actualizar"
            >
              Actualizar
            </ButtonListUpdate>
          </>
        ) : (
          <>
            <InputQuantity
              placeholder="Cantidad"
              value={quantity}
              onChange={handleChangeQuantity}
              name="quantity"
              className="edit"
              contenteditable="true"
              aria-placeholder="Cantidad"
              aria-labelledby="cantidadObjeto"
            />
            <Input
              placeholder="Añade un objeto"
              value={input}
              onChange={handleChange}
              name="text"
              contenteditable="true"
              aria-placeholder="Añade un objeto"
              aria-labelledby="añadirObjeto"
            />
            <ButtonList onClick={handleSubmit} aria-label="Añadir">
              Añadir
            </ButtonList>
          </>
        )}
      </Form>
    </>
  );
}

export default BackpackForm;

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
