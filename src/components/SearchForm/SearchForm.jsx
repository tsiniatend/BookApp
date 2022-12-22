import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  // the users search
  const searchText = useRef('');
  const navigate = useNavigate();

  //focus the element
  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();

    // lets replace our dummy placeholder with our new user input
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    // once on users searched book lets route to its display
    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <div className="search-position">
            {/* create a form that contains our search input and has dummyholder,
            button have onclick that calls handlesubmit,  set width of searchform */}
          <form className='search-form' onSubmit={handleSubmit}>

          {/* Sets the padding and border radius of the element */}
            <div className='search-form-elem flex flex-sb bg-white'>
              
            {/* sets the font size and padding of the element, and opacity  */}
              <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm