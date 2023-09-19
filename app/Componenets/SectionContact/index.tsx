"use client";

import { TextAlign } from "@/app/Aligns";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import { Heading, Headings } from "../Headings";
import Input from "../Input";
import Section from "../Section";
import { useState } from "react";

export default function SectionContact() {

	const [isChecked, setChecked] = useState<boolean>(false)

	const handleChecked = () => {
		setChecked(!isChecked);
	}

	return (
		<Section id="contact">
			<Heading heading={Headings.h2} align={TextAlign.center}>Oi recruter!</Heading>
			<p>Preencha o formulário para baixar o meu currículo.</p>
			<Form>
				<Input type="text" id="nome" label="Nome:" />
				<Input type="email" id="email" label="E-mail:" />
				<Checkbox id="termos" text="Aceita os termos blabla ..." checked={isChecked} onHandleChecked={handleChecked} />
				<Button disabled={!isChecked} filled={true}>Baixar currículo</Button>
			</Form>
		</Section>
	)
}