import React, {useState} from 'react';
import './style/index.scss';
import './style/App.scss';
import ReportIndex from "./components/ReportsIndex/ReportsIndex";
import Icon from "./components/Icon/Icon";

const REPORTS = 'reports';

function App() {
	let [isReportsOpen, setIsReportsOpen] = useState(false);
	
	return (
		<div>
			<button className={`${REPORTS}__close--btn`} onClick={() => setIsReportsOpen(true)}><Icon iconName={'MENU'}/>
			</button>
			<div className={isReportsOpen ? `${REPORTS}--open` : `${REPORTS}--close`}>
				<ReportIndex closeReportsCB={() => setIsReportsOpen(false)}/>
			</div>
		</div>
	);
}

export default App;
