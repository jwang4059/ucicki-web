// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require("next-transpile-modules")([
	"@fullcalendar/common",
	"@fullcalendar/react",
	"@fullcalendar/interaction",
	"@fullcalendar/daygrid",
	"@fullcalendar/timegrid",
	"@fullcalendar/list",
	"@fullcalendar/scrollgrid",
]);

module.exports = withTM({
	// any other general next.js settings
});
