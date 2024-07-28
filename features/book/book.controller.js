import { Book } from './book.model.js';

// Input a data into MongoDB
export const createNewBook = async (title, author, publishYear) => {
    const newBook = {
        TITLE: title,
        AUTHOR: author,
        PUBLISH_YEAR: publishYear
    }
    const response = await Book.create(newBook)
    return response
}

export const getAllBook = async () =>{
    const allBook = await Book.find({})
    return allBook
}


export const getBook = async (bookId) => {
    const book = await Book.findById(bookId);
    return book
}

export const deleteBook = async (bookId) => {
    const result = await Book.findByIdAndDelete(bookId)
    return result
}