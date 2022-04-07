import styles from "./BookCard.module.scss";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const BookCard = ({ book }) => {
    console.log(book);
    const shortDesc = book.volumeInfo.description
        .split(" ")
        .splice(0, 20)
        .join(" ");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

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
                {`${shortDesc}...`}
            </p>
            <button className={styles.BookCard__Button} onClick={handleOpen}>
                More Info
            </button>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className={styles.BookCard__Modal}>
                    <Typography>
                        <h4>{book.volumeInfo.title}</h4>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        <p>
                            <strong>Pages: </strong>
                            {book.volumeInfo.pageCount}
                        </p>
                        <p>
                            <strong>Categories: </strong>
                            {book.volumeInfo.categories}
                        </p>
                        <p>
                            <strong>Publisher: </strong>
                            {book.volumeInfo.publisher}
                        </p>

                        <strong> Full Description </strong>
                        <p>{book.volumeInfo.description}</p>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default BookCard;
