import "./style.css";

export interface IInput {
	type: string,
	id: string,
	label?: string,
	required?: boolean,
	value?: string,
	onChangeHandler: any
}

export default function Input({
	type,
	id,
	label,
	required = false,
	value,
	onChangeHandler = null
}: IInput) {

	return (
		<label id={`label-` + id} className={`label`} htmlFor={id}>
			{required
				? <input id={id} type={type} placeholder="" name={id} onChange={onChangeHandler} required />
				: <input id={id} type={type} placeholder="" name={id} onChange={onChangeHandler} />}
			<span>{label}</span>
		</label>
	);
}