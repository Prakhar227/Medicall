import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ConditionCard = ({ title, conditions }) => {
  return (
    <Col>
      <Card style={{ width: '20rem', background: '#a3c6ff' }}>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>{title}</Card.Title>
          <hr></hr>
          <Card.Text>
            <ul>
              {conditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ConditionCard;