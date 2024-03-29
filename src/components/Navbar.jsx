// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: 'INICIO', link: '#home'},
    {name: 'SOBRE MIM', link: '#about'},
    {name: 'HABILIDADES', link: '#skills'},
    {name: 'PROJETOS', link: '#projects'},
    {name: 'CONTATOS', link: '#contact'},

];
useEffect(() =>{
  window.addEventListener("scroll", ()=>{
    const nav = document.querySelector('nav');
    window.scrollY > 0 ? setSticky(true) : setSticky(false);
  })
}, [])

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'md:bg-white/40 text-black' : 'text-white' }`}>
      <div className='flex items-center justify-between '>
        <div className='mx-7'>
          <h4 className='text-4xl uppercase font-bold'>
            Paulo <span className='text-blue-800  fixed'>.DEV</span>
          </h4>
        </div>
        <div className={`${
          sticky ? 'md:bg-white/0 bg-white' : 'bg-white'
        } text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {
              menuLinks?.map((menu, i) => (
                <li  key={i} className='px-6 hover:text-blue-800' >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
          
        </div>
        <div 
        onClick={()=> setOpen(!open)}
        className={`z-[999] ${open ? 'text-blue-800' : 'text-white'} text-3xl md:hidden m-5`}>
            <ion-icon name='menu'></ion-icon>
          </div>
          <div className={`md:hidden text-black absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-400 ${open ? 'right-0' : 'right-[-100%]'}`}>
            <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
              {
                menuLinks?.map((menu, i)=> (
                  <li key={i} className='px-6 hover:text-blue-800'>
                    <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;