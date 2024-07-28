import express from 'express'
import { createNewBook, getAllBook, getBook, deleteBook} from  './book.controller.js'

const bookRouter = express.Router();

bookRouter.post('/insertBook', async (req, res) => {
    console.log("99999", res)
    try{
        if (!req.body.TITLE || !req.body.AUTHOR || !req.body.PUBLISH_YEAR){
            res.status(400).send({message: 'missed required field'})
        }
        const data = await createNewBook(req.body.TITLE, req.body.AUTHOR, req.body.PUBLISH_YEAR)
        return res.status(201).send(data)
    } catch(err){
       res.status(500).send({message: err.message})
    }
})

/*
Test sample:
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"TITLE":"hahaBook", "AUTHOR":"HoChiHang", "PUBLISH_YEAR":"30 May, 2024"}' \
  http://localhost:8000/book/insertBook
*/

bookRouter.get('/allBooks', async (req, res) => {
    try{
        const books = await getAllBook()
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch(err){
        res.status(500).send({message: err.message})
    }
})

bookRouter.get('/:id', async (req, res) => {
    try{
        const book = await getBook(req.params.id)
        return res.status(200).json(book)
    } catch(err){
        res.status(500).send({message: err.message})
    }
})

bookRouter.delete('/delete/:id', async (req, res) => {
    try{
        const result = await deleteBook(req.params.id)
        return res.status(200).send(result)
    } catch(err) {
        res.status(500).send({message: err.message})
    }
})


export default bookRouter;