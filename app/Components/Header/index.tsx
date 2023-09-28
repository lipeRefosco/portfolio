import "./style.css";

export default function Header({ children }: { children: any }) {
	return (
		<header className="header">
			{children}
		</header>
	)

}