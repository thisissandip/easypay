import React from "react";
import { Formik, Form, Field } from "formik";

function MyForm() {
	const initialValues = {
		fname: "",
		lname: "",
		email: "",
		message: "",
	};

	const onSubmit = (values) => {
		console.log("Form Values", values);
	};

	return (
		<div className='my-form'>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					<div className='form-control'>
						<Field
							type='text'
							name='fname'
							className='fname'
							placeholder='First Name'
						/>
					</div>
					<div className='form-control'>
						{/* 	This is Phone Number Field */}
						<input
							type='text'
							name='lname'
							className='lname'
							placeholder='Phone Number'
						/>
					</div>

					<div className='form-control'>
						<Field
							type='email'
							name='email'
							className='email'
							placeholder='Email'
						/>
					</div>

					<div className='form-control'>
						<Field
							as='textarea'
							name='message'
							className='message'
							placeholder='Message'
						/>
					</div>
					<div className='form-control'>
						{" "}
						<button className='sub-btn' type='submit'>
							{" "}
							Send
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default MyForm;
