import React, { useState, useEffect } from 'react';
import { fetchProfileData } from '../services/learningData';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProfile = async () => {
            const data = await fetchProfileData();
            setProfile(data);
            setLoading(false);
        };
        loadProfile();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F3F6FA]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0F2B5B]"></div>
            </div>
        );
    }

    if (!profile) return null;

    return (
        <div className="w-full flex flex-col items-center pt-8 animate-fade-in-up">

            {/* Header Outside Card */}
            <div className="w-full max-w-3xl flex flex-col items-center mb-12">
                <h1 className="text-3xl font-bold text-[#0F2B5B] tracking-tight mb-6">Profile</h1>
                <div className="w-full h-[1px] bg-slate-200"></div>
            </div>

            {/* Avatar - Positioned to overlook content */}
            <div className="relative z-10 -mb-14">
                <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm">
                    {/* Simplified User Silhouette Icon */}
                    <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-sm border border-slate-100 pt-16 pb-8 px-10 relative">

                {/* Upload Button */}
                <div className="flex justify-center mb-8">
                    <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-md hover:bg-slate-200 transition-colors">
                        Upload New Photo
                    </button>
                </div>

                {/* Info Grid */}
                <div className="space-y-6">
                    {/* Name */}
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm">Name</span>
                        <span className="text-slate-700 font-medium">{profile.name}</span>
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm">Email</span>
                        <span className="text-blue-600 font-medium">{profile.email}</span>
                    </div>

                    <div className="h-[1px] w-full bg-slate-50 my-4"></div>

                    {/* Bio */}
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm pt-0.5">Bio</span>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>

                    <div className="h-[1px] w-full bg-slate-50 my-4"></div>

                    {/* Skills */}
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm pt-0.5">Skills</span>
                        <ul className="space-y-2">
                            {profile.skills.map((skill, index) => (
                                <li key={index} className="flex items-center text-slate-600 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfilePage;
