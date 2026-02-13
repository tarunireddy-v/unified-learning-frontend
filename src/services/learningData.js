/**
 * Mock data service for Learning Progress Dashboard.
 * Simulates an API call with a slight delay.
 */

export const fetchLearningData = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        stats: [
            { id: 'hours', label: 'Total Hours', value: '42.5h', change: '▲ 12% vs last week', isPositive: true },
            { id: 'streak', label: 'Streak', value: '14', subtext: 'Days in a row' },
            { id: 'active', label: 'Active Content', value: '3', subtext: 'Courses in progress' },
            { id: 'goal', label: 'Daily Goal', value: '45m', target: '60m', progress: 75 }
        ],
        activity: [40, 65, 30, 85, 50, 60, 45], // Mon-Sun percentages
        courses: [
            {
                id: 1,
                title: "AI Fundamentals",
                subtitle: "Chapter 5 of 12 – 45 mins remaining",
                progress: 65,
                type: "brain"
            },
            {
                id: 2,
                title: "AWS Cloud Practitioner",
                subtitle: "Module 3: Security – 20 mins remaining",
                progress: 40,
                type: "cloud"
            },
            {
                id: 3,
                title: "Python for Data Science",
                subtitle: "Pandas & NumPy – 15 mins remaining",
                progress: 85,
                type: "python"
            },
            {
                id: 4,
                title: "React Advanced Patterns",
                subtitle: "Hooks & Context – 10 mins remaining",
                progress: 25,
                type: "react"
            }
        ],
        user: {
            name: "Srilekha",
            welcomeMessage: "Welcome back! Here is an overview of your current learning habits."
        }
    };
};
