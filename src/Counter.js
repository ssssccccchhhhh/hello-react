import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 10,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState({ number: number + 1 });
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // prevState => ({})와 같은 형태의 코드
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
