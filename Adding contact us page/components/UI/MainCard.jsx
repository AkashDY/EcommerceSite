import React from "react";
import { Card } from "react-bootstrap";

const MainCard = () => {
    return (
        <Card className="mb-5">
        <Card.Body style={{ background: "grey", height: "7rem" }}>
          <Card.Text style={{ textAlign: "center", fontSize: "3rem" }}>
            GENRES
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default MainCard;