import "./style.css";

export default function Form(props: any) {
	return (
		<form className="form">
			{props.children}
		</form>
	);
}