import React, {useContext} from "react";
import {FilterContext} from ".";
import logo from "@/assets/car-alt.svg";
import Card from "@/components/card";
import "./styles.scss";

const ShowResults: React.FC = () => {
	const filterContext = useContext(FilterContext);
	const dataToDisplay =
		filterContext?.filters !== null
			? filterContext?.filteredData
			: filterContext?.carInfo;
	return (
		<div className="show-results-wrapper">
			{(dataToDisplay || []).length > 0 ? (
				<div className="wrap">
					{(dataToDisplay || []).map((car, index) => (
						<Card logo={logo} text={car.model} key={index} />
					))}
				</div>
			) : (
				<div className="label-Wrapper">
					<label className="noDataLabel">No data to display</label>
				</div>
			)}
		</div>
	);
};

export default ShowResults;
