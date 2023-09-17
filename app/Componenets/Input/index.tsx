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

	const [value, setValue] = useState<string>();
	const [isFocus, setFocus] = useState<boolean>(false);
	const [isValid, setValid] = useState<boolean>(false)

	const handleInputFocus = (e: any) => {
		const inputValue = e.target.value;

		if(!inputValue) {
			setFocus(false);
			return;
		}

		setFocus(true);
	}

	const handleInputValue = (e: any) => {
		handleInputFocus(e)
		setValue(e.target.value)
	}

	const handleInputEmail = (e: any) => {
		handleInputValue(e);
		const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		
		if(!re.test(e.target.value)) {
			setValid(true);
			return
		}

		setValid(true);
	}

	return (
		<label className="label" htmlFor={id}>
			<input
				type={type}
				name={id}
				id={id}
				onFocus={handleInputFocus}
				onBlur={handleInputValue}
				onChange={handleInputValue}
				value={value} />
			{label ? <span className="placeholder" data-focus={isFocus}>{label}</span> : ''}
		</label>
	)
}