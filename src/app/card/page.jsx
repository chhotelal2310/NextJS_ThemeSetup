"use client";
import ToggleButton from "../item/page";
import { useThemeColors } from "@/themeColors/gloableColors";
const Card = () => {
  const { colors } = useThemeColors();
  return (
    <>
      <div
        className={`max-w-sm mx-auto p-6 rounded-lg shadow-lg ${colors.bodybgColor} border border-cyan-950 dark:border-gray-800`}
      >
        <h2 className={`text-xl font-semibold ${colors.titleColor}`}>
          Card Component
        </h2>
        <p className={`${colors.titleColor}`}>
          This is an example of a card component in light/dark mode.
        </p>
      </div>
      <ToggleButton />
    </>
  );
};

export default Card;
