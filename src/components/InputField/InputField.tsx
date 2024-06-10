import { Field } from 'formik';
import { useState } from 'react';

import './styles.css';

type InputFieldProps = {
	inputType: string;
	placeholder: string;
	name: string;
	onFocus?: VoidFunction;
	isFieldValid?: boolean;
	isSubmitClicked: boolean;
	validationError?: string;
	touched?: boolean;
	isHiddable: boolean;
};

const InputField = ({
	inputType,
	placeholder,
	name,
	onFocus,
	isFieldValid,
	isSubmitClicked,
	validationError,
	touched,
	isHiddable,
}: InputFieldProps) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const getInputStyles = () => {
		if (isSubmitClicked) {
			return `input ${isFieldValid ? 'valid' : 'invalid'}`;
		}
		return `input ${isFieldValid ? 'valid' : ''}`;
	};

	const toggleVisibility = () => {
		setIsVisible((visibility) => !visibility);
	};

	return (
		<div>
			<div className="fieldBlock">
				<Field
					className={getInputStyles()}
					name={name}
					type={isVisible ? 'text' : inputType}
					placeholder={placeholder}
					onFocus={onFocus}
				/>
				{isHiddable && (
					<img
						className="visibilityToggle"
						src={isVisible ? './show.svg' : './hide.svg'}
						onClick={toggleVisibility}
					/>
				)}
			</div>
			{validationError && touched && isSubmitClicked ? (
				<div className="validationError">{validationError}</div>
			) : null}
		</div>
	);
};

export { InputField };
