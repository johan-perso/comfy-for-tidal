// Say that the file is loaded
console.log("[Comfy for Tidal] inject.js has loaded");

// Prepare the CSS to inject
var css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("href", chrome.extension.getURL("theme.css"));
css.setAttribute("id", "comfy_css_injected");

// When the page finished loading
document.addEventListener("DOMContentLoaded", function() {
	// Inject the CSS
		// Say that the CSS is being injected
		console.log("[Comfy for Tidal] Injecting CSS from: " + chrome.extension.getURL("theme.css"))

		// Inject the CSS
		document.head.appendChild(css);

		// Say that the CSS is injected
		console.log("[Comfy for Tidal] CSS injected");

	// Edit the meta theme-color
	document.querySelector('meta[name="theme-color"]').setAttribute('content','#1E2233');
});

// When an element with the class "ReactModal__Overlay" is added to the page
document.addEventListener("DOMNodeInserted", (event) => {
	// If the element is a div and contains the class "ReactModal__Overlay", remove the border of the keyboard shortcuts overlay
	if(event.target.nodeName == "DIV"){
		if(event.target.classList.contains("ReactModal__Overlay")) document.getElementsByClassName("modalBody--3fLgO")[0].style.border = 'none'
	}
});

// Prepare some variables
let faded0_edited = false;
let faded1_edited = false;
let carousel_edited = false;
let header_edited = false;
let search_edited = false;
let td_edited = false;

// Edit some skeleton elements (when the page is loading the elements)
setInterval(() => {
	// Edit some major elements of the page
	if(!faded0_edited && document.getElementsByClassName("faded")[0]){
		// Background color: sidebar
		document.getElementsByClassName("faded")[0].parentElement.style.backgroundColor = '#1E2233'
		faded0_edited = true;
	}
	if(!faded1_edited && document.getElementsByClassName("faded")[1]){
		// Background color: main content
		document.getElementsByClassName("faded")[1].style.backgroundColor = '#23283D'
		faded1_edited = true;
	}

	// Edit the carousel (where playlists are shown)
	if(!carousel_edited && document.getElementsByClassName("carousel")[0]) Array.from(document.getElementsByClassName("carousel")[0].childNodes).forEach(element => {
		element.style.backgroundColor = '#333745'
		carousel_edited = true;
	})

	// Edit all headers
	if(!header_edited && document.getElementsByClassName("header")[0]) Array.from(document.getElementsByClassName("header")).forEach(element => {
		element.style.backgroundColor = '#333745'
		header_edited = true;
	})

	// Edit the search bar
	if(!search_edited && document.getElementsByClassName("search")[0]) Array.from(document.getElementsByClassName("search")).forEach(element => {
		element.style.backgroundColor = '#191F2E'
		search_edited = true;
	})

	// Edit the table of songs (hidden by Tidal on small screens)
	if(!td_edited && document.querySelectorAll("td")[0]) Array.from(document.querySelectorAll("td")).forEach(element => {
		element.style.color = '#333745'
		td_edited = true;
	})
}, 1)

/* Old method to inject CSS
	let css_injected = false;
	// Do a loop and try to inject the CSS 100 ms
	var injectCSS_interval = setInterval(() => {
		try {
			// Say that the CSS is being injected
			console.log("[Comfy for Tidal] Injecting CSS from: " + chrome.extension.getURL("theme.css"))

			// Inject the CSS
			document.head.appendChild(css);

			// If the CSS is injected, say that it is and stop the loop
			if(document.head && document.getElementById("comfy_css_injected")){
				css_injected = true;
				clearInterval(injectCSS_interval);
			}
		} catch (e) {}
	}, 100)
*/
