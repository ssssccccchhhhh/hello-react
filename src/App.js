import { Component } from "react";
import ValidationSample from "./chapter05/ValidationSample";
import RefSample from "./chapter05/RefSample";
import ScrollBox from "./chapter05/ScrollBox";
import IterationSample from "./chapter06/IterationSample";

class App extends Component {
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
        <IterationSample />
      </>
    );
  }
}

export default App;
