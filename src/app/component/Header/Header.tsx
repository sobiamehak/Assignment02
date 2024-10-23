 import Link from "next/link"
 const Header = ()=>{
    return(
   
        <div className="main">
        <nav>
     <label className="logo">Tuition Free Program</label>
        <ul>
          
          <li><Link className="active" href="/">Home</Link></li>
          <li><Link href="/apply">Apply</Link></li>
           <li><Link href="/contact">Contact Us</Link></li>
           <li><Link href="/courses">Courses</Link></li>
           
          
        </ul>
  
  </nav>
      </div>
    )
} 
export default Header