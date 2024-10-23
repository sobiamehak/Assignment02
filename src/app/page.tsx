import Link from "next/link";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";


export default function Main(){
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
<Hero />

</nav>
<Footer></Footer>

    </div>

  );
}