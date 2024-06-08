import React from 'react';
import './App.css';
import {
	InputField,
	SubmitButton,
	ValidationHints,
} from './components/components';

function App() {
	return (
		<div className="App">
			<InputField inputType="text" placeholder="Email" />
			<InputField
				inputType="password"
				placeholder="Create your password"
			/>
			<ValidationHints />
			<SubmitButton name="Sign up" />
		</div>
	);
}

export default App;
