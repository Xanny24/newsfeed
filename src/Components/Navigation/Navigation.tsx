import React, { FC } from "react";
import { categoryNames } from "../../utils";
import "./Navigation.css";
import logo from "../../images/logo.svg";

interface Props {
	onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
	currentCategory: string;
	className?: string;
	placement: "header" | "footer";
}

export const Navigation: FC<Props> = ({
	onNavClick,
	currentCategory,
	className = "",
	placement = "header",
}) => {
	const categories: Array<
		"index" | "fashion" | "technologies" | "sport" | "karpov"
	> = ["index", "fashion", "technologies", "sport", "karpov"];

	return (
		<nav className={`grid navigation navigation--${placement} ${className}`}>
			<a
				className="navigation__logo"
				data-href="index"
				href="#"
				onClick={onNavClick}
			>
				<img className="navigation__logo-image" src={logo} alt="Логотип" />
			</a>
			<ul className="navigation__list">
				{categories.map((item) => {
					return (
						<li className="navigation__item" key={item}>
							<a
								onClick={onNavClick}
								className={`navigation__link ${
									currentCategory === item ? "navigation__link--active" : ""
								}`}
								data-href={item}
								href="#"
							>
								{categoryNames[item]}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
