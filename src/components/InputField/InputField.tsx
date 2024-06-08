import React from 'react';

type InputFieldProps = {
	inputType: string;
	placeholder: string;
};

const InputField = ({ inputType, placeholder }: InputFieldProps) => {
	return (
		<div>
			<input type={inputType} placeholder={placeholder} />
		</div>
	);
};

export { InputField };
