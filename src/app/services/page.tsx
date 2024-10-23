import Footer from "../component/Footer/Footer"
import Link from "next/link"
import Header from "../component/Header/Header"


function Courses(){
    return(
      <div> 
        <Header />
        <h1 className="service"><Link href='/services/about-course'>Nested page 1</Link></h1>
        <h1 className="service2"><Link href='/services/nested2'>Nested page 2</Link></h1>
 <Footer></Footer>
      
      </div>
    )
    
  }
  export default Courses
 