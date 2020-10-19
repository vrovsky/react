import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  styles = {
    fontSize: 60, //10px
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <h1>Надо горцевать еще братан</h1>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Горцуем кукишы
        </button>
        {this.state.tags.length === 0 && ""}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
