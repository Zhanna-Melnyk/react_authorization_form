import React from 'react';

import './styles.css';

type SubmitButtonProps = {
	name: string;
	onClick: VoidFunction;
};

const SubmitButton = ({ name, onClick }: SubmitButtonProps) => {
	return (
		<button className="submitBtn" type="submit" onClick={onClick}>
			{name}
		</button>
	);
};

export { SubmitButton };
