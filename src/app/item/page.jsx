"use client";
import { useTheme } from "@/context/ThemeContext";
import { useThemeColors } from "@/themeColors/gloableColors";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const { colors } = useThemeColors();
  // console.log("theme is:", theme);
  // console.log(typeof useThemeColors(), "all check type colors is:")
  // console.log(useThemeColors(), "all colors is:")
  // console.log(colors.redbg, "bg colors is:")
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <div className="flex items-center justify-center h-[40vh] w-full">
      <button
        // onClick={toggleTheme}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="py-2 px-4 rounded bg-lightButton dark:bg-darkButton text-black bg-amber-400 cursor-pointer dark:bg-emerald-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleButton;
