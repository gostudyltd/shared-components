import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const InstIcon: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box
      component={"svg"}
      width="17px"
      height="17px"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
    >
      <path
        d="M8.79983 0.5C6.62714 0.5 6.3547 0.509217 5.50141 0.548134C4.6499 0.58698 4.06836 0.722237 3.55948 0.919966C3.03341 1.12441 2.58727 1.39797 2.14254 1.84271C1.69778 2.28744 1.42422 2.73363 1.21979 3.2597C1.02202 3.76855 0.886808 4.3501 0.847915 5.2016C0.808998 6.05489 0.799805 6.32734 0.799805 8.50002C0.799805 10.6727 0.808998 10.9451 0.847915 11.7984C0.886808 12.6499 1.02202 13.2314 1.21979 13.7403C1.42424 14.2664 1.6978 14.7125 2.14254 15.1573C2.5873 15.602 3.03341 15.8756 3.55948 16.08C4.06836 16.2778 4.6499 16.413 5.50141 16.4519C6.3547 16.4908 6.62714 16.5 8.79983 16.5C10.9725 16.5 11.2449 16.4908 12.0982 16.4519C12.9497 16.413 13.5312 16.2778 14.0401 16.08C14.5662 15.8756 15.0123 15.602 15.4571 15.1573C15.9018 14.7125 16.1754 14.2664 16.3798 13.7403C16.5776 13.2314 16.7128 12.6499 16.7517 11.7984C16.7906 10.9451 16.7998 10.6727 16.7998 8.50002C16.7998 6.32734 16.7906 6.05489 16.7517 5.2016C16.7128 4.3501 16.5776 3.76855 16.3798 3.2597C16.1754 2.73363 15.9018 2.28744 15.4571 1.84271C15.0123 1.39797 14.5662 1.12441 14.0401 0.919966C13.5312 0.722237 12.9497 0.58698 12.0982 0.548134C11.2449 0.509217 10.9725 0.5 8.79983 0.5ZM8.79983 1.94143C10.9359 1.94143 11.1889 1.9496 12.0325 1.98809C12.8125 2.02365 13.2361 2.15397 13.518 2.26353C13.8914 2.40867 14.1579 2.58201 14.4378 2.86196C14.7178 3.1419 14.8911 3.40842 15.0363 3.78182C15.1458 4.06372 15.2762 4.48733 15.3117 5.26731C15.3502 6.11089 15.3584 6.36392 15.3584 8.5C15.3584 10.6361 15.3502 10.8891 15.3117 11.7327C15.2762 12.5127 15.1458 12.9363 15.0363 13.2182C14.8911 13.5916 14.7178 13.8581 14.4378 14.138C14.1579 14.418 13.8914 14.5913 13.518 14.7365C13.2361 14.846 12.8125 14.9764 12.0325 15.0119C11.1891 15.0504 10.9361 15.0586 8.7998 15.0586C6.66356 15.0586 6.4106 15.0504 5.56712 15.0119C4.78711 14.9764 4.36352 14.846 4.08165 14.7365C3.7082 14.5913 3.44171 14.418 3.16179 14.138C2.88184 13.8581 2.70848 13.5916 2.56334 13.2182C2.45378 12.9363 2.32348 12.5127 2.28789 11.7327C2.2494 10.8891 2.24124 10.6361 2.24124 8.5C2.24124 6.36392 2.2494 6.11089 2.28789 5.26731C2.32348 4.48731 2.45378 4.06372 2.56334 3.78184C2.70848 3.40839 2.88184 3.1419 3.16176 2.86198C3.44171 2.58201 3.70822 2.40867 4.08163 2.26353C4.36352 2.15397 4.78713 2.02365 5.56712 1.98809C6.41069 1.9496 6.66373 1.94143 8.7998 1.94143"
        fill="#FF6D00"
      />
      <path
        d="M8.79856 11.1666C7.32576 11.1666 6.13186 9.97274 6.13186 8.49999C6.13186 7.02719 7.32576 5.83329 8.79856 5.83329C10.2713 5.83329 11.4652 7.02719 11.4652 8.49999C11.4652 9.97274 10.2713 11.1666 8.79856 11.1666ZM8.79856 4.39186C6.52968 4.39186 4.69043 6.23111 4.69043 8.49999C4.69043 10.7688 6.52968 12.6081 8.79856 12.6081C11.0674 12.6081 12.9066 10.7688 12.9066 8.49999C12.9066 6.23111 11.0674 4.39186 8.79856 4.39186ZM14.029 4.22955C14.029 4.75976 13.5991 5.18954 13.069 5.18954C12.5388 5.18954 12.109 4.75976 12.109 4.22955C12.109 3.69936 12.5388 3.26953 13.069 3.26953C13.5991 3.26953 14.029 3.69936 14.029 4.22955Z"
        fill="#FF6D00"
      />
    </Box>
  );
};