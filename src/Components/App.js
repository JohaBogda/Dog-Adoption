import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
// import background from "./img/pawprints.jpeg"

// Sidebar: 
import { Switch, Route } from "react-router-dom"
import Home from "../SidebarComp/Home"
import Fees from "../SidebarComp/Fees"
import Dogs from "../SidebarComp/Dogs"
import Application from '../SidebarComp/Application';



function App() {
  
  return (
    <div className="App" style={{ 
       
    }}>
      <Sidebar />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
          
                <Route exact path="/dogs">
                    <Dogs />
                </Route>

                <Route exact path="/fees">
                    <Fees />
                </Route>

                <Route exact path="/application">
                    <Application />
                </Route>
            </Switch>

      <Header />
      <Footer />

        
    </div>
  );
}

export default App;
