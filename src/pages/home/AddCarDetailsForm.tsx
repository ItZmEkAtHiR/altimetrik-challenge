import React, {ChangeEvent, useState} from "react";
import Input from "@/components/input";
import Popup from "@/components/popup";

export type FormState = {
	model: string;
	color: string;
	year: string;
	insurance: string;
	kms: string;
	location: string;
	owners: string;
	transmission: string;
	externalParts: string;
};

interface AddCarDetailsFormType {
	onClose: () => void;
	onSubmit: (values: FormState) => void;
}

const AddCarDetailsForm: React.FC<AddCarDetailsFormType> = ({
	onClose,
	onSubmit,
}: AddCarDetailsFormType) => {
	const [formValues, setFormValues] = useState<FormState>({
		model: "",
		color: "",
		year: "",
		insurance: "",
		kms: "",
		location: "",
		owners: "",
		transmission: "",
		externalParts: "",
	});
	const hanldeFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormValues((prev) => ({...prev, [name]: value}));
	};
	return (
		<Popup
			title="Add car details"
			onClose={onClose}
			onSubmit={() => onSubmit(formValues)}
		>
			<div className="form-wrapper">
				<Input
					name="model"
					label="Model"
					onChange={hanldeFormChange}
					value={formValues.model}
				/>
				<Input
					name="color"
					label="Color"
					onChange={hanldeFormChange}
					value={formValues.color}
				/>
				<Input
					name="year"
					label="YearOfManufacture"
					onChange={hanldeFormChange}
					value={formValues.year}
				/>
				<Input
					name="insurance"
					label="Insurance Valid Upto"
					onChange={hanldeFormChange}
					value={formValues.insurance}
				/>
				<Input
					name="kms"
					label="Kms"
					onChange={hanldeFormChange}
					value={formValues.kms}
				/>
				<Input
					name="location"
					label="Location"
					onChange={hanldeFormChange}
					value={formValues.location}
				/>
				<Input
					name="owners"
					label="No of Owners"
					onChange={hanldeFormChange}
					value={formValues.owners}
				/>
				<Input
					name="transmission"
					label="Transmission"
					onChange={hanldeFormChange}
					value={formValues.transmission}
				/>
				<Input
					name="externalParts"
					label="External Fitments"
					onChange={hanldeFormChange}
					value={formValues.externalParts}
				/>
				<div className="spaceBw">
					<label htmlFor="fileInput">Select a file:</label>
					<input type="file" id="fileInput" onChange={() => {}} />
				</div>
			</div>
		</Popup>
	);
};

export default AddCarDetailsForm;
