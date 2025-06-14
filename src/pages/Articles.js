/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import Main from '../layouts/Main';
import books from '../data/article/books';
import Book from '../components/Book/Book';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Articles = () => {
  const [showMore, setShowMore] = useState(true);

  return (
    <Main>
      <article className="post">
        <header>
         <div className="title">
          <h2><Link to="/articles">My favourite books</Link></h2>
          <p>The books that can help you grow as software engineer</p>
         </div>
         <div className="meta">
          <time className="published" dateTime="2025-06-14">June 14, 2025</time>
          <Link to="/" className="author">
            <span className="name">Sandro Colombo</span>
            <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
          </Link>
         </div>
        </header>
        <Link to="/articles" className="image featured"><img src={`${PUBLIC_URL}/images/books.jpg`} alt="" /></Link>
        <p>The amazing books for software engineers and where to find them!!</p>
        {showMore && (
          <>
            {books.map((book) => (
              <Book
                key={book.title}
                {...book}
              />
            ))}
          </>
        )}
        <footer>
         <ul className="actions">
          <li><Link to="/articles" className="button large" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Continue Reading'}</Link></li>
         </ul>
         <ul className="stats">
          {/* <li><Link to="/articles">General</Link></li> */}
          <li>
            <a href="https://medium.com/" aria-label="enlace" target="_blank" rel="noreferrer" className="icon">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
          <li>
            <a href="https://dev.to/" aria-label="enlace" target="_blank" rel="noreferrer" className="icon">
              <FontAwesomeIcon icon={faDev} />
            </a>
          </li>
         </ul>
        </footer>
      </article>
    </Main>
  );
};

export default Articles;
