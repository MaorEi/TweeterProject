function filterByUsername(){
	var input,filter,usersList,userCellNames,userCells;

	input = document.getElementById("user-filter-input");
	filter = input.value.toUpperCase();
	usersList = document.getElementById("users-list");
	userCells = usersList.getElementsByClassName("user-cell");
	for (var i = 0; i < userCells.length; i++) {
		//console.log(userCellName[i].innerHTML.toUpperCase());
		userCellNames = userCells[i].getElementsByClassName("user-cell-name");
		for (var j = 0; j < userCellNames.length; j++) {
			if(userCellNames[j].innerHTML.toUpperCase().startsWith(filter)) 
				userCells[i].style.display = "";
				//userCells[i].classList.remove("hide-me");
			else 
				userCells[i].style.display = "none";
				//userCells[i].classList.add("hide-me");
		}
	}
}