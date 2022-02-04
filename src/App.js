import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Calc from './components/Calc';
//import Welcome from './Welcome';

import Message from './components/Message';
import First from './Assignment/First';
function App() {
  return (
    <div className="App">
      
        
        <Greet name ="tony" realname="robaert dr junior"><p>i am iron man</p></Greet>
        <Greet name="captain" realname ="chris"><button>action</button></Greet>
        <Greet name="thor" realname="hemisworth"></Greet>
        <Message></Message>
        <Calc></Calc>
        <First></First>
      
    </div>
  );
}

export default App;
