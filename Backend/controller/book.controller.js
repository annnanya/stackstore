import Book from "../model/book.model.js";

// Controller to fetch all books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error.message);
        res.status(500).json({
            message: "Server error. Unable to fetch books.",
            error: error.message
        });
    }
};
