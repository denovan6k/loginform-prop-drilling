// import Tail from './Tail'

// import './App.css'
// import Form from './Form'


// function App() {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Form from './Form';
import Login from './Login';

// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;

const App = () => {
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: ""
  });
  const [loginData, setLoginData] = useState({
    email: "",
    username:"",
    password: "",
  });

  return (
    <Router>
      {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
         <Routes>
           <Route path="/" element={<Form formData={formData} setFormData={setFormData}/>} />
        <Route path="/Dashboard" element={<Dashboard loginData={loginData} setFormData={setFormData}/>} />
        <Route path="/Login" element={<Login formData={formData} setFormData={setFormData}/>} />
        {/* <Route path="/" element={<Form/>} /> */}
        {/* <Route path="/Form" element={<Form/>} */}
        </Routes>
        
      {/* </div> */}
    </Router>
  );
};

export default App