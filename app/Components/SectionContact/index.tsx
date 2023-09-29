"use client";

import { TextAlign } from "@/app/Aligns";
import Button from "../Button";
import Form from "../Form";
import { Heading, Headings } from "../Headings";
import Input from "../Input";
import Section from "../Section";
import { useState } from "react";

const sectionStyle = {
	justifyContent: 'center',
}

export default function SectionContact() {
	const [isNameValid, setIsNameValid] = useState<boolean>(false);
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);

	const nameValidator = (e: any) => {
		if (e.target.value.length < 3 || e.target.validity.tooShort) {
			setIsNameValid(false);
			return;
		}
		setIsNameValid(true);
	}

	const emailValidator = (e: any) => {
		setIsEmailValid(e.target.validity.valid);
	}

	const termsValidator = (e: any) => {
		setIsTermsChecked(e.target.validity.valid);
	}

	return (
		<Section id="contact" style={sectionStyle}>
			<Heading heading={Headings.h2} align={TextAlign.center}>Oi recruter!</Heading>
			<p>Preencha o formulário para baixar o meu currículo.</p>
			<Form>
				<Input
					type="text"
					id="nome"
					label="Nome:"
					required={true}
					onChangeHandler={nameValidator} />
				<Input
					type="email"
					id="email"
					label="E-mail"
					required={true}
					onChangeHandler={emailValidator}
					autoComplete="on" />
				<Input
					type="checkbox"
					id="terms"
					label="Aceita os termos blbbl"
					required={true}
					onChangeHandler={termsValidator} />
				<Button disabled={!isNameValid || !isEmailValid || !isTermsChecked ? true : false} filled={true}>Baixar currículo</Button>
			</Form>
		</Section>
	)
}