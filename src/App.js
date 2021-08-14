import './App.css';
import Header from "./components/Header";
import Graph from "./components/Graph";
import TextContainer from "./components/TextContainer";
import {Summary} from "./components/Summary";
import {useGenerateBacon} from "./hooks/useGenerateBacon";
import {Container} from "reactstrap";

const App = () => {
  const [baconData, generateBacon] = useGenerateBacon();

  return (
    <Container>
      <Header/>
      <Summary words={baconData.data.words} chars={baconData.data.chars}/>
      <Graph top3={baconData.data.top3}/>
      <TextContainer baconData={baconData.data} generateBacon={generateBacon}/>
    </Container>
  );
}

export default App;
