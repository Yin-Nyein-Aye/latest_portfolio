import React from "react";
import { Rocket, Settings, Globe } from "lucide-react";
import TitleComponent from "../components/Title";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import data from "../data/data.json";
import Profile from "../components/Profile";

// Clean JavaScript version of the utility
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const statCardTheme = {
  slate: {
    border: "border-[rgba(51,65,180,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(51,65,180,0.4)]",
    text: "text-slate-700",
  },

  amber: {
    border: "border-[rgba(180,64,14,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(180,64,14,0.4)]",
    text: "text-amber-700",
  },

  stone: {
    border: "border-[rgba(87,83,78,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(87,83,78,0.4)]",
    text: "text-stone-700",
  },

  brown: {
    border: "border-[rgba(80,150,4,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(80,150,4,0.4)]",
    text: "text-lime-700",
  },

  zinc: {
    border: "border-[rgba(150,63,100,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(150,63,100,0.4)]",
    text: "text-rose-700",
  },

  coffee: {
    border: "border-[rgba(30,150,151,0.6)]",
    shadow: "shadow-[inset_0_0_18px_rgba(30,150,151,0.4)]",
    text: "text-teal-700",
  },
};

const AboutMe = () => {
  return (
    <div className="min-h-screen text-white p-8 font-sans mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <TitleComponent title="About" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-3 text-lg text-olive-700 font-bold italic text-center"
        >
          Code is what I do — but here’s who I am
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-15">
          {/* Left Column (Stack) */}
          <div className="md:col-span-6 space-y-4">
            {/* Behind the Code Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/5 border border-white/30 rounded-2xl p-6 shadow-[inset_0_0_20px_0px_black]"
            >
              <h2 className="text-xl font-bold mb-4 text-black text-center">
                {data.info[0].title}
              </h2>
              <p className="text-black leading-relaxed mb-4">
                {data.info[0].description}
              </p>
              <p className="space-y-3 text-sm text-black">
                <div>
                  <h4 className="font-semibold">May 2019 – April 2024</h4>
                  <p>{data.info[0].first_career}</p>
                </div>
                <div>
                  <h4 className="font-semibold"> Since May 2024</h4>
                  <p>{data.info[0].second_career}</p>
                </div>
              </p>
            </motion.div>
            {/* Career Achievements - List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-3"
            >
              {data.info[1].achievement.map((item, index) => {
                const icons = [
                  <Rocket className="w-6 h-6" />,
                  <Settings className="w-6 h-6" />,
                  <Globe className="w-6 h-6" />,
                ];

                return (
                  <AchievementCard
                    key={index}
                    icon={icons[index]}
                    title={`${index + 1}. ${item.subTitle}:`}
                    desc={item.description}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* Right Column (Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-6 grid grid-cols-2 gap-4"
          >
            {data.info[2].rating.map((item, index) => (
              <StatCard
                key={index}
                value={item.num}
                label={item.label}
                theme={item.color}
              />
            ))}
            {/* Quick Facts & Philosophy */}
            <Profile />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* Sub-components for cleaner code */

const AchievementCard = ({ icon, title, desc }) => (
  <div
    className="flex gap-4 items-start hover:bg-white/10 transition-colors
  bg-white/5 border border-white/30 rounded-2xl p-6 shadow-[inset_0_0_20px_0px_white]"
  >
    <div className="p-2 bg-white/5 rounded-lg text-gray-300">{icon}</div>
    <div>
      <h4 className="font-bold text-sm mb-1 text-black">{title}</h4>
      <p className="text-xs text-black leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StatCard = ({ value, label, theme = "green" }) => {
  const t = statCardTheme[theme];

  return (
    <div
      className={cn(
        "bg-white/5 border rounded-2xl p-6 text-center transition-transform hover:scale-[1.02]",
        t.border,
        t.shadow,
      )}
    >
      <div className={cn("text-3xl font-bold mb-1", t.text)}>{value}</div>

      <div className={cn("text-[10px] uppercase tracking-wider text-black")}>
        {label}
      </div>
    </div>
  );
};
export default AboutMe;
