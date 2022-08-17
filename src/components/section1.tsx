import React, { Component } from "react";

interface IState {
  name?: string;
}

export default class Section1 extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "NAME",
    };
  }

  emit(e: any) {
    this.setState({ name: "kjkj" });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.props.handleClick(100)}
          placeholder={this.state.name}
        />
      </div>
    );
  }
}
