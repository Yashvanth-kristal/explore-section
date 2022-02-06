import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pcard from './Pcard.jsx'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./App.css"
import search from "./Psearch"
import './pcard.css'
import Header from './Header.jsx';
function App() {
    return(<div>
   <Header/>
    <div className='searchbar'>
      <form className='form'>
          <input type="search" placeholder='What is Kristal |'/>
          <button type='search'>search</button>
      </form>
      <p className='content'>Your investing experience is elevated with a personalized and wide range of investment strategies suited to your investing style and profile. All made easily accessible, to enable you to achieve your financial goals along with an enhanced and secure portfolio.</p>
       <img  className='vector'src='' alt="vector"/>
    
       </div>  
        {/* <div className='cards'>
      
      
       <h6 className='font'>Private Markets</h6>
        <p  className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.</p>
        <a href='#' className='pm'>see all</a>    
        </div>   */}
    <div className='pcards'>
    <Pcard header='Private Markets' about='orem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.'/>
    
    <Pcard header='Fund Portfolio Baskets'about=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.'/>
    <Pcard header='Institutional Funds' about=' Optimised portfolio of funds allocated by our proprietary quantitative algorithm focused on long-term sustainable growth. These ave been selected meticulously using our algorithm in conjunction with Investment Committee views
     '/>
     <Pcard header='Mutual Funds' about=''/>
     <Pcard header='ELONs' about=''/>
     <Pcard header='Kristal Portfolios' about=''/>
     <Pcard header='Listed Assets' about=''/>
     <Pcard header='Thematic Kristals' about=''/> 
    </div>

    {/* <div>
     <h6 className='font-fp'>Fund Portfolio Baskets</h6>
     <p className='about-fp'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
     </p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    <div>
         <h6 className='font-if'>Institutional Funds</h6>
     <p className='about-if'>
     Optimised portfolio of funds allocated by our proprietary quantitative algorithm focused on long-term sustainable growth. These ave been selected meticulously using our algorithm in conjunction with Investment Committee views
     </p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    
    <div>
    <h6 className='font-mf'>Mutual Funds</h6>
     <p className='about-mf'>
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.</p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    <div>
    <h6 className='font-e'>ELONs</h6>
     <p className='about-e'>
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.</p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    <div>
    <h6 className='font-kp'>Kristal Portfolios</h6>
     <p className='about-kp'>
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
     </p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    <div>
    <h6 className='font-la'>Listed Assets</h6>
     <p className='about-la'>
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
       </p>
     <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
    <div>
    <h6 className='font-tm'>Thematic Kristals</h6>
     <p className='about-tm'>
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
     </p>
      <Card  className='pm_cards'title="Default size card" extra={<a href="#">More</a>} >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card> 
    </div>
     */}
    <div>
      <div className='advi'>
      <h5 className='ah' >Advisory Algo</h5>
      <p className='ap'>Imagine a friend who is available at your behest 24/7. A friend who can crunch billions of data points to create the best portfolio for you, and not get tired. A friend who listens to your feedback and can be with you wherever you go. A trusted friend who guards your portfolio in every market event. Befriend Kristal.AI's Algo. Unbiased. Relentless. Insightful. Personalized.</p>
     <img src="" alt="vector"/>
     
      </div>
      <div className='build'>
      <h5 className='ab'>Build your own Kristal</h5>
      <p className='bp'>Not every piece fits the puzzle. If you are looking for something beyond what’s available, get in touch with our advisors. Create your very own Kristal, tailored to your needs. Experience seamless and ultimate personalized investing.</p>
      <img src="" alt="vector"/>
      </div>
    
    </div>
    </div>
    
   );
}

export default App;
