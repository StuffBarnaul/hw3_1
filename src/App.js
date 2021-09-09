import './App.css';
import ClassComponent from "./video1/ClassComponent";
import FunctionComponent from "./video1/FunctionComponent";
import Video2 from "./video2/Video2";
import Video3 from "./video3/Video3";
import Video4 from "./video4/Video4";
import Video5 from "./video5/Video5";
import Video6 from "./video6/Video6";
import Video7 from "./video7/Video7";
import Video8 from "./video8/Video8";


function App() {
  return (
      <>
          <ClassComponent q2={12}/>
          <FunctionComponent q2={7}/>
          <Video2/>
          <Video3/>
          <Video4/>
          <Video5 defaultOpen={true}/>
          <Video6/>
          <Video7/>
          <Video8/>
      </>
  );
}

export default App;
