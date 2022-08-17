try {
	var tabsDiv = document.getElementById("tabGroup-posts-tabs");	
	const tabs = tabsDiv.getElementsByClassName("lia-tabs-standard")
	
	var listItem = document.createElement("li");
	listItem.className  = "lia-tabs lia-tabs-inactive";
	
	var span = document.createElement("span");

	var link = document.createElement("a");
	link.innerText = "Apply Filters";
	link.className  = "lia-link-navigation tab-link lia-custom-event";
	link.addEventListener("click", ApplyFilter);
	
	tabs[0].appendChild(listItem);
	listItem.appendChild(span);
	span.appendChild(link);
}
catch(err) {
	console.log(err.message);
}		

function ApplyFilter() {



	const table = document.getElementsByClassName("thread-list")
	for (let i = 0; i < table.length; i++) {
		// table[i].style.backgroundColor = "green";

		const rowsSolved = table[i].getElementsByClassName("lia-list-row-thread-solved") 
		for (let i = 0; i < rowsSolved.length; i++) {
			rowsSolved[i].style.display = "none"; 
		}
		
		const rowsSticky = table[i].getElementsByClassName("lia-list-row-float") 
		for (let i = 0; i < rowsSticky.length; i++) {
			rowsSticky[i].style.display = "none"; 
		}
		

		const rows = table[i].getElementsByClassName("lia-list-row") ;
		
		for (let i = 0; i < rows.length; i++) {
			try {

				const row = rows[i];
				// console.log(row.innerText);
				
				const userNames = row.getElementsByClassName("UserName");
				
				if (userNames.length == 1){
					row.style.backgroundColor = "#e6ffe6";
				} else if (userNames.length == 2){
					
					if (userNames[0].innerText.trim() === userNames[1].innerText.trim()) {
						row.style.backgroundColor = "#ffffcc";
					} else {
						//row.style.backgroundColor = "#ffe6e6";
					}
				} 
				/*
				var newClickMe = document.createElement("span");
				newClickMe.style.backgroundColor = "#000000";
				newClickMe.style.color = "#FFFF00";
				newClickMe.innerText = typeof userNames[0].innerText 

				row.appendChild(newClickMe);
				*/
			}
			catch(err) {
				console.log(err.message);
			}
		}
		
	}
}