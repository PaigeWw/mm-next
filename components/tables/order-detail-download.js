import React, { useState, useEffect } from "react"
import { Flex, Text, Box, Button, Row, Column } from "rebass"
import Table, { TableLine, ProductInfo } from "./base-table"
import StyleItem from "../commons/min-style-item-download"
import Loading from "../commons/loading"
import _ from "lodash"
import request from "../../utils/request"
import svg2pngFile from "../../utils/new.svg2pngFile"
import { filterImageUrl, downloadUrl } from "../../utils/helper"

export default (props) => {
    const [isDownloading, setIsDownloading] = useState(true)
    const [styleSvgIdMap, setStyleSvgIdMap] = useState({})
    let tempStyleSvgIdMapCount = {}

    const stylesImageInfoList = []
    const { OrderDetail, rate = { val: 1, sign: "¥" } } = props
    // const line = props.OrderDetail.orderData.length
    // 
    const handlePngLoaded = ({ colorUrl }) => {
        if (!styleSvgIdMap[colorUrl]) {
            styleSvgIdMap[colorUrl] = 1
        } else {
            styleSvgIdMap[colorUrl]++
        }

        setStyleSvgIdMap({ ...styleSvgIdMap })
    }

    let tempStyleGroupList = []
    const [orderData, setOrderData] = useState(OrderDetail.orderData)
    let sizeInfoMaxLength = 0
    let titleIndex = 0
    // let styleImageColorCount = 0
    orderData.map((group) => {
        if (!group.size) {
            group.size = { values: [] }
        }
        sizeInfoMaxLength =
            sizeInfoMaxLength > group.size.values.length
                ? sizeInfoMaxLength
                : group.size.values.length
        let sizeVal = group.size.values.map((v) => v.name)

        tempStyleGroupList.push({
            type: "title",
            packageCount: group.packageCount,
            packageCount: group.styleNos,
            sizeVal: sizeVal,
            cnts: group.cnts,
            index: titleIndex,
            key: group.styleNos,
            styleNos: group.styleNos,
            count: group.items.length,
        })
        titleIndex += group.items.length + 1
        group.items.map((item, index) => {
            let styleList = []
            let price = []
            let prodInfo = []
            item.favorite.styleAndColor.map((x) => {
                if (!x.styleId) return
                price.push(x.styleId.price)
                let text = ""
                x.colorIds.map((color, index) => {
                    if (index) {
                        text += "/"
                    }
                    text = color.code
                    if (color.type) {
                        let colorUrl = `${item.favorite}-${x.styleId}-${color.value}`
                        if (!tempStyleSvgIdMapCount[colorUrl]) {
                            tempStyleSvgIdMapCount[colorUrl] = 1
                        } else {
                            tempStyleSvgIdMapCount[colorUrl]++
                        }


                    }
                })
                prodInfo.push({
                    styleNo: x.styleId.styleNo,
                    categoryName: x.styleId.categoryName,
                    color: text,
                    id: x.styleId._id,
                })
                // let positive = x.
                stylesImageInfoList.push({
                    fsId: `${item.favorite._id}-${x.styleId._id}`,
                    shadowUrl: x.styleId.shadowUrl,
                    shadowUrlBack: x.styleId.shadowUrlBack,
                })
                styleList.push({ style: x.styleId, colors: x.colorIds })
            })
            tempStyleGroupList.push({
                ...item,
                id: item._id,
                styleList,
                price,
                prodInfo,
                sizeVal: sizeVal,
                isFrist: index === 0,
                itemsCount: group.items.length,
                packageCount: group.packageCount,

                cnts: group.cnts,
            })
        })
    })
    const [styleSvgIdMapCount, setStyleSvgIdMapCount] = useState(tempStyleSvgIdMapCount)
    // setStyleSvgIdMapCount({ ...tempStyleSvgIdMapCount })
    const [styleGroupList, setStyleGroupList] = useState(tempStyleGroupList)

    const getInsertEmptyDom = (length) => {
        let tempNum = sizeInfoMaxLength - length
        let insertEmpty = []
        for (let i = 0; i < tempNum; i++) {
            insertEmpty.push("")
        }
        return insertEmpty.map((i) => <Text></Text>)
    }
    let titleCount = 0;

    const uploadStyleImage = async (svgString, imgUrl) => {
        const { file, height } = await svg2pngFile(svgString, imgUrl)
        // /api/common/uploadkit
        const res = await request(
            "/common/upload",
            { file },
            "post"
        )
        return { url: res.url, height }
    }
    const getFileUrl = async (query) => {
        const res = await request("/order/postDownload", query, 'post')
        if (res) {
            window.open(`${downloadUrl}${res.url}`)
            setStyleSvgIdMap({})
            props.onClose()
        }
    }
    const handleDownload = async () => {
        // getFileUrl()
        // return;
        let orderItemImages = {}
        for (let i = 0; i < stylesImageInfoList.length; i++) {
            const { fsId, shadowUrl } = stylesImageInfoList[i]
            let svgDom = document.getElementById(`${fsId}-front`)
            if (svgDom) {
                let svgString = document.getElementById(`${fsId}-front`).outerHTML
                const res = await uploadStyleImage(svgString, shadowUrl)

                // let svgString2 = document.getElementById(`${fsId}-back`).outerHTML
                // const res2 = await uploadStyleImage(svgString2, shadowUrlBack)

                orderItemImages[fsId] = {
                    frontImageUrl: res.url,
                    // backImageUrl: res2.url,
                    frontHeight: res.height,
                    // backHeight: res2.height,
                }
            }


            // console.log('handleDownload', res2, res)
        }
        // console.log('OrderDetail', OrderDetail)
        getFileUrl({
            _id: OrderDetail._id,
            rateSign: rate.sign,
            rateVal: rate.val,
            orderItemImages,
            file: ''
        })
    }

    useEffect(() => {
        // console.log('styleImageColorCount', Object.keys(styleSvgIdMapCount).length)
        // console.log('Object.keys(styleSvgIdMap).length', Object.keys(styleSvgIdMap).length)
        if (Object.keys(styleSvgIdMap).length >= Object.keys(styleSvgIdMapCount).length && isDownloading) {
            setIsDownloading(false)
            setTimeout(() => {
                handleDownload()
            }, 1500)

        }
    }, [styleSvgIdMap])
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            sx={{
                cursor: "pointer",
                height: "100%",
                width: "100%",
            }}
        >
            <Flex flexDirection="column" justifyContent='center' alignItems='center' bg="#fff" sx={{
                height: "100%",
                width: "100%",
                position: 'absolute',
                top: 0,
                bottom: 0,
                zIndex: 99,
            }}>
                <Loading type="loading5 black" />
                正在生成订单文件...
            </Flex>
            <Box
                sx={{
                    padding: "0 18px 18px 18px",
                    height: "max-content",
                    width: "800px",
                    display: "table",
                }}
            >
                <Table
                    id={"one-order-detail"}
                    hasBorder={"1px solid"}
                    sx={{
                        margin: "0",
                        marginRight: "1px",
                        width: "100%",
                        "&": {
                            th: {
                                padding: "14px",
                            },
                        },
                    }}
                    titles={[
                        { name: "00", width: "2/22", isHide: true },
                        { name: "样衣编号", width: "2/22" },
                        { name: "颜色", width: "4/22" },
                        { name: "图片", width: "1/22" },
                        { name: "尺码/配比", width: "2/22", colspan: sizeInfoMaxLength },
                        { name: "中包数", width: "2/22" },
                        { name: "箱数", width: "2/22" },
                        { name: "件数", width: "2/22" },
                        { name: `单价/${rate.sign}`, width: "4/22" },
                        { name: `总价/${rate.sign}`, width: "1/22" },
                    ]}
                >
                    {styleGroupList.map((item, index) => {
                        item.type === "title" ? titleCount++ : null
                        return item.type === "title" ? (
                            <TableLine gary noEdit key={`selectline-keys-${index}`}>
                                <Box colspan="4">{}</Box>
                                <Flex colspan={sizeInfoMaxLength} justifyContent="center">
                                    {item.sizeVal.join("/")}
                                </Flex>
                                <Box colspan="5"></Box>
                            </TableLine>
                        ) : (
                                <>
                                    <TableLine noEdit key={`selectline-${item._id}`}>
                                        <Text rowspan={2} hasBorder={"1px solid"}>
                                            {index - titleCount + 1}
                                        </Text>
                                        <Flex justifyContent="center" rowspan={2}>
                                            <Box margin="8px 0">
                                                {item.favorite.styleAndColor.map((x) => {
                                                    return (
                                                        <Text
                                                            fontSize="0.18rem"
                                                            style={{
                                                                lineHeight: "0.34rem",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            {x.styleId.styleNo}
                                                        </Text>
                                                    )
                                                })}

                                                {/* <ProductInfo styleNum="VERSION K2009" made="2110 YE GREEN" /> */}
                                            </Box>
                                        </Flex>
                                        <Flex
                                            rowspan={2}
                                            flexDirection="column"
                                            hasBorder={"1px solid"}
                                        >
                                            {item.favorite.styleAndColor.map((x) => {
                                                //     white-space: nowrap;
                                                return x.colorIds.map((c) => (
                                                    <Text
                                                        fontSize="0.14rem"
                                                        style={{
                                                            lineHeight: "0.34rem",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        {c.code}
                                                    </Text>
                                                ))
                                            })}
                                        </Flex>
                                        {props.imgToUrl ? (
                                            <a
                                                rowspan={2}
                                                href={`${window.location.origin}/demo?id=${item.favorite._id}&rid=${OrderDetail._id}`}
                                            >
                                                款式图
                                            </a>
                                        ) : (
                                                <StyleItem
                                                    onPngLoaded={handlePngLoaded}
                                                    rowspan={2}
                                                    hasBorder={"1px solid"}
                                                    margin={"1px"}
                                                    key={`${index}-style-img`}
                                                    favoriteId={item.favorite._id}
                                                    styleList={item.favorite.styleAndColor.map((x) => {
                                                        // styleList.push({ style: x.style, colors: x.colorIds })
                                                        return { style: x.styleId, colors: x.colorIds }
                                                    })}
                                                    index={index}
                                                    tool={false}
                                                />
                                            )}

                                        {item.sizeVal.map((size) => (
                                            <Flex
                                                flexDirection="column"
                                                hasBorder={"1px solid"}
                                                width="max-content"
                                            >
                                                <Text p="6px">{size}</Text>
                                            </Flex>
                                        ))}
                                        {getInsertEmptyDom(item.sizeInfo.length)}
                                        {!item.isFrist ? null : (
                                            <Flex
                                                rowspan={item.itemsCount * 2}
                                                hasBorder={"1px solid"}
                                                justifyContent="center"
                                                alignItems="center"
                                                sx={{ width: "100%", height: "100%" }}
                                            >
                                                <Text>{item.packageCount}</Text>
                                            </Flex>
                                        )}
                                        {!item.isFrist ? null : (
                                            <Flex
                                                rowspan={item.itemsCount * 2}
                                                hasBorder={"1px solid"}
                                                justifyContent="center"
                                                alignItems="center"
                                                sx={{ width: "100%", height: "100%" }}
                                            >
                                                <Text>{item.cnts}</Text>
                                            </Flex>
                                        )}
                                        <Text rowspan={2} hasBorder={"1px solid"}>
                                            {item.total}
                                        </Text>
                                        <Flex
                                            rowspan={2}
                                            hasBorder={"1px solid"}
                                            flexDirection="column"
                                        >
                                            {item.favorite.styleAndColor.map((x) => (
                                                <Text>{(x.styleId.price * rate.val).toFixed(2)}</Text>
                                            ))}
                                        </Flex>
                                        <Text rowspan={2} hasBorder={"1px solid"}>
                                            {(item.totalPrice * rate.val).toFixed(2)}
                                        </Text>
                                    </TableLine>
                                    <TableLine noEdit key={`selectline-1-${item._id}`}>
                                        {item.sizeInfo.map((info) => (
                                            <Flex justifyContent="center" hasBorder={"1px solid"}>
                                                <Text p="6px">{info}</Text>
                                            </Flex>
                                        ))}
                                        {getInsertEmptyDom(item.sizeInfo.length)}
                                    </TableLine>
                                </>
                            )
                    })}
                </Table>
            </Box>
        </Flex>
    )
}
