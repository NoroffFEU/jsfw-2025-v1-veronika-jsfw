import styles from "./Reviews.module.css";
import cardStyles from "../../styles/cards.module.css";

function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.empty}>No reviews for this product yet.</p>;
  }

  return (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>Reviews</h2>
      <div className={styles.list}>
        {reviews.map((review) => (
          <article key={review.id} className={cardStyles.card}>
            <div className={styles.header}>
              <strong className={styles.user}>{review.username}</strong>
              <span className={styles.rating}>⭐ {review.rating} / 5</span>
            </div>
            <p className={styles.text}>{review.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
