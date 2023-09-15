import "./style.css"
import Section from "../Section";


export default function SectionLinks({children}: {children: any}) {
	return (
		<Section className={"links"}>
			{children}
		</Section>
	)
}