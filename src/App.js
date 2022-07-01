import React from 'react';
import Header from './componens/Header';
import Sidebar from './componens/Sidebar';
import Profile from './componens/Profile';
import './index.css';

const App = () => {
	return (
		<div className="container">
			<Header />
			<Sidebar />
			<Profile />
		</div>
	);
};

export default App;