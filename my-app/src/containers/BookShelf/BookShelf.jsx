import styles from "./BookShelf.module.scss";
import BookCard from "../../components/BookCard/BookCard";

const BookShelf = ({ books }) => {
    return (
        <div className={styles.BookShelf}>
            {/* <h3>Results:</h3> */}
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
};

export default BookShelf;
