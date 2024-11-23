import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
// "Book" is a collection, whenever data comes DB in the form of bookSchema it will get stored in "BOOK"
const Book = mongoose.model("Book", bookSchema);

export default Book;