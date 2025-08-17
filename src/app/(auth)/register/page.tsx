"use client";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Loader2 } from "lucide-react";
import Image from "next/image";
import Select from "@/components/ui/select";
import { LinkButton } from "@/components/CommonComponents";

export default function Register() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
    role: Yup.string().required("Please select a role"),
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex-col items-center justify-center p-12">
        <Image src="/file.png" alt="Logo" width={80} height={80} className="mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-center">
          Join Our Community 🚀
        </h1>
        <p className="text-lg text-center text-gray-200 max-w-md">
          Register as a <span className="font-semibold">Job Seeker</span>,{" "}
          <span className="font-semibold">Employer</span>, or{" "}
          <span className="font-semibold">Admin</span> and manage everything from
          one place with ease.
        </p>
        <Image
          src="/register-illustration.png" // add any nice SVG/PNG in public folder
          alt="Illustration"
          width={400}
          height={300}
          className="mt-10"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Sign up and explore new opportunities
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, isSubmitting }) => (
              <Form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-gray-700">Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                      <Input
                        className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-transparent"
                        name="name"
                        placeholder="Enter your full name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {/* <ErrorMessage name="name" component="span" className="text-red-500 text-sm" /> */}
                  </div>

                  <div>
                    <Label className="text-gray-700">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                      <Input
                        className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-transparent"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {/* <ErrorMessage name="email" component="span" className="text-red-500 text-sm" /> */}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-gray-700">Password</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                      <Input
                        className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-transparent"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {/* <ErrorMessage name="password" component="span" className="text-red-500 text-sm" /> */}
                  </div>

                  <div>
                    <Label className="text-gray-700">Confirm Password</Label>
                    <div className="relative mt-2">
                      <Lock className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                      <Input
                        className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-transparent"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {/* <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="text-red-500 text-sm"
                    /> */}
                  </div>
                </div>

                {/* Role */}
                <div>
                  {/* <Label className="text-gray-700">Select Role</Label> */}
                  <Select
                  label="Select Role"
                    name="role"
                    onChange={handleChange}
                    required
                    onBlur={handleBlur}
                    className="mt-2 w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-transparent"
                  >
                    <option value="">-- Select Role --</option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                    <option value="admin">Admin</option>
                  </Select>
                  {/* <ErrorMessage name="role" component="span" className="text-red-500 text-sm" /> */}
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Creating
                      account...
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>

                {/* Redirect */}
                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <LinkButton href="/login" className="text-blue-700 font-semibold hover:underline">
                    Sign in
                  </LinkButton>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
