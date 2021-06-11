import React, { useState, useEffect, useRef } from "react";
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
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      quantity: quantity,
    });
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
              // ref={inputRef}
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
              // ref={inputRef}
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
              // ref={inputRef}
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
              // ref={inputRef}
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
