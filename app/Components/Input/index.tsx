import "./style.css";

export interface IInput {
	type: string,
	id: string,
	label?: string,
	required?: boolean,
	value?: string,
	autoComplete?: 'off' | 'on',
	onChangeHandler: any
}

export default function Input({
	type,
	id,
	label,
	required = false,
	value,
	autoComplete,
	onChangeHandler = null
}: IInput) {

	return (
		<label id={`label-` + id} className={`label`} htmlFor={id}>
			{required
				? <input
					id={id}
					type={type}
					placeholder=""
					name={id}
					onChange={onChangeHandler}
					minLength={3}
					autoComplete={autoComplete}
					required />
				: <input
					id={id}
					type={type}
					placeholder=""
					name={id}
					onChange={onChangeHandler}
					minLength={3}
					autoComplete={autoComplete}
					/>}
			<span>{label}</span>
		</label>
	);
}