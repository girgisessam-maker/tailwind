import {Link} from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
export default function Header1() {
   let MenuStyle =
    "w-6 h-8   transition duration-[0.5s]  cursor-pointer hover:scale-125 hover:rotate-90 hover:text-fuchsia-900/40 block md:hidden animate__animated animate__fadeInDown";
  let linkStyle =
    "p-2 font-Girgis  transition duration-[0.5s] hover:bg-fuchsia-900/40 hover: rounded-2xl ";

    return (
         <header className="md:bg-gray-900/70 bg-amber-300  text-amber-50 w-full h-10 flex justify-center items-center gap-20 animate__animated animate__fadeInDown sticky top-0 z-50">
           <navbar calassName="flex ">
             <Link to="/" className={linkStyle}>
               home
             </Link>
             <Link to="/contact" className={linkStyle}>
               contact
             </Link>
             <Link to="/counter" className={linkStyle}>
               counter
             </Link>
             <Link to="/about" className={linkStyle}>
               about
             </Link>
              <Link to="/iphone" className={linkStyle}>
               iphone
             </Link>
             <Link to="/login" className={linkStyle}>
               login
             </Link>
           </navbar>
           <TiThMenu className={MenuStyle} />
         </header>
  )
}
