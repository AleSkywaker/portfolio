import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Book = ({
  title, date, description, link, dateTime, image, author, author2,
}) => (
  <div className="books-list">
    <div className="image">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        alt={title}
      >
        <img src={`${PUBLIC_URL}${image}`} alt={title} className="image-books" />
      </a>
      <small className="book-author">{author}</small>
      <br />
      <small className="book-author">{author2}</small>
    </div>
    <div className="meta">
      <h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <small><time className="published" dateTime={dateTime}>{date}</time></small>
      </h3>
      <p className="book-description">{description}</p>
    </div>
  </div>
);

Book.defaultProps = {
  image: '',
  title: '',
  date: '',
  description: '',
  link: '',
  dateTime: '',
  author: '',
  author2: '',
};

Book.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  dateTime: PropTypes.string,
  author: PropTypes.string,
  author2: PropTypes.string,
};
export default Book;
