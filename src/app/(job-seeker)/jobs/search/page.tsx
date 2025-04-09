"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import useToggle from "@/utils/hooks/useToggle";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function JobSeekerSearch() {
    const [isMore, toggleInput] = useToggle(false);

    // Validation schema
    const validationSchema = Yup.object().shape({
        jobTitle: Yup.string().required('Job title is required'),
        location: Yup.string().required('Location is required'),
        experience: Yup.string().required('Experience is required'),
        salary: isMore ? Yup.string() : Yup.string().notRequired(),
        department: isMore ? Yup.string() : Yup.string().notRequired(),
        industry: isMore ? Yup.string() : Yup.string().notRequired(),
    });

    // Initial values
    const initialValues = {
        jobTitle: '',
        location: '',
        experience: '',
        salary: '',
        department: '',
        industry: ''
    };

    // Submit handler
    const handleSubmit = (values: typeof initialValues) => {
        console.log('Form submitted:', values);
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <>
            <h2 className="font-bold text-xl font-sans ml-36 mt-4">Search Your Dream Job</h2>
            <div className="w-10/12 bg-white shadow-lg rounded-md p-5 my-9 ml-36">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col items-center">
                            {/* Always visible fields */}
                            <div className="w-1/2 mb-4">
                                <Field
                                    name="jobTitle"
                                    as={Input}
                                    label="Job Title"
                                    className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                    placeholder="Enter a Job Title/Skill"
                                    error={touched.jobTitle && errors.jobTitle}
                                />
                                <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="w-1/2 mb-4">
                                <Field
                                    name="location"
                                    as={Input}
                                    label="Location"
                                    className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                    placeholder="Enter a Location"
                                    error={touched.location && errors.location}
                                />
                                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="w-1/2 mb-4">
                                <Field
                                    name="experience"
                                    as={Input}
                                    label="Experience"
                                    className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                    placeholder="Enter Experience"
                                    error={touched.experience && errors.experience}
                                />
                                <ErrorMessage name="experience" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Conditionally visible fields */}
                            {isMore && (
                                <>
                                    <div className="w-1/2 mb-4">
                                        <Field
                                            name="salary"
                                            as={Input}
                                            label="Salary"
                                            className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                            placeholder="Enter Salary (Lakh/Year)"
                                            error={touched.salary && errors.salary}
                                        />
                                        <ErrorMessage name="salary" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="w-1/2 mb-4">
                                        <Field
                                            name="department"
                                            as={Input}
                                            label="Department"
                                            className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                            placeholder="Enter Department"
                                            error={touched.department && errors.department}
                                        />
                                        <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="w-1/2 mb-4">
                                        <Field
                                            name="industry"
                                            as={Input}
                                            label="Industry"
                                            className="w-full ps-4 py-2 border border-[#e2e2e2] focus:border-solid focus:border-[#145af3] focus:outline-none"
                                            placeholder="Enter Industry"
                                            error={touched.industry && errors.industry}
                                        />
                                        <ErrorMessage name="industry" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </>
                            )}

                            {/* Toggle button */}
                            <div className="w-1/2 text-right">
                                <p
                                    className="cursor-pointer text-[#145af3] flex items-end justify-end"
                                    onClick={() => toggleInput()}
                                >
                                    {isMore ? 'Show Less' : 'Show More'}
                                </p>
                            </div>

                            <div className="w-1/2 text-start mt-4">
                                <Button
                                    type="submit"
                                    className="searchBtn text-sm bg-[#145af3] text-white hover:bg-[#2278f9] hover:transition-all hover:duration-200"
                                >
                                    Search Job
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}