function genMessage(
	url,
	username,
	password,
	userNameFieldName,
	passwordFieldName
) {
	return {
		url: url,
		username: username,
		password: password,
		userNameFieldName: userNameFieldName,
		passwordFieldName: passwordFieldName,
	};
}

async function getDetails(id) {
	// Will get element by id
	Message = genMessage(
		"https://retail.onlinesbi.com/retail/login.htm",
		btoa("nisarg"),
		btoa("12345678"),
		"username",
		"label2"
	);

	// Message = genMessage(
	// 	"https://services.gst.gov.in/services/login",
	// 	btoa("nisarg"),
	// 	btoa("12345678"),
	// 	"username",
	// 	"user_pass"
	// );

	return Message;
}

async function sendMessageToExtension(Message) {
	// we get extension id from extension store after publisjing it.
	// Currently its local extensin id and you may need to change it.
	var editorExtensionId = "eanfbmfpilfndlojhlhmmneakpaoggak";
	await chrome.runtime.sendMessage(
		editorExtensionId,
		Message,
		function (response) {
			if (response) alert(response.success);
			else alert("Something went wrong");
		}
	);
}

console.log("added window.omload4");
window.onload = async function () {
	document
		.getElementById("myBtn")
		.addEventListener("click", async function () {
			var Msg = await getDetails(1);
			await sendMessageToExtension(Msg);
		});
};
