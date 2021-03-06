import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import AccountsUI from "../imports/ui/AccountsUI.js"
// import Register from "../imports/forms/Register.js"
// import "../imports/startup/accounts-config.js"
import App from "../imports/ui/App.js";

Meteor.startup(()=>{
	{
		render(<AccountsUI />, document.getElementById("login"));
		render(<App />, document.getElementById("react-root"));
	}
});
