import "./style.css";

export default function Form(
	{
		children
	}: {
		children: any
	}
) {
	return (
		<form className="form">
			{children}
		</form>
	);
}