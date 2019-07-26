import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { Layout } from "../../components";
import {
    AccordionExample,
    BulletListExample,
    ButtonExample,
    CardExample,
    CheckboxExample,
    DatepickerExample,
    DividerLineExample,
    LoaderExample,
    LogoExample,
    MessageBoxExample,
    RadioButtonExample,
    TextFieldExample,
    ToggleSwitchExample,
    TextAreaExample,
    TypographyExample,
    HamburgerExample,
} from "../../examples";

import "./style.scss";

interface Props {
    title: string;
    example: ReactNode;
    link: string;
}

const Section = ({ title, example, link }: Props) => (
    <section>
        <h2 className="jkl-h2">
            <Link to={`/components/${link}`}>{title}</Link>
        </h2>
        <span className="jkl-component-vertical-spacer">{example}</span>
    </section>
);

export default function AllComponents() {
    return (
        <Layout>
            <h1 className="jkl-h1">Alle komponenter</h1>
            <Section title="Knapper" link="button" example={<ButtonExample />} />
            <Section title="Radioknapper" link="radiobutton" example={<RadioButtonExample />} />
            <Section title="Avmerkingsbokser" link="checkbox" example={<CheckboxExample />} />
            <Section title="Toggle-knapp" link="toggleswitch" example={<ToggleSwitchExample />} />
            <Section title="Trekkspillliste" link="accordion" example={<AccordionExample />} />
            <Section title="Datovelger" link="datepicker" example={<DatepickerExample />} />
            <Section title="Typografi" link="typography" example={<TypographyExample />} />
            <Section title="Tekstfelt" link="textfield" example={<TextFieldExample />} />
            <Section title="Lang tekstfelt" link="textarea" example={<TextAreaExample />} />
            <Section title="Meldinger" link="messagebox" example={<MessageBoxExample />} />
            <Section title="Logo" link="logo" example={<LogoExample />} />
            <Section title="Lasteindikator" link="loader" example={<LoaderExample />} />
            <Section title="Delelinje" link="dividerline" example={<DividerLineExample />} />
            <Section title="Kort" link="card" example={<CardExample />} />
            <Section title="Liste" link="bulletlist" example={<BulletListExample />} />
            <Section title="Hamburger meny" link="hamburger" example={<HamburgerExample />} />
        </Layout>
    );
}