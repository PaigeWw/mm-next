import React, { useState } from "react";
import { Flex, Text, Box, Button, Image } from "rebass";
import Router from "next/router";

import { baseUrl } from "../utils/helper";
const SelectButton = (props) => (
  <Button
    variant="primary"
    height="0.45rem"
    width="2rem"
    bg="#000000"
    color="#ffffff"
    mt={"5.8%"}
    padding="0"
    sx={{
      borderRadius: 0,
      fontSize: "0.14rem",
      "&:hover": {
        background: "#FF8E6C",
      },
    }}
    onClick={() => {
      props.onSelect();
    }}
  >
    {props.text}
  </Button>
);

export default (props) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <Box
      width="calc(100% - 0.1rem)"
      height="calc(100vh - 250px)"
      p="0.05rem"
      mb="50px"
      sx={{
        overflow: "hidden",
        filter: "grayscale(100%)",
        "&:hover": {
          filter: "none",
        },
      }}
    >
      <Flex alignItems="baseline" p="0.2rem 0.9rem" justifyContent="center">
        <Text fontSize="0.22rem">{props.aliasName}</Text>
      </Flex>
      <Flex
        width={[1]}
        height="100%"
        sx={{
          position: "relative",
        }}
        onMouseOver={(e) => {
          setShowSelect(true);
        }}
        onMouseLeave={(e) => {
          setShowSelect(false);
        }}
      >
        {showSelect ? (
          <Flex
            bg="rgba(0,0,0,0)"
            width="100%"
            height="100%"
            justifyContent={props.pick ? "space-evenly" : "center"}
            alignItems="center"
            sx={{ position: "absolute" }}
          >
            <SelectButton
              // text="INDEPENDENT MATCH"
              text="自主搭配"
              onSelect={() => {
                window.localStorage.setItem("curGood", props.item);
                Router.push(`/select?id=${props._id}`);
              }}
            />
            {props.pick ? (
              <SelectButton
                text="挑选现款"
                onSelect={() => {
                  Router.push(`/pick`);
                }}
              />
            ) : null}
          </Flex>
        ) : null}
        <Image
          width={[1, 1]}
          src={baseUrl + props.imgUrl}
          sx={{ objectFit: "cover" }}
        />
      </Flex>
    </Box>
  );
};
