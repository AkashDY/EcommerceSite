import React, { Fragment } from "react";
import Header from "../UI/Header";
import { Card, Table, Button } from "react-bootstrap";
import MainCard from "../UI/MainCard";

const Home = () => {
  return (
    <Fragment>
      <Header showCartButton={false} />
      <MainCard/>
      <Card style={{ width: "50rem" }} className="shadow-lg mx-auto mt-3">
        <Card.Title className=" text-center">TOURS</Card.Title>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Date</th>
              <th>City</th>
              <th>Buy Tickets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JUL 16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>JUL 19</td>
              <td>TORONTO, ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>JUL 29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>AUG 7</td>
              <td>CONCORD, CA</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <Button variant="info">BUY TICKETS</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Fragment>
  );
};

export default Home;
