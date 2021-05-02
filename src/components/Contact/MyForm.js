import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function MyForm() {
	const initialValues = {
		fname: "",
		phone: "",
		email: "",
		message: "",
	};

	const onSubmit = (values) => {
		console.log("Form Values", values);
	};
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const validationSchema = Yup.object({
		fname: Yup.string().required("Required"),
		phone: Yup.string()
			.matches(phoneRegExp, "Not a Valid Phone Number")
			.required("Required!"),
		email: Yup.string().email("Invalid email format").required("Required"),
		message: Yup.string().required("Ask us Anything! Don't be shy!"),
	});

	return (
		<div className='my-form'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
				<Form>
					<div className='form-control'>
						<Field
							type='text'
							name='fname'
							className='fname'
							placeholder='First Name'
						/>
						{/* 						<ErrorMessage name='fname'>
							{(error) => (
								<>
									<div className='hover-msg'>{error}</div>
								</>
							)}
						</ErrorMessage> */}
					</div>
					<div className='form-control'>
						{/* 	This is Phone Number Field */}
						<Field
							type='text'
							name='phone'
							className='phone'
							placeholder='Phone Number'
						/>
					</div>

					<div className='form-control'>
						<Field
							type='email'
							name='email'
							className='email'
							placeholder='Email'></Field>
					</div>

					<div className='form-control message-control'>
						<Field
							as='textarea'
							name='message'
							className='message'
							placeholder='Message'
						/>
					</div>
					<div className='form-control'>
						<button className='sub-btn' type='submit'>
							Send
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default MyForm;
