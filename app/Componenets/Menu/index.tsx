import "./style.css"



export default function Menu({ children }: { children: any }) {
	return (
		<nav className="menu">
			{children}
		</nav>
	)
}