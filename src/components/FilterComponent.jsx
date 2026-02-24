import React from 'react'

export default function FilterComponent({ setActiveTab, title, activeTab }) {
    return (
        <button
            onClick={() => setActiveTab(title.name)}
            className={`flex flex-col items-center rounded-lg px-3 py-1 transition 
                  ${activeTab === title.name ? "bg-orange-400 scale-105 text-olive-700 font-bold" : "shadow-4xl hover:bg-orange-400 border border-amber-100 text-olive-700 font-bold"} `}
        >
            <span className="">{title.icon} {title.name}</span>
        </button>
    )
}
