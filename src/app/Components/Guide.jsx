"use client";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="second-section"
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Bagaimana cara menggunakannya?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Pengguannnya cukup mudah dimulai dari memilih tutor bahasa kemudian
          anda akan melakukan percakapan
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <TranslateIcon color="primary" sx={{ fontSize: 50 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Kuasai yang diinginkan
          </Typography>
       
        </GuideBox>

        <GuideBox>
          <SmartToyIcon color="primary" sx={{ fontSize: 50 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Pilih tutor bahasa AI
          </Typography>
       
        </GuideBox>

        <GuideBox>
          <QuestionAnswerIcon color="primary" sx={{ fontSize: 50 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Lakukan percapakan
          </Typography>
        
        </GuideBox>
      </GuidesBox>
      <Link href="#third-section" scroll={true}>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Mulai Sekarang"
          guideBtn={true}
        />
      </Link>
    </Box>
  );
};

export default Guide;
