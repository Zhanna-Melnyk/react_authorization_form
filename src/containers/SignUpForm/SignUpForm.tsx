import { Form, Formik } from 'formik';
import { useState } from 'react';

import {
	InputField,
	PasswordValidationHints,
	SubmitButton,
} from '../../components/components';
import {
	INITIAL_PASSWORD_HINT_STATUSES,
	INITIAL_SIGN_UP_FORM_VALUES,
} from '../../constants/constants';
import { PasswordValidationHintStatuses } from '../../types/types';
import { getSignUpValidationSchema } from './helpers/helpers';

import './styles.css';

const SignUpForm = () => {
	const [validationHintsStatus, setValidationHintsStatus] =
		useState<PasswordValidationHintStatuses>(
			INITIAL_PASSWORD_HINT_STATUSES
		);
	const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false);

	const onFieldFocus = () => {
		setIsSubmitClicked(false);
	};

	const onClickSignUp = () => {
		setIsSubmitClicked(true);
	};

	const onSubmitSignUp = () => {
		alert('You are signed up');
	};

	return (
		<Formik
			initialValues={INITIAL_SIGN_UP_FORM_VALUES}
			onSubmit={onSubmitSignUp}
			validationSchema={() =>
				getSignUpValidationSchema({ setValidationHintsStatus })
			}
		>
			{({ errors, touched }) => (
				<Form className="formContainer">
					<h2 className="title">Sign up</h2>
					<div className="formBlock">
						<InputField
							inputType="text"
							placeholder="Email"
							name="email"
							onFocus={onFieldFocus}
							isFieldValid={!errors.email && touched.email}
							isSubmitClicked={isSubmitClicked}
                            validationError={errors.email}
                            touched={touched.email}
                            isHiddable={false}
						/>
						<InputField
							inputType="password"
							placeholder="Create your password"
							name="password"
							onFocus={onFieldFocus}
							isFieldValid={!errors.password && touched.password}
							isSubmitClicked={isSubmitClicked}
                            isHiddable={true}
						/>
						<PasswordValidationHints
							hintsStatuses={validationHintsStatus}
							isSubmitClicked={isSubmitClicked}
						/>
					</div>
					<SubmitButton name="Sign up" onClick={onClickSignUp} />
				</Form>
			)}
		</Formik>
	);
};

export { SignUpForm };
