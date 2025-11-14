import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center text-white p-2" style={{ background: "green" }}>
          User List
        </h2>

        {this.state.persons.map((p, index) => (
          <Card
            key={index}
            className="p-3 mb-3"
            style={{ backgroundColor: "#1fa1b1", color: "white" }}
          >
            <div className="d-flex">
              <img
                src={p.picture.large}
                alt=""
                className="rounded-circle"
                style={{ width: 120, height: 120, marginRight: 20 }}
              />

              <div>
                <h5>{p.name.title} {p.name.first} {p.name.last}</h5>
                <p><b>User Name:</b> {p.login.username}</p>
                <p><b>Gender:</b> {p.gender.toUpperCase()}</p>
                <p><b>Address:</b> {p.location.street.number} {p.location.street.name},
                  {p.location.city}, {p.location.state}, {p.location.country}</p>
                <p><b>Email:</b> {p.email}</p>
                <Button variant="primary">Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default PersonList;
