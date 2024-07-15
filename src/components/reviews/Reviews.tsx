import React, { useEffect, useState } from 'react';
import './reviews.css';
import SingleReview from './SingleReview';

interface Review {
    relativePublishTimeDescription: string;
    rating: number;
    text: {
        text: string;
    };
    authorAttribution: {
        uri: string;
        displayName: string;
        photoUri: string;
    };
}

interface PlaceInfo {
    reviews: Review[];
    rating?: number;
}

interface ReviewsProps {
    apiKey: string;
}

function StarRating({ rating }) {
    return (
        <div id='rating'>
            <span style={{ minWidth: '73px' }}>{rating ?? ''}</span>
            <span className='stars-container'>
                <span className='stars' style={{
                    width: `${(rating / 5) * 100}%`,
                }}>★★★★★</span>
                <span className='stars-overlay'>★★★★★</span>
            </span>
        </div>
    );
}

const Reviews: React.FC<ReviewsProps> = ({ apiKey }) => {
    const placeId = 'ChIJPTR6S6GOQQ0RI3FnJDVUIvw';
    const fields = 'reviews,rating';

    const [placeInfo, setPlaceInfo] = useState<PlaceInfo>({ reviews: [] });

    const fetchPlaceInfo = async () => {
        try {
            const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${apiKey}`);
            const data = await response.json();

            if (data.reviews && Array.isArray(data.reviews)) {
                const sortedReviews = data.reviews.sort((a, b) =>
                    new Date(b.publishTime) - new Date(a.publishTime)
                );
                setPlaceInfo(data as PlaceInfo);
            } else {
                setPlaceInfo({ reviews: [] });
            }
        } catch (error) {
            console.error('Error fetching place info:', error);
        }
    };

    useEffect(() => {
        fetchPlaceInfo();
    }, []);

    return (
        <>
            <div id='google_reviews' data-aos="fade-down" data-aos-duration="800">
                <div>
                    <img src="/media/google-reviews.png" alt="" />
                    <StarRating rating={placeInfo.rating} />
                </div>
                <a id='send_review' href="https://www.google.com/search?hl=es-ES&gl=es&q=Fisioterapia+Neros,+C.+Pablo+Picasso,+30,+28922+Alcorc%C3%B3n,+Madrid&ludocid=18168176433986760995&lsig=AB86z5UM78-ADHVRhGeysdojuvSx#lrd=0xd418ea14b7a343d:0xfc22543524677123,3">Añadir reseña</a>
            </div>

            <div id='reviews_container' data-aos="fade-down" data-aos-duration="800">
                {placeInfo.reviews.length > 0 ? (
                    placeInfo.reviews.map((review, index) => (
                        <SingleReview key={index} review={review} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </>
    );
};

export default Reviews;
