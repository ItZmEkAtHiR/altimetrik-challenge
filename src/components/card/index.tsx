import React from "react";
import "./styles.scss";

interface PropTypes {
	logo?: string;
	text: string;
	onClick?: () => void;
}
const Card: React.FC<PropTypes> = ({logo, text, onClick}: PropTypes) => {
	return (
		<div className="card-wrapper" onClick={onClick}>
			{logo && <img src={logo} alt="logo" />}
			<p>{text}</p>
		</div>
	);
};
export default Card;
