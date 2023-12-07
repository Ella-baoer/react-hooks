import { Fragment } from "react";
import UseStateCom from "./components/useStateCom";
import UseEffectCom from "./components/useEffectCom";
import { Tabs, Tab } from "react-bootstrap";
import UseMemoCom from "./components/useMemo";

function App() {
  return (
    <Fragment>
      <Tabs
        defaultActiveKey="useMemo"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="useState" title="UseState">
          <UseStateCom />
        </Tab>
        <Tab eventKey="useEffect" title="UseEffect">
          <UseEffectCom />
        </Tab>
        <Tab eventKey="useMemo" title="UseMemo">
          <UseMemoCom />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default App;
