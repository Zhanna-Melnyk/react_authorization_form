import React from 'react';

type SubmitButtonProps = {
	name: string;
};

const SubmitButton = ({ name }: SubmitButtonProps) => {
	return (
		<div>
			<button type="submit">{name}</button>
		</div>
	);
};

export { SubmitButton };
