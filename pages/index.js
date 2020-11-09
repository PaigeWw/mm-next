import React, { useEffect, useState } from "react";
import { Flex, Text, Box, Button, Image } from "rebass";
import useUserInfo from "../hooks/getUserInfo";
import Head from "../components/nav";
import SelectBox from "../components/main-kind-box";
import dynamic from "next/dynamic";

const SliderComponentWithNoSSR = dynamic(import("../components/carousel"), {
    ssr: false,
});

import request from "../utils/request.js";
export default () => {
    const info = useUserInfo();
    const [goosList, setgoosList] = useState([]);
    const [settings, setSettings] = useState({});
    // console.log("test test test test")
    useEffect(() => {
        const getGoodsList = async () => {
            const req = await request("goods/getVisibleList");
            if (req) {
                setgoosList(req);
            }
            // console.log(req)
        };
        getGoodsList();
    }, [info]);

    useEffect(() => {
        // const settings =
        setSettings({
            // className: "center",
            // centerMode: true,
            infinite: goosList.length > 3 ? true : false,
            centerPadding: "0px",
            initialSlide: 0,
            slidesToShow: 3,
            swipeToSlide: true,
            slidesToScroll: 3,
            speed: 1000,
            afterChange: (index) => {
                console.log(index);
            },
        });
        // settings.slidesToShow =
    }, [goosList]);
    return (
        <React.Fragment>
            <Flex
                height="100vh"
                justifyContent="space-between"
                flexDirection="column"
            >
                <Head progress={0}></Head>
                <Flex
                    height="calc(100vh - 200px)"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box height="100%" width="calc(100% - 1.2rem)">
                        {goosList.length > 0 ? (
                            <SliderComponentWithNoSSR responsive={true} settings={settings}>
                                {goosList.map((item) => (
                                    <SelectBox {...item} item={item} pick={info.role !== 1} />
                                ))}
                            </SliderComponentWithNoSSR>
                        ) : null}
                    </Box>
                </Flex>
            </Flex>
        </React.Fragment>
    );
};
