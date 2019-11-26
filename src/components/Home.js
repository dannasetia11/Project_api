import React from "react";
import axios from "axios";
import "./Home.css";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul className="all">
        {this.state.persons.map(person => (
          <li className="box">
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>
            <p>Website: {person.website}</p>
          </li>
        ))}
      </ul>
    );
  }
}
