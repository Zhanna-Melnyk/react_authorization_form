import { PasswordValidationHintName } from '../types/types';

const PasswordValidationHint: Record<PasswordValidationHintName, string> = {
	characterAmount: '8 characters or more (no spaces)',
	upperAndLowercase: 'Uppercase or lowercase letters',
	digitAmount: 'At least one digit',
};

export { PasswordValidationHint };
