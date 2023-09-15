import "./style.css"

export default function Link({
	children,
	href
}: {
	children: any,
	href: string
}
) {
	return <a href={href} className="link">{children}</a>
}