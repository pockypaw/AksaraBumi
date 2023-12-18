"use client";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Characters = ({ img, name, specialization, features, link }) => {
  const CharactersBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <CharactersBox>
      <ImgContainer>
        <Image
          src={img}
          alt="Characters Photos"
          style={{ width: "350px", height: "300px", borderRadius: "15px 50px" }}
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {specialization}
        </Typography>
        <Link href={String(link)}>
          <CustomButton
            backgroundColor="#17275F"
            color="#fff"
            buttonText={features}
            getStartedBtn={true}
          />
        </Link>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></Box>
      </Box>
    </CharactersBox>
  );
};

export default Characters;
