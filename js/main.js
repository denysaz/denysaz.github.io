
var isNawClicked = new Boolean(false);


function mobile_nav_about_window() {
  let x = document.getElementById("nav_about_window");

	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
		}
}

function b_naw_(n) {
	let y = document.body.clientWidth;
	if (y < 700) {

		switch (n) {
			case 1: {change_naw_aw('Профіль (рама)'); } 
			break;
			case 2: {change_naw_aw('Ламінація'); } 
			break;
			case 3: {change_naw_aw('Типи відкривання'); } 
			break;
			case 4: {change_naw_aw('Фурнітура'); } 
			break;
			case 5: {change_naw_aw('Додаткові комплектуючі'); } 
			break;
		}
		document.getElementById("nav_about_window").style.display = "none";
	} 
		
	
}

function change_naw_aw(str) {
	document.getElementById("naw_header").textContent=str;

}

function open_close_table(numberTable) {
	switch (numberTable) {
			case 1: {changeTableDisplay("wpm_epsilon"); } 
			break;
			case 2: {changeTableDisplay("wpm_rehau"); } 
			break;
			case 3: {changeTableDisplay("wpm_salamander"); } 
			break;
			case 4: {changeTableDisplay("wpm_wds"); } 
			break;
		}
}

function changeTableDisplay(y) {
	let x = document.getElementById(y);

	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
		}
}





