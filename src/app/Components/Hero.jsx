"use client";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { styled } from "@mui/material/styles";
import heroImg from "./../../../public/media/hero_illustration.png";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    marginBottom: "30px",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
    color: "#633603",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#ffcb90", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#f58300",
                fontWeight: "500",

                mb: 4,
              }}
            >
              Halo, mari mengenal
            </Typography>
            <Title variant="h1">
              Warisan Kata - Menggali Kekayaan Budaya Lewat Aplikasi Aksara Bumi
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#633603", my: 4 }}
            >
              Platform AI tutor seperti Aksara Bumi dapat menjadi jendela yang
              menghadirkan warisan budaya melalui pengajaran bahasa daerah.
              Dengan menggunakan teknologi kecerdasan buatan (AI), platform ini
              membantu pengguna dalam belajar, memahami, dan merawat kekayaan
              bahasa daerah yang sering kali terabaikan.
            </Typography>
            <Link href="#second-section" scroll={true}>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Pelajari lebih lanjut"
                heroBtn={true}
                style={{ marginBottom: "20px" }}
              />
            </Link>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <Image
              src={heroImg}
              alt="Picture of the author"
              style={{ margin: "5.5rem", borderRadius: "15px 50px" }}
              width={500}
              height={500}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
