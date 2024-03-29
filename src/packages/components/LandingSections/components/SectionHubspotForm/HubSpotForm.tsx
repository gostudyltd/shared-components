import React, { useEffect, useRef, useState } from "react";
import {
  HubSpotFormLocale,
  useHubspotForm,
} from "@aaronhayes/react-use-hubspot-form";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import styles from "./HubspotForm.module.css";
import PhoneInput from "react-phone-input-2";
import ru from "./ru.json";
import vi from "./vi.json";
import "react-phone-input-2/lib/style.css";
import { ReactComponent as FormSubmittedImage } from "./form-submitted.svg";
import { FormFields } from "../../FormSection";

export type HubspotFormTranslations = {
  language: "en" | "ru" | "uk" | "vi";

  content: {
    acceptTerms: string | React.ReactNode;
    formSubmitted: string | React.ReactNode;
  };
};

type Props = {
  withoutHubspot?: boolean;
  hubspotConfig: {
    portalId: string;
    formId: string;
    onSubmit?: (data: FormFields) => void;
  };
  translations: HubspotFormTranslations;
  buttonColor?: string;
};

const FinishView: React.FC<{ translations: HubspotFormTranslations }> = ({
  translations,
}) => {
  return (
    <Stack
      alignItems={"center"}
      sx={{
        p: { xs: "2rem 1rem", sm: "3rem 1.5rem" },

        "& > svg": {
          width: { xs: "164px", sm: "202px" },
          height: { xs: "164px", sm: "202px" },
        },
      }}
    >
      <FormSubmittedImage />
      <Typography
        variant={"body1"}
        color={"text.secondary"}
        textAlign={"center"}
        sx={{
          mt: { xs: ".5rem", sm: ".75rem" },
          fontWeight: { xs: "400", sm: "500" },
          fontSize: { xs: ".875rem", sm: "1.25rem" },
        }}
      >
        {translations.content.formSubmitted}
      </Typography>
    </Stack>
  );
};

export const HubspotForm: React.FC<Props> = ({
  hubspotConfig,
  translations,
  buttonColor,
  withoutHubspot,
}) => {
  const { language } = translations;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errorsRef = useRef<{ [key: string]: boolean }>({});
  const hubspotPhoneInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  const langForHubspot =
    language === "ru"
      ? "FRENCH"
      : language === "uk"
      ? "FINNISH"
      : language === "vi"
      ? "DANISH"
      : "ENGLISH";

  const { loaded } = useHubspotForm({
    portalId: hubspotConfig.portalId || "139617067",
    formId: hubspotConfig.formId || "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
    target: "#my-hubspot-form",
    locale: HubSpotFormLocale[langForHubspot],
    onFormSubmit: (form) => {
      if (hubspotConfig.onSubmit) {
        const data = new FormData(form);
        hubspotConfig.onSubmit(Object.fromEntries(data) as FormFields);
      }
    },

    translations: {
      fr: {
        fieldLabels: {
          email: "Адрес электронной почты",
          firstname: "Имя",
          lastname: "Фамилия",
          phone: "Телефон",
        },
        submitText: "Регистрация",
      },
      fi: {
        // eslint-disable-next-line quotes
        fieldLabels: {
          email: "Електронна адреса",
          firstname: "Ім'я",
          lastname: "Прізвище",
          phone: "Телефон",
        },
        submitText: "Реєстрація",
      },
      da: {
        // eslint-disable-next-line quotes
        fieldLabels: {
          email: "Địa chỉ email",
          firstname: "Tên",
          lastname: "Họ",
          phone: "Điện thoại",
        },
        submitText: "Đăng ký",
      },
    },
    onFormReady: async () => {
      if (containerRef.current) {
        const form = containerRef.current.firstChild;
        (form as HTMLFormElement).setAttribute("autocomplete", "off");
        const formChildrens = form?.childNodes;
        if (!formChildrens) {
          return;
        }
        const utmObject = JSON.parse(localStorage.getItem("utmObject") ?? "{}");

        const formChildrensArray = Array.from(formChildrens);
        for (const child of formChildrensArray) {
          if (child.nodeType === Node.ELEMENT_NODE) {
            if ((child as HTMLElement).className.includes("hs-submit")) {
              const button = child.lastChild?.lastChild;
              if (button) {
                if (buttonColor) {
                  (button as HTMLElement).style.background = buttonColor;
                }
                if (withoutHubspot) {
                  (button as HTMLButtonElement).onclick = (e) => {
                    e.preventDefault();
                    if (!Object.keys(errorsRef.current).length) {
                      if (hubspotConfig.onSubmit) {
                        const data = new FormData(form as HTMLFormElement);
                        const formData = Object.fromEntries(data) as FormFields;
                        if (
                          !formData.lastname ||
                          !formData.firstname ||
                          !formData.email ||
                          !formData.phone
                        ) {
                          console.log("no data");
                          return;
                        }
                        hubspotConfig.onSubmit(formData);
                        setIsSubmitted(true);
                      }
                    }
                  };
                }
              }
            }
            if ((child as HTMLElement).className.includes("hs-form-field")) {
              const label = child.firstChild as HTMLLabelElement;
              const input = child.lastChild?.firstChild as HTMLInputElement;
              if (!input) return;

              input.setAttribute("autocomplete", "off");

              if (input.name === "phone" && child.lastChild) {
                hubspotPhoneInputRef.current = input;
                input.style.display = "none";
                label.style.display = "none";

                const phoneInputDOMElement =
                  document.getElementsByClassName("react-tel-input")[0];
                child.lastChild.appendChild(phoneInputDOMElement);
                const phoneInputDOMElementChildrenArray = Array.from(
                  phoneInputDOMElement.children
                );
                for (const phoneInputChild of phoneInputDOMElementChildrenArray) {
                  (phoneInputChild as HTMLElement).style.display = "flex";
                }
              }

              if (input.name === "url" && child.lastChild) {
                if (typeof window !== "undefined") {
                  input.value = window.location.href;
                }
              }

              if (input.name === "utm_term" && child.lastChild) {
                input.value = utmObject["utm_term"] ?? "";
              }
              if (input.name === "utm_source" && child.lastChild) {
                input.value = utmObject["utm_source"] ?? "";
              }
              if (input.name === "utm_medium" && child.lastChild) {
                input.value = utmObject["utm_medium"] ?? "";
              }
              if (input.name === "utm_content" && child.lastChild) {
                input.value = utmObject["utm_content"] ?? "";
              }
              if (input.name === "utm_campaign" && child.lastChild) {
                input.value = utmObject["utm_campaign"] ?? "";
              }

              const obsConfig = {
                attributes: true,
                childList: false,
                subtree: false,
              };

              const obsCallback: MutationCallback = (
                mutationList: MutationRecord[]
              ) => {
                for (const mutation of mutationList) {
                  if (mutation.type === "attributes") {
                    const target = mutation.target as HTMLElement;
                    const isInvalidValue = target.className.includes("error");
                    if (isInvalidValue) {
                      if (label.className.includes("label_error")) return;
                      label.className += ` ${styles.label_error}`;
                      errorsRef.current[
                        (mutation.target as HTMLInputElement).name
                      ] = true;
                      return;
                    }

                    delete errorsRef.current[
                      (mutation.target as HTMLInputElement).name
                    ];
                    label.className = label.className.replace(
                      styles.label_error,
                      ""
                    );
                  }
                }
              };

              const observer = new MutationObserver(obsCallback);

              observer.observe(input, obsConfig);

              input.addEventListener("change", (e: Event) => {
                if ((e.target as HTMLInputElement).value !== "") {
                  label.className = styles.label_top;
                  return;
                }
                label.className = "";
              });
            }
          }
        }
      }
    },

    onFormSubmitted: () => {
      setIsSubmitted(true);
    },
    cssClass: styles.form,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const phoneCountries = ["ua", "cz", "kz", "kg", "az", "ee", "ae", "se", ""];
  const onChangePhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(`+${phoneNumber}`);
  };

  useEffect(() => {
    if (hubspotPhoneInputRef.current) {
      hubspotPhoneInputRef.current.value = phoneNumber;
    }
  }, [phoneNumber]);

  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        borderRadius: "1.25rem",
        minHeight: {
          xs: "322px",
          sm: "412px",
        },
        zIndex: "1",
      }}
    >
      <Stack
        sx={{
          padding: { xs: "1.75rem 1rem", sm: "2.25rem 1.5rem" },
          paddingBottom: "1.75rem",
          minHeight: "inherit",
          display: isSubmitted ? "none" : "flex",
        }}
      >
        <Box
          ref={containerRef}
          width={"100%"}
          sx={{
            my: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1.25rem",
          }}
          id="my-hubspot-form"
        >
          {!loaded && <CircularProgress color="warning" />}
        </Box>

        <Box
          ref={phoneInputRef}
          component={PhoneInput}
          inputClass={styles.phoneInput}
          buttonClass={styles.phoneInput_button}
          specialLabel=""
          preferredCountries={phoneCountries}
          preserveOrder={["preferredCountries"]}
          excludeCountries={language === "uk" ? ["ru"] : []}
          // excludeCountries={["ru"]}
          // country={language === "uk" ? "ua" : "ru"}
          country={
            translations.language === "uk"
              ? "ua"
              : translations.language === "ru"
              ? "ru"
              : translations.language === "vi"
              ? "vn"
              : "us"
          }
          onChange={onChangePhoneNumber}
          value={phoneNumber}
          localization={
            language === "ru" ? ru : language === "vi" ? vi : undefined
          }
        />

        {loaded && !isSubmitted && (
          <>
            <Typography
              variant={"body1"}
              color={"text.secondary"}
              fontSize={"0.875rem"}
              marginTop={"1rem"}
              display={{ xs: "none", sm: "block" }}
            >
              {translations.content.acceptTerms}
            </Typography>
            <Typography
              variant={"caption"}
              color={"text.secondary"}
              marginTop={".75rem"}
              display={{ xs: "block", sm: "none" }}
            >
              {translations.content.acceptTerms}
            </Typography>
          </>
        )}
      </Stack>

      {isSubmitted && <FinishView translations={translations} />}
    </Box>
  );
};
