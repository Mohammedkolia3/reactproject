import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
<>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()}/>
<Alert alert={alert}/>
<Routes>
<Route path='/' element={<Textform/>} />
<Route path='/About' element={<About/>} />
</Routes>

</>
  );
}

export default App;
