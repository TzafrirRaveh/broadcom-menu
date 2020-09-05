import React from "react";
import Icon from "../Icon/Icon";

/**
 * search component to help the user insert his input
 * @param cbSortOrder - call back function to change sort direction
 * @param cbInputText - call back function to active user input change
 * @param containerClass - general container class to use across site
 */

export default function Search({cbSortOrder, cbInputText, containerClass}) {
	function inputChange(e) {
		cbInputText(e.target.value);
	}
	
	return (<div className={containerClass}>
		<input className={`${containerClass}--input`} placeholder='search reports' onChange={inputChange}/>
		<button className={`${containerClass}--sort`} onClick={cbSortOrder}>
			<Icon iconName={'UP_DOWN'}/>
		</button>
	</div>)
}