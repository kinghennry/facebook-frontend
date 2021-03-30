import React from 'react'
import './App.css';
import Sidebar from "./components/Sidebar"
import Widgets from "./components/Widgets"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Header from './components/Header';
import {useStateValue} from "./StateProvider"

function App() {
 const [{user},dispatch]= useStateValue()
    return (
        <div className="app">
        {!user ? (
          <Login/>
        ) : (
            <>
              <Header/>
              <div className="app__body">
                <Sidebar/>
                <Feed/>
                <Widgets/>
              </div>
            </>
         )
         
        }
           
        </div>
    )
}

export default App
