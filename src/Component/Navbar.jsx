import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {TbMenu2,TbX} from 'react-icons/tb'
class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render(){
        return (
        <div className='flex justify-between py-[55px] items-center max-sm:py-[27px]'>
            <div className='flex items-center justify-between'>
                <h1 className='font-extrabold text-2xl max-sm:ml-8'>The Void</h1>
                <button className="sm:hidden absolute right-10" onClick={this.handleClick}>
                    {this.state.isToggleOn ? <TbMenu2 size={20}/> : <TbX size={20}/>}
                </button>
            </div>
            <div className='max-sm:absolute max-sm:hidden '>
                <ul className='flex gap-6 max-sm:flex-col'>
                    <NavLink className='font-medium text-[18px] text-[#67686B]' to='/About'>About</NavLink>
                    <NavLink className='font-medium text-[18px] text-[#67686B]' to='/Features'>Features</NavLink>
                    <NavLink className='font-medium text-[18px] text-[#67686B]' to='/Post'>Post</NavLink>
                </ul>
            </div>
            <div>
                <button className='bg-[#145AFF] text-white py-4 px-6 rounded-md max-sm:hidden'>Get Started</button>
            </div>
            <div className={`sm:hidden w-full items-center flex flex-col bg-white z-20 absolute top-[100px] gap-10 transition-all duration-300  ${this.state.isToggleOn ? 'translate-x-0':'translate-x-full'}`}>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/About'>About</Link>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/Features'>Features</Link>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/Post'>Post</Link>
            </div>
        </div>
      )
    }
}

export default Navbar