export default function FilterComponent({ setActiveTab, title, activeTab }) {
  return (
    <button
      onClick={() => setActiveTab(title.name)}
      className={`flex flex-col items-center rounded-lg px-3 py-1 transition shadow-[inset_0_0_18px_orange]
                  ${activeTab === title.name ? "bg-orange-400 scale-105 text-olive-700 font-bold" : "shadow-4xl hover:bg-orange-400 bordertext-olive-700 font-bold"} `}
    >
      <span>
        {title.icon} {title.name}
      </span>
    </button>
  );
}
