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
import { InputLabel, MenuItem, Select } from "@mui/material";

export type HubspotFormTranslations = {
  language: "en" | "ru" | "uk" | "vi";

  button?: string;
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
  accentColor?: "primary" | "warning" | "error";
};

const obsConfig = {
  attributes: true,
  childList: false,
  subtree: false,
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
  accentColor = "warning",
}) => {
  const { language } = translations;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errorsRef = useRef<{ [key: string]: boolean }>({});
  const hubspotPhoneInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const formClass = `form_${accentColor}`;

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
                if (translations.button) {
                  (button as HTMLInputElement).value = translations.button;
                }
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

                const obsCallback: MutationCallback = (
                  mutationList: MutationRecord[]
                ) => {
                  const firstChild =
                    phoneInputDOMElement.firstChild as HTMLElement;
                  for (const mutation of mutationList) {
                    if (mutation.type === "attributes") {
                      const target = mutation.target as HTMLElement;
                      const isInvalidValue = target.className.includes("error");
                      if (isInvalidValue) {
                        if (firstChild.className.includes("error")) return;
                        firstChild.className += " error";
                        errorsRef.current[
                          (mutation.target as HTMLInputElement).name
                        ] = true;
                        return;
                      }

                      delete errorsRef.current[
                        (mutation.target as HTMLInputElement).name
                      ];
                      firstChild.className = firstChild.className.replace(
                        "error",
                        ""
                      );
                    }
                  }
                };

                const observer = new MutationObserver(obsCallback);

                observer.observe(input, obsConfig);
              }

              if (input.name === "preferred_study_area" && child.lastChild) {
                input.style.display = "none";
                label.style.display = "none";

                selectRef.current = input as unknown as HTMLSelectElement;
                const optionsFromHs: string[] = [];
                for (const option of selectRef.current.options) {
                  if (!option.value) continue;
                  optionsFromHs.push(option.value);
                }
                setOptions(optionsFromHs);
                const selectElement =
                  document.getElementById("selectContainer");
                if (selectElement) {
                  child.lastChild.appendChild(selectElement);
                  selectElement.style.display = "flex";
                }

                const obsCallback: MutationCallback = (
                  mutationList: MutationRecord[]
                ) => {
                  const selectBorderContainer = selectElement?.lastElementChild
                    ?.lastElementChild as HTMLElement;
                  for (const mutation of mutationList) {
                    if (mutation.type === "attributes") {
                      const target = mutation.target as HTMLElement;
                      const isInvalidValue = target.className.includes("error");
                      if (isInvalidValue) {
                        if (selectBorderContainer.className.includes("error"))
                          return;
                        selectBorderContainer.className += ` ${" error"}`;
                        errorsRef.current[
                          (mutation.target as HTMLInputElement).name
                        ] = true;
                        return;
                      }

                      delete errorsRef.current[
                        (mutation.target as HTMLInputElement).name
                      ];
                      selectBorderContainer.className =
                        selectBorderContainer.className.replace("error", "");
                    }
                  }
                };

                const observer = new MutationObserver(obsCallback);

                observer.observe(input, obsConfig);
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
    cssClass: `${styles.form} ${styles[formClass]}`,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const phoneCountries = ["ua", "cz", "kz", "kg", "az", "ee", "ae", "se", ""];
  const onChangePhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(`+${phoneNumber}`);
  };

  const simulateInputChange = (
    value: string,
    ref: HTMLInputElement,
    event = "input"
  ) => {
    const input = ref;
    if (input) {
      input.value = value;
      input.dispatchEvent(new Event(event, { bubbles: true }));
    }
  };

  const simulateSelectInputChange = (
    value: string,
    ref: HTMLSelectElement,
    event = "change"
  ) => {
    const input = ref;
    if (input) {
      if ((window as any).test) {
        console.log("index");
        input.selectedIndex = options.findIndex((item) => item === value) + 1;
      } else {
        input.value = value;
      }
      input.dispatchEvent(new Event(event, { bubbles: true }));
    }
  };

  useEffect(() => {
    if (hubspotPhoneInputRef.current) {
      simulateInputChange(phoneNumber, hubspotPhoneInputRef.current);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.style.display = "flex";
      simulateSelectInputChange(selectedValue, selectRef.current, "change");
      console.log(selectRef.current);
    }
  }, [selectedValue]);

  const [isSelectOpen, setIsSelectOpen] = useState(false);

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
          {!loaded && <CircularProgress color={accentColor} />}
        </Box>

        <Box
          ref={phoneInputRef}
          component={PhoneInput}
          inputClass={styles.phoneInput}
          inputStyle={{ display: "none" }}
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
              ? "kz"
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

        <Box
          className={styles.input}
          id="selectContainer"
          sx={{ display: "none" }}
        >
          <InputLabel
            id="select-label"
            sx={{ backgroundColor: "white", zIndex: "10" }}
            className={styles.label_top}
          >
            Preferred Study Area*
          </InputLabel>
          <Select
            displayEmpty
            renderValue={(selected: string) => {
              if (!selected) {
                return <Box component="span">Please select</Box>;
              }

              return selected;
            }}
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            onClose={() => {
              setIsSelectOpen(false);
            }}
            onOpen={() => {
              setIsSelectOpen(true);
            }}
            id="select"
            // label='Age'
            color="warning"
            sx={{
              // '&:focus fieldset': { borderColor: '#ed6c02 !important' },
              "& fieldset": {
                border: isSelectOpen
                  ? "2px solid #ed6c02 !important"
                  : "2px solid rgba(237, 108, 2, 0.5) !important",
                borderWidth: "2px",
                maxWidth: "unset !important",
              },
            }}
          >
            <MenuItem value="" disabled>
              Please select
            </MenuItem>
            {options.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>

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
