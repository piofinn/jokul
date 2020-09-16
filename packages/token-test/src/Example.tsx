import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { Select } from "@fremtind/jkl-select-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { DatePicker } from "@fremtind/jkl-datepicker-react";

import { DNBHeader } from "./DNBHeader";
import { SB1Header } from "./SB1Header";
import "./Example.scss";

const Example = () => {
    const [brand, setBrand] = useState<string | undefined>("Fremtind");
    const [arbeidsdyktig, setArbeidsdyktig] = useState<string>();

    return (
        <div className={`jkl-token-example`}>
            <header>
                {brand === "DNB" && <DNBHeader />}
                {brand === "SB1" && <SB1Header />}
                <div className="jkl-token-example__fremtind-header">
                    <nav className="jkl-token-example-main-menu">
                        <ul className="jkl-token-example-main-menu__list">
                            <li className="jkl-token-example-main-menu__item">
                                <a
                                    className="jkl-token-example-main-menu__link jkl-token-example-main-menu__link--active"
                                    href="/"
                                >
                                    Forsikringer
                                </a>
                            </li>
                            <li className="jkl-token-example-main-menu__item">
                                <a className="jkl-token-example-main-menu__link" href="/">
                                    Faktura
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="jkl-token-example__settings">
                        <Select
                            forceCompact
                            label="Brand"
                            value="brand"
                            onChange={setBrand}
                            items={["Fremtind", "DNB", "SB1"]}
                            className="jkl-layout-spacing--medium-right"
                        />
                        <SecondaryButton forceCompact>Logg ut</SecondaryButton>
                    </div>
                </div>
            </header>
            <main className="jkl-token-example__main">
                <div className="jkl-token-example__headline">
                    <h1 className="jkl-title-small">Meld inn ansatt</h1>
                </div>
                <div className="jkl-token-example__content">
                    <h2 className="jkl-lead jkl-layout-spacing--medium-bottom">
                        Vi må vite litt mer om Fiske Spretten
                    </h2>
                    <RadioButtons
                        className="jkl-layout-spacing--medium-bottom"
                        variant="small"
                        legend="Er Fiske Spretten 100% arbeidsdyktig?"
                        choices={["Ja", "Nei"]}
                        name="arbeidsdyktig"
                        onChange={(e) => setArbeidsdyktig(e.target.value)}
                        selectedValue={arbeidsdyktig}
                        helpLabel="100% arbeidsdyktig betyr at han eller hun er frisk nok til å arbeide i full stilling, uavhengig av om man faktisk er ansatt i full stilling."
                    />
                    <DatePicker
                        className="jkl-layout-spacing--large-bottom"
                        label="Startdato"
                        variant="small"
                        helpLabel="Dagen du ønsker at Fiske Spretten skal være forsikret fra."
                    />
                    <div>
                        <SecondaryButton>← Forrige</SecondaryButton>
                        <PrimaryButton className="jkl-layout-spacing--small-left">Meld inn</PrimaryButton>
                    </div>
                </div>
            </main>
            <footer className="jkl-token-example__footer">©Fremtind Forsikring</footer>
        </div>
    );
};

export default Example;
