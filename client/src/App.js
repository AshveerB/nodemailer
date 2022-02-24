import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleClick = (e) => {
		e.preventDefault();

		if (e.target.id === 'name') {
			setName(e.target.value);
		} else {
			setEmail(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataToSubmit = {
			name,
			email,
		};

		axios.post('api/sendMail', dataToSubmit);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<form onSubmit={handleSubmit}>
					<input
						id='name'
						placeholder='Name'
						value={name}
						onChange={handleClick}
					/>
					<input
						id='email'
						placeholder='Email'
						value={email}
						onChange={handleClick}
					/>
					<button onClick={handleSubmit}>Send Email</button>
				</form>
			</header>
		</div>
	);
}

export default App;
