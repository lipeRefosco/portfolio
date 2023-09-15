import { CSSProperties } from "react"
import "./style.css"


export default function Button(
	{
		children,
		outlined = false,
		filled = false,
		style
	}:
		{
			children: any,
			outlined?: boolean,
			filled?: boolean,
			style?: CSSProperties
		}) {

	const btnIsOutlined = outlined ? 'btn-outline' : '';
	const btnIsFilled = filled ? 'btn-filled' : ''

	return (
		<button className={`button ` + btnIsFilled + btnIsOutlined}
			style={style ? style : {}}>
			{children}
		</button>
	)
}