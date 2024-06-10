import React from 'react';

import { passwordValidationHint } from '../../maps/maps';
import { PasswordValidationHintName } from '../../types/types';

import './styles.css';

type PasswordValidationHintsProps = {
	hintsStatuses: Record<PasswordValidationHintName, boolean | null>;
	isSubmitClicked: boolean;
};

const PasswordValidationHints = ({
	hintsStatuses,
	isSubmitClicked,
}: PasswordValidationHintsProps) => {
	const getHintColor = (hintKey: PasswordValidationHintName) => {
		if (isSubmitClicked) {
			return hintsStatuses[hintKey] ? 'green' : 'red';
		}

		return hintsStatuses[hintKey] ? 'green' : 'black';
	};
	return (
		<div className="hintsBlock">
			{Object.entries(passwordValidationHint).map(([hintKey, hint]) => {
				const hintColor = getHintColor(
					hintKey as PasswordValidationHintName
				);
				return (
					<p style={{ color: hintColor }} className="hint">
						{hint}
					</p>
				);
			})}
		</div>
	);
};

export { PasswordValidationHints };
