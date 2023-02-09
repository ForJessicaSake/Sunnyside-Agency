import {navigation} from "../atoms/Atom";
import {useAtom} from "jotai";
import menu from "../assets/desktop/icon-hamburger.svg"
const Navbar = () => {
  const [state, setState] = useAtom(navigation)

  const handleClose =()=>{
    setState(!state)
  }

  return (
    <nav className="font-textFont bg-Blue cursor-pointer flex justify-between lg:px-6 py-6 items-center">
      <h2 className="text-4xl ml-4 font-extrabold text-White">Sunnyside</h2>
      <img src ={menu} alt ="menu" className=" mr-4 w-8 h-6 lg:hidden" onClick={handleClose}/>
      <ul className={`${state ? 'block': 'hidden'} lg:static absolute lg:top-0 top-24 lg:h-0 h-96 pb-10 lg:pb-0 flex lg:flex-row flex-col bg-Blue z-50 lg:text-sm text-base lg:flex items-center justify-between lg:w-96 w-full text-White`}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <button className="w-28 h-11 font-extrabold bg-White text-Heading text-xs border-White border-2 rounded-full font-Headingfront">CONTACT</button>
      </ul>
    </nav>
  );
};

export default Navbar;
