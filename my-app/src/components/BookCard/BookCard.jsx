import styles from "./BookCard.module.scss";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const BookCard = ({ book }) => {
    //useState hook and functions for controlling the modal.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    //If the keys do not exist inside the object do not include them in the render, otherwise continue.
    if (!book.volumeInfo.imageLinks || !book.volumeInfo.description) {
        return;
    }

    //Used to display only the first 20 words of the book's description on the book card.
    const shortDesc = book.volumeInfo.description
        .split(" ")
        .splice(0, 20)
        .join(" ");

    return (
        <div className={styles.BookCard}>
            <h4 className={styles.BookCard__Title}>{book.volumeInfo.title}</h4>
            <img
                className={styles.BookCard__Image}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="bookImage"
            />
            <p className={styles.BookCard__Author}>
                <strong>Author(s): </strong>
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
                        <h3>{book.volumeInfo.title}</h3>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt="bookImage"></img>
                        <p>
                            <strong>Pages: </strong>
                            {book.volumeInfo.pageCount}
                        </p>
                        <p>
                            <strong>Publisher: </strong>
                            {book.volumeInfo.publisher}(
                            {book.volumeInfo.publishedDate
                                .split("-")
                                .splice(0, 1)
                                .join(" ")}
                            )
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
