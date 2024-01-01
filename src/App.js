import { Component } from "react";
import ValidationSample from "./chapter05/ValidationSample";
import RefSample from "./chapter05/RefSample";
import ScrollBox from "./chapter05/ScrollBox";
// import IterationSample from "./chapter06/IterationSample";
import LifeCycleSample from "./chapter07/LifeCycleSample";
import ErrorBoundary from "./chapter07/ErrorBoundary";

function getRandomColor() {
  // 16777215를 hex로 표현하면 ffffff
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        {/* <ValidationSample /> */}
        {/* <RefSample></RefSample> */}
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button
          onClick={() => {
            this.scrollBox.scrollToBottom();
          }}
        >
          맨 밑으로
        </button> */}
        {/* <IterationSample /> */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
