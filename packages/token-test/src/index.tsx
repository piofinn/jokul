import React from "react";
import ReactDOM from "react-dom";

// Import core styles, webfonts and tab listener (same for all components):
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "../../webfonts/documentation/internal.scss";

// KOMMENTER INN/UT DISSE FOR Å ENDRE BRAND:
//import "@fremtind/jkl-core/dist-dnb.scss";
//import "@fremtind/jkl-core/dist-sb1.scss";

import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import Example from "./Example";

initTabListener();

ReactDOM.render(<Example />, document.getElementById("app"));
