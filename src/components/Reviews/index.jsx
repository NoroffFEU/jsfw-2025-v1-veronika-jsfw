function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <section>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <strong>{review.username}</strong>
          <p>Rating: {review.rating}</p>
          <p>{review.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;
