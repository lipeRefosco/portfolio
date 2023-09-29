import "./style.css"
import { CSSProperties } from "react"

interface IButton {
	children: any,
	type?: 'submit' | 'reset' | 'button' | undefined,
	disabled: boolean,
	outlined?: boolean,
	filled?: boolean,
	style?: CSSProperties
}

export default function Button(
	{
		children,
		type,
		disabled,
		outlined = false,
		filled = false,
		style
	}: IButton ) {

	const btnIsOutlined = outlined ? 'btn-outline' : '';
	const btnIsFilled = filled ? 'btn-filled' : ''

	return (
		<button
			type={type}
			disabled={disabled}
			className={btnIsFilled + btnIsOutlined}
			style={style ? style : {}}>
			{children}
		</button>
	)
}