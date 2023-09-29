import "./style.css"
import { CSSProperties } from "react"

interface IButton {
	children: any,
	type?: 'submit' | 'reset' | 'button' | undefined,
	disabled: boolean,
	filled?: boolean,
	style?: CSSProperties
}

export default function Button(
	{
		children,
		type,
		disabled = false,
		filled = false,
		style
	}: IButton) {

	const btnDisabledStyle = disabled ? 'disabled' : '';
	const btnFilledStyle = filled ? 'btn-filled' : 'btn-outline';

	return (
		<button
			type={type}
			disabled={disabled}
			className={`${btnDisabledStyle} ${btnFilledStyle}`}
			style={style ? style : {}}>
			{children}
		</button>
	)
}