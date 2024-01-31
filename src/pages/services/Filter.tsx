import React, {useState} from "react";
import {filterType, dropdownType} from ".";
import Select from "react-select";

interface filterProps {
	options: filterType | null;
}

type filterState = {
	location?: dropdownType;
	carType?: dropdownType;
	brand?: Array<string>;
	owners?: number;
	budget?: string;
	fuelType?: string;
	transmission?: string;
};

const Filter: React.FC<filterProps> = (props: filterProps) => {
	const [filters, setFilters] = useState<filterState | null>(null);

	const handleSelectChange = (option: dropdownType | null, type: string) => {
		setFilters({...filters, [type]: option});
	};

	const handleCheckboxChange = (value: string) => {
		setFilters((prevSelectedOptions) => {
			if ((prevSelectedOptions?.brand || []).includes(value)) {
				const brand = (prevSelectedOptions?.brand || []).filter(
					(option) => option !== value
				);
				return {...prevSelectedOptions, brand};
			} else {
				const brand = [...(prevSelectedOptions?.brand || []), value];
				return {...prevSelectedOptions, brand};
			}
		});
	};

	const handleRadioChange = (value: number | string, type: string) => {
		setFilters((prev) => ({...prev, [type]: value}));
	};

	return (
		<div className="filter-wrapper flex-column-gap-2">
			<div className="flex-column-gap-1">
				<label>Location:</label>
				<Select
					value={filters?.location}
					onChange={(option) => {
						handleSelectChange(option, "location");
					}}
					options={props?.options?.location}
					isMulti={false}
				/>
			</div>
			<div className="flex-column-gap-1">
				<label>Body Type:</label>
				<Select
					value={filters?.carType}
					options={props?.options?.carType}
					onChange={(option) => {
						handleSelectChange(option, "carType");
					}}
					isSearchable={true}
					placeholder="Search.."
				/>
			</div>
			<div className="flex-column-gap-1">
				<label>Brand:</label>
				{(props?.options?.brand || []).map((option) => (
					<div key={option.value}>
						<label className="flex-align-center gap-1 pointer">
							<input
								type="checkbox"
								value={option.value}
								checked={(filters?.brand || []).includes(option.value as string)}
								onChange={() => handleCheckboxChange(option.value as string)}
							/>
							<span>{option.label}</span>
						</label>
					</div>
				))}
			</div>
			<div className="flex-column-gap-1">
				<label>Owners:</label>
				{(props?.options?.owners || []).map((option) => (
					<div key={option.value}>
						<label className="flex-align-center gap-1 pointer">
							<input
								type="radio"
								value={option.value}
								checked={filters?.owners === option.value}
								onChange={() => handleRadioChange(option.value as number, "owners")}
							/>
							{option.label}
						</label>
					</div>
				))}
			</div>
			<div className="flex-column-gap-1">
				<label>Budget:</label>
				<div className="ovel-wrapper">
					{(props?.options?.budget || []).map((option) => {
						const isChecked = filters?.budget === option.value;
						return (
							<label
								className={`pointer radio-ovel ${isChecked && "selected"}`}
								key={option.value}
							>
								<input
									type="radio"
									value={option.value}
									checked={isChecked}
									onChange={() => handleRadioChange(option.value as string, "budget")}
								/>
								{option.label}
							</label>
						);
					})}
				</div>
			</div>
			<div className="flex-column-gap-1">
				<label>Fuel Type:</label>
				{(props?.options?.fuelType || []).map((option) => (
					<div key={option.value}>
						<label className="flex-align-center gap-1 pointer">
							<input
								type="radio"
								value={option.value}
								checked={filters?.fuelType === option.value}
								onChange={() => handleRadioChange(option.value as string, "fuelType")}
							/>
							{option.label}
						</label>
					</div>
				))}
			</div>
			<div className="flex-column-gap-1">
				<label>Transmission:</label>
				{(props?.options?.transmission || []).map((option) => (
					<div key={option.value}>
						<label className="flex-align-center gap-1 pointer">
							<input
								type="radio"
								value={option.value}
								checked={filters?.transmission === option.value}
								onChange={() =>
									handleRadioChange(option.value as string, "transmission")
								}
							/>
							{option.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
