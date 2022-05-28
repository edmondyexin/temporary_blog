import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import  {Route,Routes} from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Archive from './page/Archieve/Archieve';
import Log from './page/Log';
import Setting from './page/Setting';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="about" element={<About/>}/>
              <Route path="archive" element={<Archive/>}/>
              <Route path="log" element={<Log/>}/>
              <Route path="setting" element={<Setting/>}/>
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
