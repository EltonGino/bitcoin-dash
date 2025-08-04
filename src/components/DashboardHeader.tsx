import React from "react";

export default function DashboardHeader() {
    return (
        <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">Bitcoin Insights Pro</h1>
                <p className="text-gray-500 dark:text-gray-300 text-sm">Your professional crypto dashboard</p>
            </div>
            <div>
                {/* Add profile info, theme switcher, or logo here if you want */}
            </div>
        </header>
    );
}