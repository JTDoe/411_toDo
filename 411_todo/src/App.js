import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: "",
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  handleChange = (event) => {
    this.setState({
      todos: [ ...this.state.todos, this.state.text],
      text: ''
    });
  };

  handleSubmit = () => {
    todos: [ ...this.state.todos, this.state.text],
    text: ''
    };
  };

  componentDidUpdate() {
    console.log(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        {
          this.state.todos.map((todo,index) => {
            return <li>{todo}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
