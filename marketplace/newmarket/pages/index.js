
import { Navbar, Welcome,Services, Transactions } from "./../client/components/info";


export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    
  </div>  
    
  )
}