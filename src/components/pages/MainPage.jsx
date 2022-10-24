import React, { useEffect, useState } from "react";
import ReviewsBanner from "../shared/ReviewsBanner";
import MoviesBanner from "../shared/MoviesBanner";
import { fetchAllReviews, fetchTrendingMovies } from "../../functions/fetch";

function MainPage() {
	const [movies, setMovies] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [fetch, setFetch] = useState(0);

	useEffect(() => {
		const abortController = new AbortController();
		Promise.all([fetchTrendingMovies(abortController.signal), fetchAllReviews(abortController.signal)])
			.then(([{ results }, reviews]) => {
				setMovies(results.length > 3 ? results.slice(0, 3) : results);
				setReviews(reviews.length > 3 ? reviews.slice(0, 3) : reviews);
			})
			.catch((err) => {
				if (!abortController.signal.aborted) {
					console.error(err);
				}
			});
		return () => {
			abortController.abort();
		};
	}, [fetch]);

	function render() {
		return (
			<div className="bannerContainer">
				<MoviesBanner movies={movies} />
				<ReviewsBanner reviews={reviews} setFetch={setFetch} />
				{/* <ReviewForm /> */}
			</div>
		);
	}

	return <div className="mainPage">{render()}</div>;
}

export default MainPage;
