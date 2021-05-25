import { Component, Name, Status, Key, Value, Row } from './styled';
const PathsData = ({ id, name, status, start_date, finish_date, etapas }) => {
  return (
    <Component id={id}>
      <Name>
        {name}
        <Status> {status}</Status>
      </Name>

      <Row>
        <Key>
          Fecha de inicio:
          <Value> {start_date}</Value>
        </Key>
        <Key>
          Fecha de fin:
          <Value> {finish_date}</Value>
        </Key>
        <Key>
          Etapas realizadas:
          <Value> {etapas}</Value>
        </Key>
      </Row>
    </Component>
  );
};

export default PathsData;
