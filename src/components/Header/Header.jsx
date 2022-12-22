import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";



const Header = () => {
  return (
    // container for our entire header element 
    <div className='holder'>
      {/* the Header holds our navbar but doesnt have styles */}
        <header className='header'>
            <Navbar />
            
            {/* specify our bg img, direction and size/position  */}
            <div className='header-content flex flex-c text-center text-white'>
                
                {/* target the h2 and p for fontsize, font wieght, margin and opacity. */}
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm />
            
              

            </div>
        </header>
    </div>
  )
}

export default Header