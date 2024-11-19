var output, links;

output = document.getElementById('body');
links = document.querySelectorAll('.nav-link');

function loadPage(url){
	const xhttp = new XMLHttpRequest();

	xhttp.onload = () =>  {
		let res = xhttp.response;
		output.innerHTML = res;
	}

	xhttp.open("GET", url, true);
	xhttp.send();
}