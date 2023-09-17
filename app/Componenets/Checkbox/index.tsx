import "./style.css"

interface ICheckbox {
	id: string,
	text: string
}

export default function Checkbox(
	{
		id,
		text
	}: ICheckbox
) {
	return (
		<label className="label" htmlFor={id}>
			<input type="checkbox" name={id} id={id} />
			<span>{text}</span>
		</label>
	)
}