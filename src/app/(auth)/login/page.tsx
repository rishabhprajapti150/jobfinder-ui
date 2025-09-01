"use client"
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import Image from "next/image";
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react'
import * as Yup from 'yup';
import { useState } from "react";
import { LinkButton } from "@/components/CommonComponents";
import { useRouter } from "next/navigation";

export default function Login() {
    const [role, setRole] = useState("employer"); // default role
    const router=useRouter()
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (
        <div className="min-h-screen flex bg-white">
            
            {/* Left Side Illustration */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-12 flex-col rounded-r-3xl shadow-xl">
                <div className="flex items-center space-x-3 mb-12">
                    <Image src="/file.png" width={55} height={55} alt="Logo" className="rounded-lg shadow-md" />
                    <span className="text-2xl font-bold tracking-wide">JobPortal</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <Image src="/login-illustration.jpg" alt="Illustration" width={420} height={320} className="drop-shadow-2xl rounded-2xl" />
                    <h1 className="text-4xl font-bold mt-10 text-center leading-snug">
                       Find Your Dream Job. Hire the Best Talent 🚀
                    </h1>
                    <p className="mt-4 text-blue-100 text-center text-lg max-w-md">
                        Join thousands of job seekers and employers who trust JobPortal to build their careers and teams.
                    </p>
                </div>

                <div className="mt-10 text-sm text-blue-200 text-center">
                    © {new Date().getFullYear()} JobPortal. All rights reserved.
                </div>
            </div>

            {/* Right Side (Login Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                <Card className="w-[90%] max-w-md shadow-xl shadow-blue-100 rounded-2xl p-8 border border-gray-200">
                    <CardHeader className="text-center space-y-1">
                        <CardTitle className="text-gray-900 text-3xl font-bold">
                            Welcome Back 👋
                        </CardTitle>
                        <Label className="text-gray-500 text-sm">
                            Please login to continue
                        </Label>
                    </CardHeader>

                    <CardContent>
                        <Formik
                            initialValues={{ password: '', email: '' }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                console.log({ ...values, role });
                               // alert()
                                // redirect based on role here:
                                if(role === "employer") {
                                    // router.push("home")
                                    router.replace("/home")
                                }
                            }}
                        >
                            {({ handleChange, handleBlur, isSubmitting }) => (
                                <Form className="space-y-6">
                                    
                                   

                                    {/* Email */}
                                    <div>
                                        <Label className="text-gray-700">Email</Label>
                                        <div className="relative mt-2">
                                            <Mail className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                                            <Input
                                                className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition focus:ring-transparent"
                                                required
                                                name="email"
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {/* <ErrorMessage name="email" component="span" className="text-red-500 text-sm" /> */}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <Label className="text-gray-700">Password</Label>
                                        <div className="relative mt-2">
                                            <Lock className="absolute w-5 h-5 top-3 left-3 text-gray-400" />
                                            <Input
                                                className="pl-12 py-3 border border-gray-300 rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition focus:ring-transparent"
                                                required
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {/* <ErrorMessage name="password" component="span" className="text-red-500 text-sm" /> */}
                                        <div className="text-right mt-2">
                                            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline font-medium">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Signing in...
                                                </>
                                            ) : (
                                                <>
                                                    Sign in
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {/* Signup */}
                                    {role !== "admin" && (
                                        <p className="text-center text-sm text-gray-600 mt-4">
                                            Don’t have an account?{" "}
                                            <LinkButton href="/register" className="text-blue-700 font-semibold hover:underline">
                                                Sign up
                                            </LinkButton>
                                        </p>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
