import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import {
  FormSection,
  IntroSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTitle,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { ImageWithColorizedBorder } from "../LandingSections/ImageWithColorizedBorder";
import { montserratFamily } from "../../constants/themeVars";
import { SliderSection3 } from "../LandingSections/SliderSection3";
import { SliderSection4 } from "../LandingSections/SliderSection4";

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  btnAction?: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
}

export const OfficesLanding: React.FC<Props> = ({ lang = "ru" }) => {
  const cdnUrl = "https://images.gostudy.cz/static";

  const getTranslatedText = (
    enVariant: string | React.ReactNode,
    viVariant: string | React.ReactNode,
    ruVariant: string | React.ReactNode,
    ukVariant: string | React.ReactNode
  ) => {
    if (lang === "vi") return viVariant;
    if (lang === "ru") return ruVariant;
    if (lang === "uk") return ukVariant;
    return enVariant;
  };

  const firstSliderContent = {
    bgColor: "rgba(251, 253, 255, 1)",
    phone: "+420 277 001 200",
    email: "info@gostudy.cz",
    link: "https://maps.app.goo.gl/2YobUjZ9ynRjh7rx7",
    address: getTranslatedText(
      "Street. Washingtonova 25, Prague",
      "Địa chỉ: Số 25 đường Washingtonova, Prague",
      "ул. Вашингтонова 25, Прага, 110 00",
      "вул. Вашингтонова 25, Прага"
    ) as string,
  };

  const secondSliderContent = {
    bgColor: "rgba(225, 243, 255, 0.5)",
    phone: "+420 277 001 200",
    email: "info@gostudy.cz",
    // link: "https://maps.app.goo.gl/dM3fWhQWavgHsZrP8",
    address: getTranslatedText(
      "Street. Kopechna 938/3, Brno",
      "Địa chỉ: Số nhà 938/3, đường Kopecna, Brno",
      "ул. Копечна 3, Брно, 602 00",
      "вул. Копечна 938/3, Брно"
    ) as string,
  };

  const thirdSliderContent = {
    bgColor: "rgba(225, 243, 255, 0.5)",
    phone: "+38-093-861 36 25",
    email: "stanislav.b@gostudy.cz",
    // link: "https://maps.app.goo.gl/BwSGs34KuRptPTXj6",
    address: getTranslatedText(
      "str. Saksaganskogo 1, Kiev",
      "Địa chỉ: Số 1, đường Saksahanskoho, Kiev",
      "ул. Саксаганского 1, Киев",
      "вул. Саксаганського 1, Київ"
    ) as string,
  };

  const renderOfficeContacts = ({
    phone,
    email,
    address,
    bgColor,
    link,
  }: {
    phone: string;
    email: string;
    address: string;
    bgColor: string;
    link?: string;
  }) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          background: bgColor,
          padding: { xs: "16px", sm: "24px" },
          borderRadius: { xs: "16px", sm: "24px" },
          width: "100%",
          maxWidth: { xs: "100%", sm: "378px" },
          marginLeft: { sm: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontFamily: montserratFamily,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: { xs: "500", sm: "600" },
            lineHeight: { xs: "21.98px", sm: "22.88px" },
          }}
        >
          <Link
            href={`tel:${phone}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "text.primary",
              textDecoration: "none",
              transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": { color: "primary.main" },
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2596 1.88008C13.3258 1.47119 13.7124 1.19381 14.1212 1.26001C14.1466 1.26485 14.228 1.28007 14.2707 1.28958C14.356 1.30858 14.475 1.33784 14.6234 1.38106C14.9202 1.46751 15.3348 1.60991 15.8324 1.83805C16.8287 2.2948 18.1545 3.09381 19.5303 4.46961C20.9061 5.84541 21.7051 7.17122 22.1619 8.1675C22.39 8.66511 22.5324 9.07972 22.6188 9.3765C22.6621 9.5249 22.6913 9.64393 22.7103 9.72926C22.7198 9.77193 22.7268 9.80619 22.7316 9.8315L22.7374 9.86269C22.8036 10.2716 22.5287 10.6741 22.1198 10.7403C21.7121 10.8063 21.328 10.5303 21.2602 10.1233C21.2581 10.1124 21.2524 10.083 21.2462 10.0553C21.2339 9.99994 21.2125 9.91212 21.1787 9.79597C21.111 9.56363 20.9935 9.2183 20.7983 8.79262C20.4085 7.94232 19.7075 6.76813 18.4696 5.53027C17.2318 4.2924 16.0576 3.59141 15.2073 3.20158C14.7816 3.00642 14.4363 2.88889 14.2039 2.82122C14.0878 2.78739 13.9418 2.75387 13.8864 2.74154C13.4794 2.67372 13.1936 2.2878 13.2596 1.88008Z"
                fill="#0B4E83"
                fill-opacity="0.5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4859 5.32954C13.5997 4.93126 14.0148 4.70065 14.413 4.81444L14.207 5.53558C14.413 4.81444 14.413 4.81444 14.413 4.81444L14.4145 4.81485L14.416 4.81529L14.4194 4.81627L14.4271 4.81858L14.4469 4.82475C14.462 4.82957 14.4808 4.83585 14.5033 4.84381C14.5482 4.85975 14.6075 4.88242 14.6803 4.91362C14.826 4.97605 15.0251 5.07248 15.2696 5.21719C15.7591 5.50687 16.4272 5.98805 17.2122 6.77302C17.9972 7.55799 18.4784 8.22618 18.768 8.71564C18.9128 8.96015 19.0092 9.15922 19.0716 9.3049C19.1028 9.37771 19.1255 9.43707 19.1414 9.48198C19.1494 9.50443 19.1557 9.52326 19.1605 9.53834L19.1666 9.55812L19.169 9.56587L19.1699 9.56921L19.1704 9.57074C19.1704 9.57074 19.1708 9.57218 18.4496 9.77822L19.1708 9.57218C19.2846 9.97046 19.054 10.3856 18.6557 10.4994C18.2608 10.6122 17.8493 10.3864 17.7315 9.99437L17.7278 9.98359C17.7224 9.96856 17.7114 9.93898 17.6929 9.89578C17.6559 9.80944 17.5888 9.66821 17.4772 9.47962C17.2542 9.10288 16.8515 8.53363 16.1516 7.83368C15.4516 7.13373 14.8823 6.73102 14.5056 6.50805C14.317 6.39644 14.1758 6.32934 14.0894 6.29234C14.0462 6.27382 14.0167 6.26279 14.0016 6.25746L13.9909 6.25376C13.5988 6.13588 13.373 5.72443 13.4859 5.32954Z"
                fill="#0B4E83"
                fill-opacity="0.5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.00745 4.40684C6.68752 2.72677 9.52266 2.85449 10.6925 4.95061L11.3415 6.11354C12.1054 7.48236 11.7799 9.20944 10.6616 10.3414C10.6467 10.3618 10.5677 10.4767 10.5579 10.6776C10.5454 10.9339 10.6364 11.5267 11.5548 12.4451C12.4729 13.3632 13.0656 13.4545 13.3221 13.442C13.5231 13.4322 13.6381 13.3532 13.6585 13.3383C14.7905 12.22 16.5176 11.8945 17.8864 12.6584L19.0493 13.3074C21.1454 14.4772 21.2731 17.3124 19.5931 18.9925C18.6944 19.8911 17.4995 20.6896 16.0953 20.7428C14.0144 20.8217 10.5591 20.2843 7.13735 16.8626C3.71556 13.4408 3.17818 9.98554 3.25706 7.90461C3.3103 6.50041 4.10879 5.3055 5.00745 4.40684ZM9.38265 5.68161C8.78363 4.60826 7.17394 4.36167 6.06811 5.4675C5.29276 6.24285 4.7887 7.09866 4.75599 7.96144C4.6902 9.69678 5.11864 12.7225 8.19801 15.8019C11.2774 18.8813 14.3031 19.3097 16.0385 19.2439C16.9013 19.2112 17.7571 18.7071 18.5324 17.9318C19.6382 16.826 19.3916 15.2163 18.3183 14.6173L17.1554 13.9682C16.432 13.5645 15.4158 13.7022 14.7025 14.4155C14.6325 14.4856 14.1864 14.9017 13.395 14.9402C12.5847 14.9796 11.604 14.6156 10.4942 13.5058C9.38395 12.3955 9.02003 11.4145 9.0597 10.6042C9.09846 9.81269 9.51468 9.36709 9.58432 9.29744C10.2976 8.58412 10.4354 7.56795 10.0317 6.84453L9.38265 5.68161Z"
                fill="#0B4E83"
                fill-opacity="0.5"
              />
            </svg>

            {phone}
          </Link>
          <Link
            href={`mailto:${email}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "text.primary",
              textDecoration: "none",
              transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": { color: "primary.main" },
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                fill="#0B4E83"
                fill-opacity="0.5"
              />
            </svg>

            {email}
          </Link>
          <Typography
            component={"p"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: montserratFamily,
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: { xs: "500", sm: "600" },
              lineHeight: { xs: "21.98px", sm: "22.88px" },
              color: "text.primary",
              transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              // "&:hover": { color: "primary.main" },
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.25 7.70031C5.25 4.10215 8.30876 1.25 12 1.25C15.608 1.25 18.6116 3.97488 18.7454 7.45788L19.2231 7.61714C19.6863 7.77148 20.0922 7.90676 20.4142 8.05657C20.7623 8.21853 21.0814 8.42714 21.3253 8.76554C21.5692 9.10394 21.6662 9.47259 21.7098 9.85407C21.7501 10.207 21.75 10.6348 21.75 11.123V16.8712C21.75 17.4806 21.7501 18.0005 21.7028 18.4176C21.653 18.8563 21.5418 19.2875 21.2404 19.6553C21.0674 19.8665 20.8573 20.0445 20.6205 20.1805C20.2081 20.4173 19.7645 20.4561 19.3236 20.433C18.9044 20.4111 18.3915 20.3256 17.7904 20.2254L17.7488 20.2185C16.456 20.003 15.9351 19.9216 15.4274 19.9641C15.2417 19.9796 15.0571 20.0074 14.875 20.0471C14.3774 20.1558 13.8988 20.3891 12.716 20.9805C12.6749 21.0011 12.6342 21.0214 12.594 21.0415C11.2114 21.7331 10.3595 22.1592 9.44031 22.2923C9.16384 22.3323 8.88482 22.3522 8.60546 22.3516C7.67668 22.3499 6.77995 22.0508 5.32536 21.5657C5.28328 21.5517 5.24074 21.5375 5.19772 21.5231L4.81415 21.3953L4.77684 21.3828C4.31373 21.2285 3.90783 21.0932 3.5858 20.9434C3.23766 20.7815 2.91861 20.5729 2.67471 20.2345C2.4308 19.8961 2.33379 19.5274 2.29024 19.1459C2.24995 18.793 2.24997 18.3652 2.25 17.877L2.25 12.8572C2.24997 12.0711 2.24994 11.4085 2.31729 10.8895C2.38759 10.3478 2.54652 9.81811 2.98262 9.4198C3.11082 9.30271 3.25213 9.20085 3.40375 9.11626C3.91953 8.8285 4.47226 8.84521 5.00841 8.94983C5.11717 8.97105 5.23109 8.99718 5.35019 9.02754C5.28411 8.5817 5.25 8.13723 5.25 7.70031ZM5.74869 10.7093C5.32072 10.5713 4.99224 10.475 4.72113 10.4221C4.32599 10.345 4.19646 10.3917 4.13459 10.4262C4.08405 10.4544 4.03694 10.4883 3.99421 10.5274C3.9419 10.5751 3.85663 10.6833 3.80482 11.0825C3.75151 11.4933 3.75 12.0575 3.75 12.908V17.8377C3.75 18.3768 3.75114 18.7181 3.78055 18.9758C3.80779 19.2143 3.85234 19.303 3.89157 19.3574C3.9308 19.4118 4.00083 19.4821 4.21849 19.5834C4.45364 19.6928 4.77709 19.8018 5.28849 19.9723L5.67205 20.1001C7.29563 20.6413 7.95089 20.8504 8.6083 20.8516C8.81478 20.852 9.02101 20.8374 9.22537 20.8078C9.87582 20.7136 10.5009 20.411 12.0452 19.6389C12.0765 19.6232 12.1074 19.6078 12.138 19.5925C13.1987 19.062 13.852 18.7352 14.555 18.5817C14.8014 18.5279 15.051 18.4903 15.3023 18.4693C16.0193 18.4093 16.7344 18.5286 17.8945 18.7221C17.9278 18.7276 17.9614 18.7332 17.9954 18.7389C18.6497 18.8479 19.0779 18.9181 19.4019 18.9351C19.7138 18.9514 19.821 18.9098 19.8735 18.8797C19.9524 18.8344 20.0225 18.775 20.0801 18.7046C20.1185 18.6578 20.1771 18.5589 20.2123 18.2486C20.2489 17.9262 20.25 17.4923 20.25 16.829V11.1623C20.25 10.6232 20.2489 10.2819 20.2195 10.0242C20.1922 9.7857 20.1477 9.69703 20.1084 9.64261C20.0692 9.58818 19.9992 9.51787 19.7815 9.41661C19.5464 9.30722 19.2229 9.19821 18.7115 9.02774L18.6527 9.00813C18.4625 10.3095 17.9996 11.6233 17.3173 12.7959C16.4048 14.364 15.0697 15.7299 13.3971 16.4595C12.5094 16.8468 11.4906 16.8468 10.6029 16.4595C8.93027 15.7299 7.59519 14.364 6.68273 12.7959C6.29871 12.136 5.9842 11.4313 5.74869 10.7093ZM12 2.75C9.06383 2.75 6.75 5.00208 6.75 7.70031C6.75 9.11775 7.18744 10.6808 7.97922 12.0415C8.77121 13.4026 9.88753 14.5109 11.2027 15.0847C11.708 15.3051 12.292 15.3051 12.7973 15.0847C14.1125 14.5109 15.2288 13.4026 16.0208 12.0415C16.8126 10.6808 17.25 9.11775 17.25 7.70031C17.25 5.00208 14.9362 2.75 12 2.75ZM12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75ZM9.25 8C9.25 6.48122 10.4812 5.25 12 5.25C13.5188 5.25 14.75 6.48122 14.75 8C14.75 9.51878 13.5188 10.75 12 10.75C10.4812 10.75 9.25 9.51878 9.25 8Z"
                fill="#0B4E83"
                fill-opacity="0.5"
              />
            </svg>

            {address}
          </Typography>
        </Box>
        {link && (
          <Button
            variant="outlined"
            sx={{
              fontFamily: montserratFamily,
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "26px",
            }}
            onClick={() => {
              if (window) {
                window.open(link, "_blank");
              }
            }}
          >
            {getTranslatedText(
              "View on map",
              "Xem trên bản đồ",
              "Открыть на карте",
              "Подивитись на карті"
            )}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <>
      <IntroSectionV2
        leftSectionContainerSx={{
          gap: { xs: "8px", sm: "60px" },
          "& > *:first-of-type": {
            maxWidth: { xs: "100%", sm: "504px" },
          },
        }}
        containerSx={{
          py: { xs: "3em", sm: "3.5em" },
        }}
        titleSx={{
          fontSize: { xs: "28px", sm: "48px" },
          lineHeight: { xs: "36.96px", sm: "63.36px" },
          marginBottom: { xs: "16px !important", sm: "24px !important" },
        }}
        renderTitle={(color) => (
          <Box component={"span"}>
            {getTranslatedText(
              <>
                <Box component={"span"} sx={{ color: color }}>
                  GoStudy
                </Box>{" "}
                offices and educational centers
              </>,
              <>
                Văn phòng và trung tâm đào tạo{" "}
                <Box component={"span"} sx={{ color: color }}>
                  GoStudy
                </Box>
              </>,
              <>
                Офисы и учебные центры{" "}
                <Box component={"span"} sx={{ color: color }}>
                  GoStudy
                </Box>
              </>,
              <>
                Офіси та навчальні центри{" "}
                <Box component={"span"} sx={{ color: color }}>
                  GoStudy
                </Box>
              </>
            )}
          </Box>
        )}
        description={getTranslatedText(
          "Modern, bright and comfortable classrooms and offices in Prague, Brno, Kiev, Bratislava and Vienna.",
          "Các phòng học và văn phòng hiện đại, sáng sủa và thoải mái tại Prague, Brno, Kiev, Bratislava và Vienna.",
          "Современные, светлые и комфортные учебные классы и офисы в Праге, Брно, Вене, Братиславе и Киеве.",
          "Сучасні, світлі та комфортні навчальні класи та офіси у Празі, Брно, Києві, Братиславі та Відні."
        )}
        image={{
          src: `${cdnUrl}/officesLanding/firstSection.png`,
          width: 1080,
          height: 966,
        }}
        mobileImage={{
          src: `${cdnUrl}/officesLanding/firstSection_mobile.png`,
          width: 686,
          height: 614,
          sx: { width: "100%", maxWidth: "343px", objectFit: "cover" },
        }}
      />

      <SliderSection3
        info={renderOfficeContacts(firstSliderContent)}
        accentColor={"primary"}
        sectionTitle={{
          preTitle: getTranslatedText(
            "Prague, Czech Republic",
            "Prague, Cộng hòa Séc",
            "Прага, Чехия",
            "Прага, Чехія"
          ) as string,
          title: getTranslatedText(
            "Main educational center and office",
            "Trung tâm đào tạo chính và văn phòng",
            "Главный учебный центр и офис",
            "Головний навчальний центр та офіс"
          ) as string,
          description: getTranslatedText(
            "The main office and administration of the GoStudy Language Centre is located in the center of Prague. This is also where the classrooms for face-to-face teaching are located. Spacious, comfortable rooms, modern equipment.",
            "Trụ sở chính và quản lý của Trung tâm Ngôn ngữ GoStudy nằm ở trung tâm Prague. Ở đây cũng là nơi có các lớp học được tổ chức trực tiếp. Các phòng học rộng rãi, thoải mái và được trang bị thiết bị hiện đại.",
            "Главный офис и администрация языкового центра GoStudy находится в центре Праги. Здесь же расположены классы, где проводится очное обучение. Просторные, удобные помещения, современное оборудование.",
            "Головний офіс та адміністрація мовного центру GoStudy знаходиться у центрі Праги. Тут розташовані класи, де проводиться очне навчання. Просторе, зручне приміщення, сучасне обладнання."
          ),
        }}
        data={[
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/secondSection_1.png`,
              width: 2240,
              height: 1216,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/secondSection_1_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/secondSection_2.png`,
              width: 2240,
              height: 1216,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/secondSection_2_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/secondSection_3.png`,
              width: 2240,
              height: 1216,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/secondSection_3_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/secondSection_4.png`,
              width: 2240,
              height: 1216,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/secondSection_4_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
        ]}
      />

      <SliderSection4
        info={renderOfficeContacts(secondSliderContent)}
        accentColor="primary"
        wrapperSx={{ background: "#ffffff" }}
        sectionTitle={{
          preTitle: getTranslatedText(
            "Brno, Czech Republic",
            "Brno, Cộng hòa Séc",
            "Брно, Чехия",
            "Брно, Чехія"
          ) as string,
          title: getTranslatedText(
            "Educational center and office",
            "Trung tâm đào tạo và văn phòng",
            "Учебный центр и офис",
            "Навчальний центр та офіс"
          ) as string,
          description: getTranslatedText(
            "Located in the center of Brno in the south-east of the Czech Republic. The second largest and most important city in the Czech Republic after Prague.",
            "Nằm ở trung tâm Brno ở phía đông nam Cộng hòa Séc. Thành phố lớn thứ hai và quan trọng nhất ở Cộng hòa Séc sau Praha.",
            "Находится в центре Брно на юго-востоке Чехии. Второй по величине и значимости город в Чехии после Праги.",
            "Знаходиться у центрі Брно на південному сході Чехії. Друге за величиною та значущістю місто в Чехії після Праги."
          ),
        }}
        data={[
          {
            tabName: "default",
            list: [
              {
                image: {
                  src: `${cdnUrl}/officesLanding/thirdSection_1.png`,
                  width: 1504,
                  height: 1056,
                },
              },
              {
                image: {
                  src: `${cdnUrl}/officesLanding/thirdSection_2.png`,
                  width: 1504,
                  height: 1056,
                },
              },
              {
                image: {
                  src: `${cdnUrl}/officesLanding/thirdSection_3.png`,
                  width: 1504,
                  height: 1056,
                },
              },
            ],
          },
        ]}
      />

      <SectionContainerWrapperColorized accentColor="primary">
        <SectionContainer>
          <SectionTwoColumnsContainer
            disableContainerPaddings
            sectionContainerSx={{
              alignItems: "center",
              marginBottom: { xs: "2rem", sm: "3.75rem" },
            }}
            firstColumn={
              <SectionTitle
                preTitle={
                  getTranslatedText(
                    "Bratislava, Slovakia",
                    "Bratislava, Slovakia",
                    "Братислава, Словакия",
                    "Братислава, Словаччина"
                  ) as string
                }
                title={getTranslatedText(
                  "Educational center",
                  "Trung tâm giáo dục",
                  "Учебный центр",
                  "Навчальний центр"
                )}
              />
            }
            secondColumnSx={{
              maxWidth: { xs: "100%", sm: "518px" },
              alignSelf: { sm: "flex-start" },
            }}
            secondColumn={
              <Typography
                sx={{ fontSize: "1.125rem", color: "rgba(0,0,0,.54)" }}
              >
                {getTranslatedText(
                  "Spacious classrooms for students with well-developed infrastructure.",
                  "Phòng học rộng rãi dành cho học sinh với cơ sở vật chất phát triển.",
                  "Просторные аудитории для занятий со студентами с развитой инфраструктурой.",
                  "Простора аудиторія з розвиненою інфраструктурою для занять зі студентами."
                )}
              </Typography>
            }
          />

          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/fourthSection.png`,
              width: 1120,
              height: 408,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/fourthSection_mobile.png`,
              width: 640,
              height: 380,
            }}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SliderSection3
        dataPerSlide={2}
        info={renderOfficeContacts(thirdSliderContent)}
        accentColor="primary"
        wrapperSx={{ background: "#ffffff" }}
        sectionTitle={{
          preTitle: getTranslatedText(
            "Kiev, Ukraine",
            "Kiev, Ukraine",
            "Киев, Украина",
            "Київ, Україна"
          ) as string,
          title: getTranslatedText(
            "Office of the Customer Service Department",
            "Văn phòng dịch vụ khách hàng",
            "Офис отдела по работе с клиентами",
            "Офіс відділу роботи з клієнтами"
          ) as string,
          description: getTranslatedText(
            "Located in the city center. The team of specialists is always ready to answer your questions and provide free consultation on all issues related to education in Europe in person in the office or online.",
            "Nằm ở trung tâm thành phố. Đội ngũ chuyên gia luôn sẵn sàng trả lời các câu hỏi của bạn và cung cấp tư vấn miễn phí về mọi vấn đề liên quan đến giáo dục ở Châu u, trực tiếp tại văn phòng hoặc trực tuyến.",
            "Расположен в центре Киева. Консультанты GoStudy расскажут вам о том, как за год выучить иностранный язык до продвинутого уровня, поступить в престижный вуз и начать строить международную карьеру.",
            "Розташований у центрі міста. Команда фахівців завжди готова відповісти на ваші запитання та провести безкоштовну консультацію щодо усіх питань, пов’язаних з освітою в Європі, очно в офісі або онлайн."
          ),
        }}
        data={[
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/fifthSection_1.png`,
              width: 1064,
              height: 816,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/fifthSection_1_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/fifthSection_4.png`,
              width: 1064,
              height: 816,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/fifthSection_4_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/fifthSection_2.png`,
              width: 1064,
              height: 816,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/fifthSection_2_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
          <ImageWithColorizedBorder
            imageSx={{
              minHeight: "12rem",
              objectFit: "cover",
            }}
            image={{
              src: `${cdnUrl}/officesLanding/fifthSection_3.png`,
              width: 1064,
              height: 816,
            }}
            mobileImage={{
              src: `${cdnUrl}/officesLanding/fifthSection_3_mobile.png`,
              width: 640,
              height: 480,
            }}
          />,
        ]}
      />

      <FormSection
        accentColor="primary"
        renderTitle={(color) =>
          getTranslatedText(
            <>
              <Box sx={{ color }} component={"span"}>
                Free
              </Box>{" "}
              consultation
            </>,
            <>
              <Box sx={{ color }} component={"span"}>
                Tư vấn
              </Box>{" "}
              miễn phí
            </>,
            <>
              <Box sx={{ color }} component={"span"}>
                Бесплатная
              </Box>{" "}
              консультация
            </>,
            <>
              <Box sx={{ color }} component={"span"}>
                Безкоштовна
              </Box>{" "}
              консультація
            </>
          )
        }
        description={
          <Box
            component={"span"}
            sx={{
              textAlign: { xs: "center", sm: "start" },
              lineHeight: { xs: "27.36px", sm: "27.36px" },
              fontSize: { xs: "18px", sm: "18px" },
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            {
              getTranslatedText(
                "For questions about education and preparation in Europe, please contact any of our offices and educational centers or leave an enquiry via the form. We will contact you as soon as possible.",
                "Nếu có bất kỳ câu hỏi nào về giáo dục và đào tạo tại Châu u, xin vui lòng liên hệ với bất kỳ văn phòng hoặc trung tâm đào tạo nào của chúng tôi, hoặc để lại yêu cầu liên hệ thông qua biểu mẫu. Chúng tôi sẽ phản hồi bạn ngay khi có thể.",
                "По вопросам обучения и подготовки в Европе, пожалуйста, обращайтесь в любой из наших офисов и учебных центров или оставляйте заявку для связи через форму. Мы свяжемся с вами в кратчайшие сроки.",
                "Щодо питань навчання та підготовки в Європі, будь ласка, звертайтесь до будь-якого з наших офісів та навчальних центрів або залишайте заявку для зв’язку через форму. Ми зв’яжемося з вами у найкоротші терміни."
              ) as string
            }
          </Box>
        }
        hubspotConfig={{
          portalId: "139617067",
          formId: "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
        }}
        formTranslations={
          lang === "ru"
            ? {
                language: "ru",
                button: "Отправить",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      * отправляя форму, вы принимаете условия политики
                      и пользовательского соглашения
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Форма успешно отправлена!
                      <br />
                      Спасибо!
                    </>
                  ),
                },
              }
            : lang === "uk"
            ? {
                language: "uk",
                button: "Відправити",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      * відправляючи форму, ви приймаєте умови політики
                      та користувальницької угоди.
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Форму успішно відправлено!
                      <br />
                      Дякую!
                    </>
                  ),
                },
              }
            : lang === "vi"
            ? {
                language: "vi",
                button: "Gửi",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      * bằng cách gửi biểu mẫu, bạn chấp nhận các điều khoản của
                      chính sách và thỏa thuận người dùng
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Biểu mẫu đã được gửi thành công!
                      <br />
                      Kinh quá!
                    </>
                  ),
                },
              }
            : {
                language: "en",
                button: "Send",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      * by submitting the form, you accept the terms of the
                      policy and user agreement
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      The form has been successfully submitted!
                      <br />
                      Thanks!
                    </>
                  ),
                },
              }
        }
      />
    </>
  );
};
