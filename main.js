const serifs = [
	"Iowan Old Style",
	"Apple Garamond",
	"Baskerville",
	"Times New Roman",
	"Droid Serif",
	"Times",
	"Source Serif Pro",
	"Apple Color Emoji",
	"Segoe UI Emoji",
	"Segoe UI Symbol"
];

const sansSerifs = [
	"-apple-system",
	"BlinkMacSystemFont",
	"Avenir Next",
	"Avenir",
	"Segoe UI",
	"Helvetica Neue",
	"Adwaita Sans",
	"Cantarell",
	"Ubuntu",
	"Roboto",
	"Noto",
	"Helvetica",
	"Arial"
];

const monospaces = [
	"Menlo",
	"Consolas",
	"Monaco",
	"Adwaita Mono",
	"Liberation Mono",
	"Lucida Console"
];

function createFallback(fonts, fallback) {
	let text = "";

	for (let i = 0; i < fonts.length; i++) {
		text += "    <alias>\n" +
			"        <family>" + fonts[i] + "</family>\n" +
			"        <prefer><family>" + fallback + "</family></prefer>\n" +
			"    </alias>";

		if (i < fonts.length - 1) {
			text += "\n";
		}
	}

	return text;
}

const text = createFallback(serifs, "Roboto Serif") + "\n" +
	     createFallback(sansSerifs, "Inter") + "\n" +
	     createFallback(monospaces, "Roboto Mono");

console.log(text);
