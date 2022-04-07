import styles from "./BookShelf.module.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookShelf = ({ books }) => {
    //If books is undefined (not found) provide feedback to the user, otherwise continue.
    if (!books) {
        alert(`Book not found`);
        return;
    }
    return (
        <div className={styles.BookShelf}>
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
};

export default BookShelf;
