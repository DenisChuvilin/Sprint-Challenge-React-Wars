import React, { useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Container,
  Col,
  Row,
  CardDeck,
} from 'reactstrap';

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <CardDeck>
        <Card>
          {' '}
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
              Details
            </Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>Diameter: {props.diameter}</ListGroupItem>
                    <ListGroupItem>Climate: {props.climate}</ListGroupItem>
                    <ListGroupItem>Terrain: {props.terrain}</ListGroupItem>
                    <ListGroupItem>Gravity: {props.gravity}</ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Example;

{
  /* <h2>Name: {props.name}</h2>
        <h4>Diameter: {props.diameter}</h4>
        <h4>Climate: {props.climate}</h4>
        <h4>Terrain: {props.terrain}</h4>
        <h4>Gravity: {props.gravity}</h4> */
}
