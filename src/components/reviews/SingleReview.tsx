export default function SingleReview({ review }) {
    function formatStars(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★'; // Estrella llena
        }
        return stars;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(new Date(dateString));
    };
    return (
        <div className="single_review">
            <img className="single_review_image" src={review.authorAttribution.photoUri} alt={`${review.authorAttribution.displayName}'s avatar`} />
            <span className="single_review_stars">{formatStars(review.rating)}</span>
            <p className="single_review_content">{review.text.text}</p>
            <a className="single_review_author" href={review.authorAttribution.uri}>{review.authorAttribution.displayName}</a>
            <span className="single_review_date">{formatDate(review.publishTime)}</span>
        </div>
    )
}
