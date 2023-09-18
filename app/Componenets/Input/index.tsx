"use client";
import { useState } from "react";
import "./style.css";

export interface IInput {
	type: string,
	id: string,
	label?: string
}

export default function Input({
	type,
	id,
	label
}: IInput) {

	const [value, setValue] = useState<string>('');
	const [isFocus, setFocus] = useState<boolean>(false);
	const [isValid, setValid] = useState<boolean>(false);
	const [isInvalid, setInvalid] = useState<boolean>(false);

	const handleInputFocus = (e: any): void => {
		const inputValue = e.target.value;

		if (!inputValue) {
			setFocus(false);
			return;
		}

		setFocus(true)
		return;
	}

	const handleValidationStyle = (e: any): void => {
		if(e.target.value.length === 0) {
			setValid(false);
			setInvalid(false);
			return;
		}

		if (e.target.value.length <= 2) {
			setValid(false);
			setInvalid(true);
			return;
		}

		setValid(true);
		setInvalid(false);
		return;
	}

	const handleInputValue = (e: any) => {
		handleInputFocus(e);
		setValue(e.target.value);
		handleValidationStyle(e);
	}

	return (
		<label className={`label
		${isValid ? 'valid' : ''}
		${isInvalid ? 'invalid' : ''}
		`} htmlFor={id}>
			<input
				type={type}
				name={id}
				id={id}
				onFocus={handleInputFocus}
				onBlur={handleInputFocus}
				onChangeCapture={handleInputValue}
				value={value} />
			{label ? <span className="placeholder" data-focus={isFocus}>{label}</span> : ''}
		</label>
	)
}