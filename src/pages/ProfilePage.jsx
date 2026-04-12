import React, { useState, useEffect } from 'react';
import { getProfileApi, updateProfileApi } from '../lib/api';

const ProfilePage = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [bio, setBio] = useState('');
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let mounted = true;
        const loadProfile = async () => {
            try {
                const data = await getProfileApi();
                if (mounted && data) {
                    if (data.name !== undefined) setName(data.name);
                    if (data.email !== undefined) setEmail(data.email);
                    if (data.bio !== undefined) setBio(data.bio);
                    if (data.skills !== undefined) setSkills(data.skills);
                }
            } catch (err) {
                console.warn("Backend fetch failed, loading local fallback.", err);
                if (mounted) {
                    const localBio = localStorage.getItem('profile_bio');
                    const localSkills = localStorage.getItem('profile_skills');
                    if (localBio !== null) setBio(localBio);
                    if (localSkills !== null) setSkills(JSON.parse(localSkills));
                }
            } finally {
                if (mounted) setIsLoading(false);
            }
        };
        loadProfile();
        return () => { mounted = false; };
    }, []);

    const handleSave = async () => {
        if (!isEditing) {
            setIsEditing(true);
            return;
        }
        
        setError('');
        try {
            await updateProfileApi({ name, email, bio, skills });
        } catch (err) {
            console.warn("Backend save failed, caching locally as fallback.", err);
        } finally {
            localStorage.setItem('profile_bio', bio);
            localStorage.setItem('profile_skills', JSON.stringify(skills));
            setIsEditing(false);
        }
    };

    const handleAddSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(s => s !== skillToRemove));
    };

    return (
        <div className="w-full flex flex-col items-center pt-8 animate-fade-in-up">
            {/* Header Outside Card */}
            <div className="w-full max-w-3xl flex flex-col items-center mb-12 relative">
                <h1 className="text-3xl font-bold text-[#0F2B5B] tracking-tight mb-6">Profile</h1>
                <div className="w-full h-[1px] bg-slate-200"></div>
                <button 
                    onClick={handleSave}
                    className="absolute right-0 top-0 px-4 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
            </div>
            {error && (
                <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-sm text-red-600 text-center max-w-2xl w-full">
                    {error}
                </div>
            )}

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
                        <span className="text-slate-700 font-medium min-h-[20px]">{name || 'Guest'}</span>
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm">Email</span>
                        <span className="text-blue-600 font-medium min-h-[20px]">{email || 'Not provided'}</span>
                    </div>

                    <div className="h-[1px] w-full bg-slate-50 my-4"></div>

                    {/* Bio */}
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm pt-0.5">Bio</span>
                        <div className="min-h-[80px]">
                            {isEditing ? (
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    className="w-full text-sm p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 min-h-[80px]"
                                    placeholder="Write a short bio..."
                                />
                            ) : (
                                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                                    {bio || <span className="text-slate-400 italic">No bio added yet.</span>}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-slate-50 my-4"></div>

                    {/* Skills */}
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-[#0F2B5B] font-bold text-sm pt-0.5">Skills</span>
                        <div className="min-h-[100px] flex flex-col gap-3">
                            {isEditing && (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={newSkill}
                                        onChange={(e) => setNewSkill(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                                        placeholder="Add a skill"
                                        className="flex-1 text-sm p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    />
                                    <button 
                                        onClick={handleAddSkill}
                                        className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100"
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                            
                            <ul className="space-y-2">
                                {skills.length === 0 && !isEditing ? (
                                    <li className="text-slate-400 text-sm italic">No skills added yet.</li>
                                ) : (
                                    skills.map((skill, index) => (
                                        <li key={index} className="flex items-center justify-between text-slate-600 text-sm border-b border-slate-50 pb-1">
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5"></div>
                                                {skill}
                                            </div>
                                            {isEditing && (
                                                <button 
                                                    onClick={() => handleRemoveSkill(skill)}
                                                    className="text-red-400 hover:text-red-600 text-xs font-semibold px-2"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
