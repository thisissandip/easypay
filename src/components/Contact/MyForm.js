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

	const validationSchema = Yup.object({
		fname: Yup.string().required("Required"),
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
					</div>
					<div className='form-control'>
						{/* 	This is Phone Number Field */}
						<input
							type='text'
							name='phone'
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
