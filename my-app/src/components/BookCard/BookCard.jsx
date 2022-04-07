import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    book.volumeInfo.description = book.volumeInfo.description
        .split(" ")
        .splice(0, 20)
        .join(" ");

    return (
        <div className={styles.BookCard}>
            <h4 className={styles.BookCard__Title}>{book.volumeInfo.title}</h4>
            <img
                className={styles.BookCard__Image}
                src={book.volumeInfo.imageLinks.thumbnail}
            />
            <p className={styles.BookCard__Author}>
                <strong>Authors(s): </strong>
                {`${book.volumeInfo.authors}`}
            </p>
            <p className={styles.BookCard__Description}>
                <strong> Description: </strong>
                {`${book.volumeInfo.description}...`}
            </p>
        </div>
    );
};

export default BookCard;
