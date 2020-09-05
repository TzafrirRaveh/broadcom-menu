import React from "react";
import Moment from "react-moment";
import './reportList.scss';

const REPORT_LIST = 'report-list';

/**
 * component to show all necessary report list
 * @param reports - all reports json
 * @param isSortOrderDescending - callback to active descending to ascending data
 */

export default function ReportList({reports, isSortOrderDescending}) {
	let sortRevers = isSortOrderDescending ? 'revers-column': '';
	
	// use Moment library to show time as design
	function parseTime(time) {
		// the JSON missing some number in the time stamp so i added it manually. not perfect but its work
		const date = new Date(parseInt(time+'000'));
		
		return (<div className={`${REPORT_LIST}__time`}>
			<Moment date={date} format={'MMM DD'}/>
			<Moment date={date} format={'HH:MM A'}/>
		</div>)
	}
	
	return (
		<ul className={`${REPORT_LIST}__container ${sortRevers}`}>
			{reports.map(report => {
				return (
					<li className={`${REPORT_LIST}__item`} key={report.id}>
						<div>
							<h5 className={`${REPORT_LIST}__name`}>{report.name}</h5>
							<span className={`${REPORT_LIST}__location`}>{report.type}, {report.location}</span>
						</div>
						{parseTime(report.updated)}
					</li>
				)
			})}
		</ul>
	)
}