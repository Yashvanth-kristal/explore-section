import react from 'react';
import Pcard from './components/Pcard.jsx'
import "./App.css"
import advi from './images/Illustration.svg'
import  bu  from './images/algo.svg';
import btn from './images/Vector.svg'
import Header from './components/Header.jsx';
import dollar from './images/dollar planet 2.svg'
import magni from './images/magn glass2 1.svg'
import search from './images/search.svg'
import Frame1 from './images/Frame 2726.svg'
import Frame2 from './images/Frame 2727.svg'

import Frame3 from './images/Frame 2766.svg'

import { useState } from "react";
function App() {
  const [searchString, setSearchString] = useState();
    return(<div>
   <Header/>
    <div className='searchbar'>
    <form id="search" method="GET" action="/search" class="_13c93d41 relative flex bg-transparent ph3 ph2 pv2 ph0-ns pv0-ns bt b--black-10 bn-ns">
      <div class="e82b10fd relative dde91b96">
        <div class="_2f299eeb nowrap flex">
          <span class="_705cdf4f db fl pl3 pr1">
            <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g stroke="#777777" stroke-width="1.3">
                <g><path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z">
                  </path>
                  <path d="M11.4913,11.4913 L17.8683,17.8683"></path></g></g></g></svg>
                  </span>
                  <input type="search" name="q" hotkeys="[object Object]" placeholder="What is Kristal |" autocomplete="off" aria-label="Search packages" inputref="[object Object]" class="_390acbc5 f5 fw3 black relative" value={searchString}  onChange={(e) => setSearchString(e.target.value)} element="input"/>
                  </div>
                  </div>
                  <button type="submit" class="_0da775bb bn pv2 ph4 f6 white pointer" title="Submit">Search</button>
                  <input type="hidden" name="csrftoken" value="SslXpKxNvnwKSkK9ShAUEX9zNE5__OvatH8YYu6ZpPx"/>
                  </form>
    
         
      {/* <Psearch/> */}
      <p className='content'>Your investing experience is elevated with a personalized and wide range of investment strategies suited to your investing style and profile. All made easily accessible, to enable you to achieve your financial goals along with an enhanced and secure portfolio.</p>
      <img  className='vector-2'src={dollar} alt="vector"/>
        <img  className='vector-1'src={magni} alt="vector"/>
        <div  className='vector-3' ></div>
        <div className='vector-4'></div>
        <div  className='vector-5'></div>
       
    
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
     <Pcard header='Mutual Funds' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.'/>
     <Pcard header='ELONs' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.'/>
     <Pcard header='Kristal Portfolios' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
     '/>
     <Pcard header='Listed Assets' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
      '/>
     <Pcard header='Thematic Kristals' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo natoque consectetur ut duis nisi, pellentesque cras amet lorem. Sem auctor amet, duis cursus pulvinar.
     '/> 
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
    <div className='footer'>
     <div className='advi'>
     <div className='b-1'><h5 className='ah' >Advisory Algo</h5>
      <p className='ap'>Imagine a friend who is available at your behest 24/7. A friend who can crunch billions of data points to create the best portfolio for you, and not get tired. A friend who listens to your feedback and can be with you wherever you go. A trusted friend who guards your portfolio in every market event. Befriend Kristal.AI's Algo. Unbiased. Relentless. Insightful. Personalized.</p>
      </div>
     <div className='foot-2'>
      <img src={advi} alt="vector"/>
     <button className=''><img src={btn} alt='vector'/></button>
     </div>    
      </div>
      <div className='build'>
      <div className='b-1'><h5 className='ab'>Build your own Kristal</h5>
      <p className='bp'>Not every piece fits the puzzle. If you are looking for something beyond what’s available, get in touch with our advisors. Create your very own Kristal, tailored to your needs. Experience seamless and ultimate personalized investing.</p>
      </div>
     <div className=''> <img src={bu} alt="vector"/>
      <button className='foot-btn'><img src={btn} alt='vector'/></button>
      </div>
      </div>
    
    </div>
<footer>




</footer>



    </div>
    
   );
}

export default App;
