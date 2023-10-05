import "./style.css"
import Button from "../Button";
import Link from "../Link";

export default function ProjectCard(
	{
		img,
		name,
		description,
		projectPageURL
	}: {
		img: string
		name: string
		description: string
		projectPageURL: string
	}) {
	return (
		<div className="project-card">
			<div className="project-image">
				<img src={img} />
			</div>
			<div className="project-infos">
				<h3>{name}</h3>
				<p>{description}</p>
				<Link href={projectPageURL}>
					<Button disabled={false} filled={false}>
						Mais detalhes
					</Button>
				</Link>
			</div>
		</div>
	)
}