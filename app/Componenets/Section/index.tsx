import "./style.css"

export default function Section(
	{
		children,
		id,
		className,
		style
	}: {
		children: any,
		id?: string
		className?: string
		style?: object
	}
) {
	return (
		<section id={id} className={`section ${className}`} style={style}>
			{children}
		</section>
	)
}