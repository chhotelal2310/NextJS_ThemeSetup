// // "use client";
// export const useThemeColors = () => {
//     const allcolors = {
//         /************************* both****************************************/
//         TrustBlue: "#7A7097", // main or primary color light and dark
//         Button: "#A98891", // light and dark theme button color
//         CalmGreen: "#42FF88", /// successfyll , light and dark both,
//         AlertAmber: "#BA1A1A", // alert light and dark
//         autRightbgColor: "#F8F8F8",
//         ErrorRed: "#DC2626", // this color is not desided in light mode but darkmode show this color

//         /***************************************Lightmode*****************************/
//         LWhite: "#FFFFFF", // body background color or mainContainer color ,text color if background is dark
//         LSlateGray: "#65558F", // inpoutfield text and heading (main) lighttheme , border color when fill the text, text color when fill
//         LMutedGray: "#64748B", // description and placeholder text color /lighttheme
//         LcoolGray: "#E2E8F0", // cardborder and divider , input field background color,

//         /************************* darkmode ********************************/
//         DeepSlate: "#0F1416", // body background color or mainContainer color
//         DSteelGray: "#2C3134", // card backgrouncolor , border and divider
//         DMutedGray: "#94A3B8", // description and placeholder text color
//         DOffWhite: "#F8FAFC", // heading or title, description (kahi kahi), border color when fill the text, text color when fill in inputfield
//         silver: "#94A3B8",
//     };

//     return {
//         /************************************* Dark and light *************************/
//         colors: {
//             bodybgColor: "dark:bg-[#0F1416] bg-[#FFFFFF]",
//             titleColor: "dark:text-[#F8FAFC] text-[#65558F]",
//             commonTextColor: "text-[#7A7097] ",
//             checkBoxBgColor: "bg-[#7A7097] ",
//             subTextColor: "dark:text-[#ffff] text-[#64748B]",
//             textColor: "dark:text-[#94A3B8] text-[#64748B]",
//             otpInputValueColor: "text-[#65558F] dark:text-[#ffff]",
//             inputStyle: "dark:bg-[#2C3134] text-white bg-white text-gray-800",
//             dashboardInputStyle:
//                 "dark:bg-transparent text-white bg-white text-gray-800  border-[#EDF1F3]",
//             placeHolderStyle:
//                 "placeholder-[#64748B] dark:placeholder-[#94A3B8] text-[#64748B] dark:text-white",
//             mutedGray: "text-[#64748B]",
//             DropDownOptionColor:
//                 "dark:text-white text-gray-500 bg-white dark:bg-gray-800",
//             dropDownBorderColor:
//                 "text-[#64748B] dark:text-[#94A3B8]  dark:border-[#94A3B8]",
//             rightBgColor: "dark:bg-[#2C3134] bg-[#F8F8F8]",
//             commonBorderColor: "border-[#7A7097]",
//             cardBorderColor: "dark:border-[#2C3134] border-[#E2E8F0]", // darkMode ? allcolors.DSteelGray : allcolors.LcoolGray,
//             iconColor: "dark:text-[#F8FAFC] text-[#7A7097]", //darkMode ? allcolors.DOffWhite : allcolors.TrustBlue,
//             silver: "bg-[#94A3B8]",
//             dividerColor: "dark:text-[#2C3134] text-[#E2E8F0]", //!darkMode ? allcolors.DSteelGray : allcolors.LMutedGray,
//             navbgColor: "dark:bg-[#2C3134] bg-[#E2E8F0]",
//             cardbgColor: "bg-[#2C3134]", // allcolors.DSteelGray,
//             btnbgColor: "bg-[#A98891]", // allcolors.Button,
//             btntextColor: "text-[#FFFFFF]", ///allcolors.LWhite,
//             alertbgColor: "bg-[#BA1A1A]", //allcolors.AlertAmber,
//             greenText: "text-[#42FF88]", // allcolors.CalmGreen,
//             greenbg: "bg-[#42FF88]",
//             redText: "text-[#DC2626]", //allcolors.ErrorRed,
//             // redbg: "bg-[#DC2626] dark:bg-[#94A3B8]",
//             redbg: `bg-[${allcolors.ErrorRed}] dark:bg-[${allcolors.DMutedGray}]`,
//         },
//     };
// };


export const useThemeColors = () => {
    const allcolors = {
        /************************* both****************************************/
        TrustBlue: "#7A7097", // main or primary color light and dark
        Button: "#A98891", // light and dark theme button color
        CalmGreen: "#42FF88", // success both
        AlertAmber: "#BA1A1A", // alert both
        autRightbgColor: "#F8F8F8",
        ErrorRed: "#DC2626", // not used in light mode, but dark mode shows this

        /***************************************Light mode*****************************/
        LWhite: "#FFFFFF", // body bg or main container, text if background is dark
        LSlateGray: "#65558F", // input field text, heading, border color
        LMutedGray: "#64748B", // description, placeholder text
        LcoolGray: "#E2E8F0", // card border, divider, input field bg

        /************************* Dark mode ********************************/
        DeepSlate: "#0F1416", // body bg or main container
        DSteelGray: "#2C3134", // card bg, border, divider
        DMutedGray: "#94A3B8", // description, placeholder text
        DOffWhite: "#F8FAFC", // title, border color when filled
        silver: "#94A3B8",
    };

    return {
        /************************************* Dark and light *************************/
        colors: {
            bodybgColor: `dark:bg-[${allcolors.DeepSlate}] bg-[${allcolors.LWhite}]`,
            titleColor: `dark:text-[${allcolors.DOffWhite}] text-[${allcolors.LSlateGray}]`,
            commonTextColor: `text-[${allcolors.TrustBlue}]`,
            checkBoxBgColor: `bg-[${allcolors.TrustBlue}]`,
            subTextColor: `dark:text-[#ffff] text-[${allcolors.LMutedGray}]`,
            textColor: `dark:text-[${allcolors.DMutedGray}] text-[${allcolors.LMutedGray}]`,
            otpInputValueColor: `text-[${allcolors.LSlateGray}] dark:text-[#ffff]`,
            inputStyle: `dark:bg-[${allcolors.DSteelGray}] text-white bg-[${allcolors.LWhite}] text-gray-800`,
            dashboardInputStyle: `dark:bg-transparent text-white bg-[${allcolors.LWhite}] text-gray-800 border-[#EDF1F3]`,
            placeHolderStyle: `placeholder-[${allcolors.LMutedGray}] dark:placeholder-[${allcolors.DMutedGray}] text-[${allcolors.LMutedGray}] dark:text-white`,
            mutedGray: `text-[${allcolors.LMutedGray}]`,
            DropDownOptionColor: `dark:text-white text-gray-500 bg-[${allcolors.LWhite}] dark:bg-gray-800`,
            dropDownBorderColor: `text-[${allcolors.LMutedGray}] dark:text-[${allcolors.DMutedGray}] dark:border-[${allcolors.DMutedGray}]`,
            rightBgColor: `dark:bg-[${allcolors.DSteelGray}] bg-[${allcolors.autRightbgColor}]`,
            commonBorderColor: `border-[${allcolors.TrustBlue}]`,
            cardBorderColor: `dark:border-[${allcolors.DSteelGray}] border-[${allcolors.LcoolGray}]`,
            iconColor: `dark:text-[${allcolors.DOffWhite}] text-[${allcolors.TrustBlue}]`,
            silver: `bg-[${allcolors.silver}]`,
            dividerColor: `dark:text-[${allcolors.DSteelGray}] text-[${allcolors.LcoolGray}]`,
            navbgColor: `dark:bg-[${allcolors.DSteelGray}] bg-[${allcolors.LcoolGray}]`,
            cardbgColor: `bg-[${allcolors.DSteelGray}]`,
            btnbgColor: `bg-[${allcolors.Button}]`,
            btntextColor: `text-[${allcolors.LWhite}]`,
            alertbgColor: `bg-[${allcolors.AlertAmber}]`,
            greenText: `text-[${allcolors.CalmGreen}]`,
            greenbg: `bg-[${allcolors.CalmGreen}]`,
            redText: `text-[${allcolors.ErrorRed}]`,
            redbg: `bg-[${allcolors.ErrorRed}] dark:bg-[${allcolors.DMutedGray}]`,
        },
    };
};
