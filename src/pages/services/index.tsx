import React, {createContext, useEffect, useState} from "react";
import Filter from "./Filter";
import "./styles.scss";
import {FormState} from "@/pages/home/AddCarDetailsForm";
import ShowResults from "./ShowResults";

export type dropdownType = {
	label: string;
	value: string | number;
};
export type filterType = {
	location?: Array<dropdownType>;
	carType?: Array<dropdownType>;
	brand?: Array<dropdownType>;
	owners?: Array<dropdownType>;
	budget?: Array<dropdownType>;
	fuelType?: Array<dropdownType>;
	transmission?: Array<dropdownType>;
};

type filterState = {
	location?: dropdownType;
	carType?: dropdownType;
	brand?: Array<string>;
	owners?: number;
	budget?: string;
	fuelType?: string;
	transmission?: string;
};

interface FilterContextProps {
	filters: filterState | null;
	setFilters: React.Dispatch<React.SetStateAction<filterState | null>>;
	carInfo: Array<FormState> | null;
	filteredData: Array<FormState> | null;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
	undefined
);

const Services: React.FC = () => {
	const [filterOption, setFilterOption] = useState<filterType>({});
	const [filters, setFilters] = useState<filterState | null>(null);
	const [carInfo, setCarInfo] = useState<Array<FormState> | null>(null);
	const [filteredData, setFilteredData] = useState<Array<FormState> | null>(
		null
	);

	useEffect(() => {
		const fetchFilters = async () => {
			try {
				const response = await fetch("/api/filters.json");

				if (!response.ok) {
					throw new Error(`Failed to fetch data. Status: ${response.status}`);
				}

				const data = await response.json();
				setFilterOption({...data});
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		const fetchData = async () => {
			const storedData = localStorage.getItem("myData");
			if (storedData) {
				setCarInfo(JSON.parse(storedData));
			}
		};

		fetchFilters();
		fetchData();
	}, []);

	useEffect(() => {
		if (carInfo !== null && filters !== null) {
			const filteredResults = carInfo.filter((car) => {
				return (
					(!filters.location || car.location === filters.location.value) &&
					// (!filters.carType || car.carType === filters.carType.value) &&
					(!filters.brand || filters.brand.includes(car.model)) &&
					(!filters.owners || Number(car.owners) === filters.owners) &&
					// (!filters.budget || car.budget === filters.budget) &&
					// (!filters.fuelType || car.fuelType === filters.fuelType) &&
					(!filters.transmission || car.transmission === filters.transmission)
				);
			});

			setFilteredData(filteredResults);
		}
	}, [filters]);

	return (
		<div className="service-wrapper">
			<FilterContext.Provider value={{filters, setFilters, carInfo, filteredData}}>
				<Filter options={filterOption} />
				<ShowResults />
			</FilterContext.Provider>
		</div>
	);
};

export default Services;
