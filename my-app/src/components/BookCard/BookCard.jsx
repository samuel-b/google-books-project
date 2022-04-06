import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    return (
        <div className={styles.BookCard}>
            <h3>{book.volumeInfo.title}</h3>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <p>{book.volumeInfo.description}</p>
            <p>{book.volumeInfo.authors}</p>
        </div>
    );
};

export default BookCard;
