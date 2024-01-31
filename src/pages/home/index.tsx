import React, {useEffect, useState} from "react";
import logo from "../../assets/car-alt.svg";
import Card from "../../components/card";
import AddCarDetailsForm, {FormState} from "./AddCarDetailsForm";
import {isEqual} from "lodash";
import "./styles.scss";

type manufacturerType = {logo?: string; text: string};
const manufacturers: Array<manufacturerType> = [
	{logo: logo, text: "Maruthi Suzuki"},
	{logo: logo, text: "Hyundai"},
	{logo: logo, text: "Honda"},
	{logo: logo, text: "Renault"},
	{logo: logo, text: "Tata"},
	{logo: logo, text: "Ford"},
	{text: "More"},
];

const Home: React.FC = () => {
	const [showPopup, setShowPopup] = useState<boolean>(false);
	const [jsonData, setJsonData] = useState<Array<FormState> | null>(null);

	const handleShowPopup = () => {
		setShowPopup((prev) => !prev);
	};
	const handleAddCar = (values: FormState) => {
		const isAlreadyExist = jsonData?.some((item) => isEqual(item, values));
		if (!isAlreadyExist) {
			saveData(values);
		}
		console.log(isAlreadyExist ? jsonData : [...(jsonData || []), values]);
		// handleShowPopup();
	};

	const saveData = (data: FormState) => {
		localStorage.setItem("myData", JSON.stringify([...(jsonData || []), data]));
		setJsonData([...(jsonData || []), data]);
	};

	useEffect(() => {
		const storedData = localStorage.getItem("myData");
		if (storedData) {
			setJsonData(JSON.parse(storedData));
		}
	}, []);

	return (
		<>
			<div className="home-wrapper">
				{manufacturers.map((manufacturer, index) => (
					<Card {...manufacturer} key={index} onClick={handleShowPopup} />
				))}
			</div>
			{showPopup && (
				<AddCarDetailsForm onSubmit={handleAddCar} onClose={handleShowPopup} />
			)}
		</>
	);
};

export default Home;
