import React, { Component } from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {

      // map over our books array and make each an object, remove works tag and ad ID + Cover img
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),

      // set to URL that points to cover img, if not then to default 
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  // Check if loadingn is true, and return Component. If false then return our booklist
  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>


        {/* Create a grid display and inside map over array of al books with covers, and return a book componenet for each item in the array */}
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

export default BookList