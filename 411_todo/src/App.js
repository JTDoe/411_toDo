import React from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [
        { id: "1", todo: "Feed fish" },
        { id: "2", todo: "Go to place" },
        { id: "3", todo: "Soemthing else" },
      ],
      text: " ",
    };
  }

  handleClick = (e, id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: filteredTodos,
  })
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, { id: nanoid(), todo: this.state.text }],
      text: " ",
    });
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        ></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.todos.map(({ todo, id }) => {
            return (
              <li key={id} onClick={(e) => this.handleClick(e, id)}>
                {todo}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
