"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import useToggle from "@/utils/hooks/useToggle";
import { ChevronDownIcon, ChevronUpIcon, ListBulletIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
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
           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
      Find Your <span className="text-blue-600">Dream Job</span>
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300">
      Discover opportunities that match your skills and aspirations
    </p>
  </div>

  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Job Title or Keywords
                </label>
                <Field
                  name="jobTitle"
                  as={Input}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="e.g. Software Engineer, UX Designer"
                  error={touched.jobTitle && errors.jobTitle}
                />
                <ErrorMessage name="jobTitle" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <Field
                  name="location"
                  as={Input}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="City or Remote"
                  error={touched.location && errors.location}
                />
                <ErrorMessage name="location" component="div" className="mt-1 text-sm text-red-600" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Experience Level
                </label>
                <Field
                  name="experience"
                  as="select"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                  error={touched.experience && errors.experience}
                >
                  <option value="">Select experience</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5+ years)</option>
                  <option value="executive">Executive</option>
                </Field>
                <ErrorMessage name="experience" component="div" className="mt-1 text-sm text-red-600" />
              </div>

              {/* Always visible but compact */}
              <div className="flex justify-end items-center pt-2">
                <button
                  type="button"
                  onClick={() => toggleInput()}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {isMore ? (
                    <>
                      <ChevronUpIcon className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDownIcon className="h-4 w-4" />
                      Advanced Filters
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Advanced Fields - Animated */}
            <div className={`md:col-span-2 space-y-4 overflow-hidden transition-all duration-300 ${isMore ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Salary Range
                  </label>
                  <Field
                    name="salary"
                    as="select"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                    error={touched.salary && errors.salary}
                  >
                    <option value="">Any salary</option>
                    <option value="0-5">0-5 LPA</option>
                    <option value="5-10">5-10 LPA</option>
                    <option value="10-20">10-20 LPA</option>
                    <option value="20+">20+ LPA</option>
                  </Field>
                  <ErrorMessage name="salary" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Department
                  </label>
                  <Field
                    name="department"
                    as={Input}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="e.g. Engineering, Marketing"
                    error={touched.department && errors.department}
                  />
                  <ErrorMessage name="department" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Industry
                  </label>
                  <Field
                    name="industry"
                    as={Input}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="e.g. Tech, Healthcare"
                    error={touched.industry && errors.industry}
                  />
                  <ErrorMessage name="industry" component="div" className="mt-1 text-sm text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <button
              type="button"
            //   onClick={() => router.push('/jobs')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <ListBulletIcon className="h-4 w-4" />
              Browse All Jobs
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              Search Jobs
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
</div>
        </>
    )
}