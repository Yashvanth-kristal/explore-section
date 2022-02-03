import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./App.css"
function App() {
    return(<div>
   <header>
    <img className="logo"src="https://global-uploads.webflow.com/614a9edd8139f5d…839ce5fefe853138_Kristal%20Logotype%20Primary.svg"alt="logo"
   />
   <nav>
       <ul className="nav_links">
           <li><a href="#">Home</a></li>
           <li><a href="#">Explore</a></li>
           <li><a href="#">Reports</a></li>
           <li><a href="#">Bookmarks</a></li>

       </ul>
 
    

   </nav>
   
  
   
   
    <button><FontAwesomeIcon icon= "coffee"/></button>
    <button><FontAwesomeIcon icon= "chat"/></button>
    <button><FontAwesomeIcon icon= "logout"/></button>
    </header>
    <div className='searchbar'>
      <form className='form'>
          <input type="search" placeholder='What is Kristal |'/>
          <button type='search'>search</button>
      </form>
      <p className='content'>Your investing experience is elevated with a personalized and wide range of investment strategies suited to your investing style and profile. All made easily accessible, to enable you to achieve your financial goals along with an enhanced and secure portfolio.</p>

    </div>
    <div>
        <h6 className='font'>Private Markets</h6>
        <p  className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.</p>
    </div>
    </div>
   );
}

export default App
