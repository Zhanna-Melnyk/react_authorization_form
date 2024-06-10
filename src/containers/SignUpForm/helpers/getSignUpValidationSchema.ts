import { Dispatch, SetStateAction } from 'react';
import * as Yup from 'yup';

import { INITIAL_PASSWORD_HINT_STATUSES } from '../../../constants/constants';
import { PasswordValidationHintStatuses } from '../../../types/types';

type GetSignUpValidationSchemaProps = {
	setValidationHintsStatus: Dispatch<
		SetStateAction<PasswordValidationHintStatuses>
	>;
};

const getSignUpValidationSchema = ({
	setValidationHintsStatus,
}: GetSignUpValidationSchemaProps) => {
	return Yup.object().shape({
		email: Yup.string().email('Email is not valid').required('Email is required field'),
		password: Yup.string()
			.test('characterAmount', (value) => {
				if (value && value.length >= 8 && !/\s/.test(value)) {
					setValidationHintsStatus((status) => {
						return { ...status, characterAmount: true };
					});
					return true;
				}
				setValidationHintsStatus((status) => {
					return { ...status, characterAmount: false };
				});
				return false;
			})
			.test('uppercase', (value) => {
				console.log(value);
				if (value && /[A-Z]/.test(value) && /[a-z]/.test(value)) {
					setValidationHintsStatus((status) => {
						return { ...status, upperAndLowercase: true };
					});
					return true;
				}
				setValidationHintsStatus((status) => {
					return { ...status, upperAndLowercase: false };
				});
				return false;
			})
			.test('digit', (value) => {
				if (value && /\d/.test(value)) {
					setValidationHintsStatus((status) => {
						return { ...status, digitAmount: true };
					});
					return true;
				}
				setValidationHintsStatus((status) => {
					return { ...status, digitAmount: false };
				});
				return false;
			})
			.when({
				is: (value: string) => value === '',
				then: (schema) => {
					return schema.required('Pass is required');
				},
				otherwise: (schema) => {
					setValidationHintsStatus(INITIAL_PASSWORD_HINT_STATUSES);
					return schema.required('Pass is required');
				},
			}),
	});
};

export { getSignUpValidationSchema };
