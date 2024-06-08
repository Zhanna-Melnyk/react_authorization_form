import React from 'react';
import { PasswordValidationHint } from '../../maps/PasswordValidationHint';

type ValidationHintsProps = {};

const ValidationHints = ({}: ValidationHintsProps) => {
	return (
		<div>
			<p>{PasswordValidationHint.characterAmount}</p>
			<p>{PasswordValidationHint.upperAndLowercase}</p>
			<p>{PasswordValidationHint.digitAmount}</p>
		</div>
	);
};

export { ValidationHints };
