"use client";

import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import "./style.css"

interface ICheckbox {
	id: string,
	text: string,
	checked: boolean,
	onHandleChecked: Function
}

export default function Checkbox(
	{
		id,
		text,
		checked,
		onHandleChecked
	}: ICheckbox ) {

	return (
		<label className="label" htmlFor={id}>
			<input type="checkbox" checked={checked} onChange={() => onHandleChecked()} name={id} id={id} />
			<span>{text}</span>
		</label>
	)
}