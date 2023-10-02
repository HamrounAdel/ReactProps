import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ imgg, NomJoeur,equipe, nationality, age, poste,numero }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgg} style={{height:'250px',width:'250px'}}/>
      <Card.Body>
        <Card.Title>{NomJoeur}</Card.Title>
        <Card.Text>
          Equipe: {equipe}
          <br />
          Nationality: {nationality}
          <br />
          Age: {age}
          <br/>
          Poste : {poste}
          <br />
          Numero: {numero}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;