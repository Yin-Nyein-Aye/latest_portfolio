import SocialLink from "../components/SocialLink";
import { motion } from "framer-motion";
import profile from "../assets/girl_coding.png";
import data from "../data/data.json";
import { MapPin, Languages } from "lucide-react";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-8 text-black shadow-[inset_0_0_18px_white]"
    >
      <div className="flex-1">
        <h3 className="font-bold mb-4 text-black">
          {data.info[3].profile.title}
        </h3>

        <div className="space-y-5">
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-amber-600" />
            </div>

            <div>
              <p className="text-xs text-gray-600">
                {data.info[3].profile.subtitle[0].key}
              </p>

              <p className="font-semibold text-gray-800 text-xs">
                {data.info[3].profile.subtitle[0].value}
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center">
              <Languages className="w-4 h-4 text-sky-600" />
            </div>

            <div>
              <p className="text-xs text-gray-600">
                {data.info[3].profile.subtitle[1].key}
              </p>

              <div className="space-y-1 mt-1">
                {data.info[3].profile.subtitle[1].value.map((lang, index) => (
                  <p key={index} className="font-medium text-gray-800 text-xs">
                    {lang}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialLink />
          </div>
        </div>
      </div>
      <motion.div
        className="flex-1 border-l border-white/10 pl-0 md:pl-8"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-bold text-black">
            {data.info[3].profile.myValue.title}
          </h3>
          <motion.img
            src={profile}
            alt="Profile"
            className="w-10 h-10 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
          />
        </div>
        {data.info[3].profile.myValue.context.map((p, index) => (
          <p key={index} className="text-xs text-black leading-relaxed italic">
            {p.paragraph}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
