import React from "react";
import { categoryIds } from "../../utils";
import { Navigation } from "../Navigation/Navigation";
import { Articles } from "../Articles/Articles";
import "./App.css";
import { NewsAPI } from "../../types";

export const App = () => {
	const [category, setCategory] = React.useState<string>("index");
	const [articles, setArticles] = React.useState<NewsAPI>({
		items: [],
		categories: [],
		sources: [],
	});

	const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const category = e.currentTarget.dataset.href;
		if (category) {
			setCategory(category);
		}
	};

	React.useEffect(() => {
		fetch(
			"https://frontend.karpovcourses.net/api/v2/ru/news/" +
				// @ts-ignore
				(categoryIds[category] || "")
		)
			.then((response) => response.json())
			.then((response: NewsAPI) => {
				setArticles(response);
			});
	}, [category]);

	return (
		<React.Fragment>
			<header className="header">
				<div className="container">
					<Navigation
						placement="header"
						onNavClick={onNavClick}
						currentCategory={category}
						className="header__navigation"
					/>
				</div>
			</header>

			<main>
				{/* @ts-ignore */}
				<Articles articles={articles} />
			</main>

			<footer className="footer">
				<div className="container">
					<Navigation
						placement="footer"
						onNavClick={onNavClick}
						currentCategory={category}
						className="footer__navigation"
					/>
					<div className="footer__bottom">
						<p className="footer__text">
							Сделано на Frontend курсе в{" "}
							<a
								className="footer__link"
								href="https://karpov.courses/frontend"
								target="_blank"
							>
								Karpov.Courses
							</a>
						</p>
						<p className="footer__text footer__text--gray">© 2021</p>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};
