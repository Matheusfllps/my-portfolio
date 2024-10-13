import { styled } from "@mui/material";

import { ReactNode } from "react";

interface styledButtonProps {
  children: ReactNode;
}

const StyledButoon: React.FC<styledButtonProps> = ({ children }) => {
  const StyledButoon = styled("button")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));
  return <StyledButoon>{children}</StyledButoon>;
};

export default StyledButoon;
