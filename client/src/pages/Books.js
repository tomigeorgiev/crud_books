import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Nav from './NavComponent'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Nav />
            <div className='books'>
                {books.map(book =>(
                    <div className='book' key={book.id}> 
                        {book.cover && <img src={book.cover} alt='' /> }
                        <h2>{book.title}</h2>
                        <p> {book.desc} </p>
                        <span> {book.price} </span>

                        <button className='update'> <Link className='update' to={`/update/${book.id}`}>Udate</Link> </button>
                        <button className='delete' onClick={() => handleDelete(book.id)}> Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books;
