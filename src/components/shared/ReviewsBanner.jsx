import React, { useState } from "react";
import Review from "./Review";
import ReviewNewForm from "./ReviewNewForm";

function ReviewsBanner({ reviews, movieTitle, movieID, setFetch }) {
	const [openModal, setOpenModal] = useState(false);

	function renderReviews(reviews) {
		if (reviews === null) {
			return <p>Loading...</p>;
		} else if (reviews.length === 0) {
			return <p>We don't have any reviews on this movie yet. Do you wanna be first?</p>;
		} else {
			return reviews.map((review, index) => (
				<Review key={index} review={review} movieTitle={movieTitle} setFetch={setFetch} />
			));
		}
	}

	function addForm(movieTitle, movieID) {
		if (movieTitle && movieID) {
			return (
				<>
					<button onClick={() => setOpenModal(true)}>Add review</button>
					{openModal ? (
						<ReviewNewForm
							setModal={setOpenModal}
							movieID={movieID}
							movieTitle={movieTitle}
							setFetch={setFetch}
						/>
					) : null}
				</>
			);
		}
		return null;
	}

	return (
		<div className="bannerContainer reviewBannerContainer">
			<h2>Reviews</h2>
			{addForm(movieTitle, movieID)}
			<div className="banner reviewBanner">{renderReviews(reviews)}</div>
		</div>
	);
}

export default ReviewsBanner;
