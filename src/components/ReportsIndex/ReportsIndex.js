import React, {useEffect, useState} from "react";
import Search from "../Search/Search";
import ReportList from "../ReportLIst/ReportList";
import './reportIndex.scss'
import Icon from "../Icon/Icon";

const REPORTS_INDEX = 'reports-index';

/**
 * component for all report panel
 * @param closeReportsCB action function to close the panel
 */

export default function ReportIndex({closeReportsCB}) {
	let [dataLoad, setDataLoad] = useState(false);
	let [filterData, setFilterData] = useState([]);
	let [isSortOrderDescending, setIsSortOrderDescending] = useState(false);
	let [resetSearch, setResetSearch] = useState(1);
	
	useEffect(fetchData, []);
	
	
	//fetching data on load and on refresh button
	function fetchData() {
		if (dataLoad) setDataLoad(false);
		
		fetch('mock/sidebar.json')
			.then(response => response.json())
			.then(data => {
				// simulate network fetching delay
				setTimeout(() => setDataLoad(data), 4000);
			})
			.catch(err => console.log(err));
	}
	
	// setting data to show after fetching done
	useEffect(() => {
		if (dataLoad) setFilterData(dataLoad);
	}, [dataLoad])
	
	// update what to show if search input change
	function filterSearch(text) {
		if (text === '') return setFilterData(dataLoad);
		const filterDataFromInput = dataLoad.filter(item => item.name.indexOf(text) > -1)
		
		setFilterData(filterDataFromInput);
	}
	
	//close the panel when close button clicked
	function closeReports() {
		//resetting search after panel close
		setTimeout(()=> {
			setResetSearch(resetSearch + 1);
			filterSearch('');
		},1100)
		closeReportsCB();
	}
	
	if (dataLoad) {
		return (
			<article className={`${REPORTS_INDEX}__container`}>
				<div className={`${REPORTS_INDEX}__header`}>
					<div className={`${REPORTS_INDEX}__title`}>
						<h2 className={`${REPORTS_INDEX}__title--h`}>Reports {dataLoad.length}</h2>
						<button className={`${REPORTS_INDEX}__icon`} onClick={fetchData}><Icon iconName={'REFRESH'}/></button>
						<button onClick={closeReports} className={`${REPORTS_INDEX}__icon`}><Icon iconName={'CLOSE'}/></button>
					</div>
					<Search key={resetSearch} containerClass={`${REPORTS_INDEX}__search`} cbInputText={filterSearch}
									cbSortOrder={() => setIsSortOrderDescending(!isSortOrderDescending)}/>
				</div>
				<ReportList isSortOrderDescending={isSortOrderDescending} reports={filterData}/>
			</article>
		);
	} else {
		return <div className={`${REPORTS_INDEX}__loading`}><span>Loading...</span></div>
	}
}