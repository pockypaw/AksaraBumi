"use client";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "./../../../public/media/fbicon.png";
import twitterIcon from "./../../../public/media/twittericon.png";
import linkedinIcon from "./../../../public/media/linkedinicon.png";
import { styled } from "@mui/material/styles";

import Image from "next/image";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer id="fourth-section">
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
                textAlign: "center",
              }}
            >
              dibuat dengan senang hati ❤
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Muhamad Ridho Ardian
            </Typography>

            <IconBox>
              <Image
                src={fbIcon}
                style={{ maxWidth: "100%" }}
                alt="Picture of the author"
              />
              <Image
                src={twitterIcon}
                style={{ maxWidth: "100%" }}
                alt="Picture of the author"
              />
              <Image
                src={linkedinIcon}
                style={{ maxWidth: "100%" }}
                alt="Picture of the author"
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
