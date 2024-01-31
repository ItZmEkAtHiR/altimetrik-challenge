import React from "react";
import close from "@/assets/close.svg";
import "./styles.scss";

interface PopupType {
	title: string;
	children: React.ReactNode;
	onSubmit: () => void;
	onClose: () => void;
}
const Popup: React.FC<PopupType> = (props: PopupType) => {
	return (
		<div className="popup-wrapper">
			<div className="content-wrapper">
				<div className="title">
					<h3>{props.title}</h3>
					<img src={close} alt="Close" onClick={props.onClose} />
				</div>
				{props.children}
				<button className="submit-btn" onClick={props.onSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Popup;
