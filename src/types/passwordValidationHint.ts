type PasswordValidationHintName =
	| 'characterAmount'
	| 'upperAndLowercase'
	| 'digitAmount';

type PasswordValidationHintStatuses = Record<
	PasswordValidationHintName,
	boolean
>;

export { type PasswordValidationHintName, type PasswordValidationHintStatuses };
