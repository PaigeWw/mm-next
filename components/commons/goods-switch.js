import React, { useEffect, useState } from "react"
import { Flex, Text } from "rebass"
import request from "../../utils/request.js"

export default (props) => {
    const { goodId, onChangeGood, pb, onLoadGoods } = props
    const [goodsList, setGoodsList] = useState([])
    useEffect(() => {
        const getGoodsList = async () => {
            const req = await request("goods/getVisibleList", "get")
            if (req) {
                setGoodsList(req)

                let curGood = {}
                if (Array.isArray(req) && req.length > 0) {
                    console.log('goodId', goodId)

                    if (goodId) {
                        curGood = req.find((x) => x._id === goodId)
                        console.log('curGood', curGood)
                        // onChangeGood(curGood._id, curGood.name)
                    } else {
                        curGood = req[0]
                        console.log('curGood', curGood)
                        onLoadGoods && onLoadGoods(curGood)
                    }
                }
            }

            // console.log(req)
        }

        getGoodsList()
    }, [])

    useEffect(() => {
        console.log(goodId)
    }, [goodId])
    return (
        <Flex
            justifyContent="center"
            bg="#FFD6CA"
            mt="30px"
            pt="30px"
            pb={pb}
            sx={{
                position: "relative",
                display: "block",
                margin: "0 auto",
                width: "100vw",
                color: "#000",
                verticalAlign: "middle",
                textAlign: "left",
                userSelect: "none",
            }}
        >
            {goodsList.map((option, index) => (
                <Text
                    fontSize="0.22rem"
                    pl="10px"
                    // p="10px"
                    sx={{
                        lineHeight: "0.22rem",
                        cursor: "pointer",
                        borderLeft: index ? "1px solid #000" : "none",
                        fontWeight: option._id === goodId ? "bold" : "normal",
                        color: "#000",
                    }}
                    ml="10px"
                    onClick={() => {
                        onChangeGood(option._id, option.name)
                    }}
                >
                    {option.aliasName}
                </Text>
            ))}
        </Flex>
    )
}
