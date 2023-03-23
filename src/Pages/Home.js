import React, { Component } from "react";
import Counter from "../Components/Counter";
import Title from "../Components/Title";


export class Home extends Component {
  constructor() {
    super();
    this.state = { title: "default title", description: "default desc" };
  }

  render() {
    return (
        <>
        <h1>This Home Page</h1>
      <div>
        <Title
          title1="Vishvas Panshiniya."
          title2="Computer Engineering."
          title3="Web Devloper."
          titlestate={this.state.title}
          descriptionstate={this.state.description}

        />
      </div>
      <Counter/>

      </>

    );
  }
}

export default Home