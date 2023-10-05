import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Control from '../../Assets/img/Control.png';
import Logo from '../../Assets/img/Logo.png';
import Chart_fill from '../../Assets/img/Chart_fill.png';
import Chat from '../../Assets/img/Chat.png';
import User from '../../Assets/img/User.png';
import Calendar from '../../Assets/img/Calendar.png';
import Search from '../../Assets/img/Search.png';
import Chart from '../../Assets/img/Chart.png';
import Folder from '../../Assets/img/Folder.png';
import Logout from '../../Assets/img/Logout.png';
import Dashboard from '../Views/Dashboard';
import SideBar from '../Layout/SideBar'


const Layout = () => {
	const [open, setOpen] = useState(true);
	const navigate = useNavigate();

	const handleLogout = () => {

		localStorage.removeItem('auth');
		localStorage.removeItem('userData');
		window.location.href = '/login';
	};
	
    /* const token = JSON.parse(localStorage.getItem('userData')).rol_id; */
    const token = 1;


	const Menus = [
		{ title: 'Dashboard', src: `${Chart_fill}`, path: '', token: 0, state: false },
		{ title: 'Notificacion', src: `${Chat}`, path: '/app/notificaciones', token: 1, state: false },
		{ title: 'Evaluacion', src: `${User}`, path: '/app/evaluacionD', token: 2, state: false },
		{ title: 'Evaluacion', src: `${Chart}`, gap: true, path: '/app/evaluacionC', token: 0, state: false },
		{ title: 'Evaluacion', src: `${User}`, path: '/app/evaluacionP', token: 3, state: false },

		{ title: 'Periodos', src: `${Calendar}`, path: '/app/periodos', token: 0, state: false },
		{ title: 'Labores', src: `${Chat}`,path:'/app/labores', token: 0, state: false},

		{ title: 'Schedule', src: `${Calendar}`, path: '/app/schedule', token: 0, state: false },
		{ title: 'Search', src: `${Search}`, path: '/app/search', token: 0, state: false },
		{ title: 'Analytics', src: `${Chart}`, path: '/app/analytics', token: 0, state: false },
		{ title: 'Files', src: `${Folder}`, path: '/app/files', token: 2, state: false },
		{ title: 'Log out', src: `${Logout}`, gap: true, path: handleLogout, token: 0, state: false },
	];

	Menus.map((Menu, index) => {
		if (token === Menu.token || Menu.token === 0) {
			Menu.state = true;
		}else if(token === 2){
			Menu.state = true;
		}
		return Menu;
	});

	return (
		<div className="flex h-100%">
			<SideBar />
		<div className="h-screen flex-1 p-7">
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
		</div>
	);
};

export default Layout;