function copyClipboard() {
	document.getElementById("freeMail").select(),
		document.execCommand("copy"),
		(document.getElementById("tooltip").innerHTML = "Mail is copied!");
}

function outFunc() {
	document.getElementById("tooltip").innerHTML = "Copy mail to clipboard?";
}
