import { TextAlign } from "@/app/Aligns"
import { createElement } from "react";


export enum Headings {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6"
}

interface IHeading {
	children: any,
	heading: Headings,
	align: TextAlign
}

export function Heading({
	children,
	heading,
	align
}: IHeading) {
	return createElement(heading, {className: align}, children);
}