import React from "react";
import { Counter } from "./counter.jsx";

var ticks = [100000, 10000, 1000];

export function Home() {
	return (
		<>
			<p>Dude, stop wasting your time looking at this</p>
			<div className="text-center counter-box">
				{ticks.map((tickers, index) => {
					return <Counter key={index} tick={tickers} />;
				})}
			</div>
		</>
	);
}
