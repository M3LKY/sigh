function copyClipboard() {
	const freeMail = document.getElementById("freeMail");
	const tooltip = document.getElementById("tooltip");
  
	// Select the text in the input field
	freeMail.select();
  
	try {
	  // Attempt to copy the selected text to the clipboard using the Clipboard API
	  navigator.clipboard.writeText(freeMail.value)
		.then(() => {
		  tooltip.innerHTML = "Mail is copied!";
		})
		.catch((err) => {
		  console.error("Unable to copy to clipboard: ", err);
		  tooltip.innerHTML = "Copy mail to clipboard?";
		});
	} catch (err) {
	  console.error("Clipboard API is not available: ", err);
	  tooltip.innerHTML = "Copy mail to clipboard?";
	}
  
	// Deselect the text
	freeMail.setSelectionRange(0, 0);
  }
  
  function outFunc() {
	document.getElementById("tooltip").innerHTML = "Copy mail to clipboard?";
  }
  