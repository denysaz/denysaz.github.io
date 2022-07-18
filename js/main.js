
var prev_aw_b = "aw_part_button1";
var prev_aw_article = "aw_part1";


function b_naw_(n) {
	switch (n) {
			case 1: {b_nav_change("aw_part_button1", 'Профіль (рама)', 'aw_part1');} 
			break;
			case 2: {b_nav_change("aw_part_button2", 'Ламінація', 'aw_part2');} 
			break;
			case 3: {b_nav_change("aw_part_button3", 'Типи відкривання', 'aw_part3');} 
			break;
			case 4: {b_nav_change("aw_part_button4", 'Фурнітура', 'aw_part4');} 
			break;
			case 5: {b_nav_change("aw_part_button5", 'Додаткові комплектуючі', 'aw_part5');} 
			break;
		}
}

function b_nav_change(currentButton, currentLabel, currentArticle) {
	if (prev_aw_b !== currentButton) {
			change_button_style(currentButton);
			change_button_style(prev_aw_b);
			prev_aw_b = currentButton;
			
			document.getElementById(prev_aw_article).style.display = "none";
			document.getElementById(currentArticle).style.display = "block";
			prev_aw_article = currentArticle;
		}
	
}


function change_naw_aw(str) {
	document.getElementById("naw_header").textContent=str;
}
function change_button_style(b_name) {
	let b = document.getElementById(b_name);
	let currentColor = b.style.backgroundColor;
	if (currentColor === "rgb(198, 144, 0)") {
		
		b.style.backgroundColor = "";
		b.style.color = "";
	} else {
		b.style.backgroundColor = "#c69000";
		b.style.color = "#fff";
	}
}



function open_close_about_defin(numberDefin) {
	switch (numberDefin) {
			case 1: {changeDisplayBlock("about_defin_profile"); change_button_style("b_about_defin_profile"); } 
			break;
			case 2: {changeDisplayBlock("about_defin_laminate"); change_button_style("b_about_defin_laminate");} 
			break;
			case 3: {changeDisplayBlock(""); } 
			break;
			case 4: {changeDisplayBlock(""); } 
			break;
		}
}

function open_close_wm(b_number) {
	switch (b_number) {
			case 1: {changeDisplayFlex("wpm_epsilon"); change_button_style("b_wpm_epsilon");} 
			break;
			case 2: {changeDisplayFlex("wpm_rehau"); change_button_style("b_wpm_rehau");} 
			break;
			case 3: {changeDisplayFlex("wpm_salamander"); change_button_style("b_wpm_salamander");} 
			break;
			case 4: {changeDisplayFlex("wpm_wds"); change_button_style("b_wpm_wds");} 
			break;
			case 5: {changeDisplayFlex("dpm_epsilon"); change_button_style("b_dpm_epsilon");} 
			break;
			case 6: {changeDisplayFlex("dpm_rehau"); change_button_style("b_dpm_rehau");}
			break;
			case 7: {changeDisplayFlex("dpm_wds"); change_button_style("b_dpm_wds");}
			break;
			case 9: {changeDisplayFlex("wlm_epsilon"); change_button_style("b_wlm_epsilon");} 
			break;
			case 10: {changeDisplayFlex("wlm_rehau"); change_button_style("b_wlm_rehau");} 
			break;
			case 11: {changeDisplayFlex("wlm_salamander"); change_button_style("b_wlm_salamander");} 
			break;
			case 12: {changeDisplayFlex("wlm_wds"); change_button_style("b_wlm_wds");} 
		}
}


function changeDisplayFlex(y) {
	let x = document.getElementById(y);
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
		}
}


function changeDisplayBlock(y) {
	let x = document.getElementById(y);

	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
		}
}


function open_close_faq(faq_numder) {
	switch (faq_numder) {
		case 1: {changeDisplayBlock("faq_div1");} 
		break;
		case 2: {changeDisplayBlock("faq_div2");} 
		break;
		case 3: {changeDisplayBlock("faq_div3");} 
		break;
		case 4: {changeDisplayBlock("faq_div4");} 
		break;
		case 5: {changeDisplayBlock("faq_div5");} 
		break;
	}
}

/*function b_nav_change(currentButton, currentLabel, currentArticle) {
	let scwidth = document.body.clientWidth;
	if (scwidth < 700) { 
		change_naw_aw(currentLabel); 
		document.getElementById("nav_about_window").style.display = "none";
		
		document.getElementById(prev_aw_article).style.display = "none";
		document.getElementById(currentArticle).style.display = "block";
		prev_aw_article = currentArticle;
		
	} {
		if (prev_aw_b !== currentButton) {
			change_button_style(currentButton);
			change_button_style(prev_aw_b);
			prev_aw_b = currentButton;
			
			document.getElementById(prev_aw_article).style.display = "none";
			document.getElementById(currentArticle).style.display = "block";
			prev_aw_article = currentArticle;
		}
	}
}*/

/*

function b_naw_(n) {
	let y = document.body.clientWidth;
	if (y < 700) {
		
		
	} else {
		
	} 	
	
	switch (n) {
			case 1: {
				if (y < 700) { 
					change_naw_aw('Профіль (рама)'); 
					document.getElementById("nav_about_window").style.display = "none";
				} {
					change_aw_part_button("aw_part_button1");
					
				}
			} 
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
}
*/




