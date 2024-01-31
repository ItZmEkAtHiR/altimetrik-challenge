import React, {ChangeEvent} from "react";
interface InputProps {
	name: string;
	label: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
		<>
			<label htmlFor={props.name} className="spaceBw max-height-input">
				<span>{`${props.label}:`}</span>
				<input
					type="text"
					name={props.name}
					value={props.value}
					onChange={props.onChange}
				/>
			</label>
		</>
	);
};

export default Input;
