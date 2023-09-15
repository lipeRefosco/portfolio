import "./style.css"

export default function Section(
	{
		children,
		id,
		className
	}: {
		children: any,
		id?: string
		className?: string
	}
) {
	return (
		<section id={id} className={`section ${className}`}>
			{children}
		</section>
	)
}