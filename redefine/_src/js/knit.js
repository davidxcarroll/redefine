var loop = '<li class="loop"></li>';

function print(where, what) {
  document.getElementById(where).innerHTML = what;
}

for (var i = 0; i < 24 * 20; i += 1) {
	// print("knit", loop);
	// document.getElementById("knit").innerHTML = loop;
	document.write(loop);
}