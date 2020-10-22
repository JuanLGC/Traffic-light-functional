import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTimer(timer => timer + 1);
		}, props.tick);
	}, []);

	timer == 10 ? setTimer(0) : timer;

	return (
		<div className="box-timer">
			<p>{timer}</p>
		</div>
	);
}

Counter.propTypes = {
	tick: PropTypes.number
};
