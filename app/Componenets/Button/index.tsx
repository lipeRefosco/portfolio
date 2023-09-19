import "./style.css"
import { CSSProperties } from "react"

interface IButton {
	children: any,
	disabled?: boolean,
	outlined?: boolean,
	filled?: boolean,
	style?: CSSProperties
}

export default function Button(
	{
		children,
		disabled = false,
		outlined = false,
		filled = false,
		style
	}: IButton ) {

	const btnIsOutlined = outlined ? 'btn-outline' : '';
	const btnIsFilled = filled ? 'btn-filled' : ''

	return (
		<button disabled={disabled ? true : false} className={`button ` + btnIsFilled + btnIsOutlined}
			style={style ? style : {}}>
			{children}
		</button>
	)
}