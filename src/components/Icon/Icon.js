import React from "react";
import './icon.scss';

/**
 * simple icon component to use svg. can be easily upgrade to show img icon or any other way of icon handling
 * @param iconName - the icon name from the main icon map file
 * @returns {*}
 * @constructor
 */

export default function Icon({iconName}) {
	return (
		<svg className={'icon'}>
			<use xlinkHref={`assets/icons.svg#${iconName}`}></use>
		</svg>
	)
}