import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: pink;
  height: 70vh;

  h2 {
    font-family: "Raleway", sans-serif;
  }

  input {
    height: 4vh;
    margin-top: 2vh;
  }

  div {
    width: 50vw;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  button {
    margin-top: 2vh;
  }
`;

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2
    });
  };

  multi = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 * n2
    });
  };

  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 - n2
    });
  };

  soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 + n2
    });
  };

  limpar = () => {
    const { n1, n2 } = this.state;
    this.setState({
      n1: " ",
      n2: " ",
      res: " "
    });
  };

  render() {
    return (
      <Container>
        <h1>Calc App</h1>
        <input value={this.state.n1} onChange={this.handleChange1} />
        <input value={this.state.n2} onChange={this.handleChange2} />
        <div>
          <button type="number" onClick={this.div}>
            /
          </button>
          <button type="number" onClick={this.multi}>
            *
          </button>
          <button type="number" onClick={this.sub}>
            -
          </button>
          <button type="number" onClick={this.soma}>
            +
          </button>
        </div>
        <p value={this.state.res}>Resultado: {this.state.res}</p>
        <button onClick={this.limpar}>Limpar</button>
      </Container>
    );
  }
}
