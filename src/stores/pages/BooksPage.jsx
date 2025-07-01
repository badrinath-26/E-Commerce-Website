import React,{useState}from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const BooksPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([])

  const categoryHandler = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const filteredBooks = selectedCategories.length === 0
    ? booksData
    : booksData.filter(item => selectedCategories.includes(item.category))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {Array.from(new Set(booksData.map(item => item.category))).map((cat, idx) => (
            <div className='pro-input' key={idx}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => categoryHandler(cat)}
                />
                {cat}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredBooks.map(book => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <div className="pageImg">
                  <img src={`/${book.image}`} alt={book.title} />
                </div>
              </Link>
              <div className="proModel">
                {book.title}, {book.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BooksPage