import React from 'react'
import Login from '../src/auth/login'
import Header from './layouts/Header'
import Sidebar from './layouts/sidebar'
import Feed from './layouts/feed'
import '../src/App.css'
import Widgets from '../src/widgets/widgets'
import { useStateValue } from './Stateprovider'


function App() {
   
   const[{user}, dispatch] = useStateValue();

 

    
        return(

            <div className="app">
            {!user?(<Login />):( <>
            <Header />

           <div className="app__buddy">
         <Sidebar />
  
        <Feed />
  
        <Widgets />
        </div>
                 </>)}
               
            </div>
        )
            
}

export default App