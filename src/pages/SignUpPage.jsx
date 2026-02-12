import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'email' ? 'email' : e.target.type === 'password' ? 'password' : 'name']: e.target.value });
        // Correcting the logic for specific field targeting if needed, but for simplicity:
        // Actually, let's use name attribute
    };

    // Better handler
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock signup logic
        console.log('Signup attempt:', formData);
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Create an Account
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                    Join us and start your learning journey today
                </p>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input
                            label="Full Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="John Doe"
                            required
                        />

                        <Input
                            label="Email address"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="you@example.com"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            placeholder="••••••••"
                            required
                        />

                        <Input
                            label="Confirm Password"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            placeholder="••••••••"
                            required
                        />

                        <div>
                            <Button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 shadow-xl shadow-slate-900/5 hover:shadow-slate-900/10"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-slate-500">
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link to="/login" className="font-medium text-slate-800 hover:text-slate-600">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;
