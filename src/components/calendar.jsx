import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = () => {
	const [state, setState] = useState(false);

	useEffect(() => {
		if (!state) {
			setState(true);
		}
	}, [state]);

	if (!state) {
		return null;
	}

	return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
};

export default Calendar;
