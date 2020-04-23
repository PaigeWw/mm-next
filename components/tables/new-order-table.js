import React, { useState, useEffect } from "react";
import { Flex, Text, Box, Button, Row, Column } from "rebass";
import _ from "lodash";
import arrayMove from "array-move";
import { TableLine, ProductInfo, SortableTable, Table } from "./base-table";
import { SortableElement } from "react-sortable-hoc";

import InputNumber from "../number-input";
import request from "../../utils/request";
import StyleItem from "../commons/min-style-item";
import Modal from "../../components/modal";
export default (props) => {
  const { selectStyles, isEditOrder, rate, toast } = props;
  const line = props.selectStyles.length;
  let initData = {
    orderData: [],
    itemsOrderSizeNums: {},
    selectStyles: [...selectStyles],
  };

  if (isEditOrder) {
    return null;
    initData.orderData = selectStyles.map((x, index) => {
      // let sizeInfo = x.details[0].size.values.map(item => ({ ...item, num: 0 }))
      // console.log(x)
      let stylePrice = x.favorite.styleAndColor[0].styleId.price;
      x.favorite.styleAndColor.length > 1
        ? (stylePrice += x.favorite.styleAndColor[1].styleId.price)
        : null;

      let styleList = [];
      let prodInfo = [];
      let price = [];
      x.favorite.styleAndColor.map((item) => {
        styleList.push({
          style: item.styleId,
          colors: item.colorIds,
        });
        let text = "";
        item.colorIds.map((c, index) => {
          if (index > 0) {
            text = text + "/" + c.code;
          } else {
            text = c.code;
          }
        });
        prodInfo.push({
          styleNo: item.styleId.styleNo,
          color: text,
        });
        price.push(item.styleId.price);
      });
      initData.selectStyles[index] = { styleList, prodInfo, price };
      return {
        favoriteId: x.favoriteId,
        sizeInfo: x.sizeInfo,
        total: x.total,
        totalPrice: x.totalPrice,
        signalPrice: stylePrice,
      };
    });
  } else {
    initData.selectStyles.map((x) => {
      // console.log("initData itemsOrderSizeNumsitemsOrderSizeNums");
      initData.itemsOrderSizeNums[x.id] = [0, 0, 0, 0];
    });
  }

  let tempStyleDate = initData.selectStyles.map((s) => {
    s.styleNos = s.prodInfo.map((i) => i.styleNo);
    return s;
  });
  const [itemsOrderSizeNums, setItemsOrderSizeNums] = useState(
    initData.itemsOrderSizeNums
  );

  // const [showOrderDetail, setShowOrderDetail] = useState(false)
  // const [groupOrderDataByStyleNo, setGroupOrderDataByStyleNo] = useState(_.groupBy(initData.orderData))
  const [orderData, setOrderData] = useState(initData.orderData);
  const [styleData, setStyleData] = useState(tempStyleDate);
  const [sizeChartModal, setSizeChartModal] = useState(false);
  let resGroup = _.groupBy(styleData, (x) => x.prodInfo.map((i) => i.styleNo));
  const [styleDataGroupByStyleNo, setStyleDataGroupByStyleNo] = useState(
    resGroup
  );

  let resGroupList = Object.values(resGroup);
  let resGroupKeys = Object.keys(resGroup);
  let tempTitleIndexs = [];
  let tempStyleGroupList = [];
  let tempItemsPackageCount = {};
  for (let i = 0; i < resGroupList.length; i++) {
    tempTitleIndexs = [...tempTitleIndexs, tempStyleGroupList.length];
    tempStyleGroupList = [
      ...tempStyleGroupList,
      {
        type: "title",
        packageCount: 1,
        cnts: 1,
        index: tempTitleIndexs[i],
        key: resGroupKeys[i],
        styleNos: resGroupKeys[i],
        count: resGroupList[i].length,
      },
      ...resGroupList[i],
    ];
  }
  const [titleIndexs, setTitleIndexs] = useState(tempTitleIndexs);
  const [styleGroupList, setStyleGroupList] = useState(tempStyleGroupList);
  const [curSizeArr, setCurSizeArr] = useState(["S", "M", "L", "XL"]);
  const [sizeArrList, setSizeArrList] = useState([
    ["S", "M", "L", "XL"],
    ["30A", "30B", "30C"],
    ["30A", "30B", "30C", "32A", "32B", "32C"],
  ]);

  const [packageCount, setPackageCount] = useState(1);
  const sum = (arr) => {
    var s = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      s += arr[i];
    }
    return s;
  };
  useEffect(() => {
    let temps = curSizeArr.map(() => 0);
    for (var key in itemsOrderSizeNums) {
      itemsOrderSizeNums[key] = [...temps];
    }

    setItemsOrderSizeNums({ ...itemsOrderSizeNums });
  }, [curSizeArr]);

  useEffect(() => {
    let title = {};
    for (let i = 0; i < styleGroupList; i++) {
      styleGroupList[i].type === "title" ? (title = styleGroupList[i]) : null;
      title.total += sum(itemsOrderSizeNums[styleGroupList[i].id]);
    }
    setStyleGroupList([...styleGroupList]);
  }, [itemsOrderSizeNums]);

  const handleChangePackageCount = (num, index) => {
    if (num < 1) return;
    styleGroupList[index].packageCount = num;
    setStyleGroupList([].concat(styleGroupList));
  };

  const handleChangeCnts = (num, index) => {
    if (num < 1) return;
    styleGroupList[index].cnts = num;
    setStyleGroupList([].concat(styleGroupList));
  };
  const handleChangeOrder = (id, sizeIndex, num) => {
    if (num < 0) return;

    itemsOrderSizeNums[id][sizeIndex] = num;
    setItemsOrderSizeNums({ ...itemsOrderSizeNums });
  };

  const handleUpdateOrder = async () => {
    const res = await request(
      "/order/update",
      {
        _id: isEditOrder,
        packageCount,
        orderData,
      },
      "post"
    );
    if (res) {
      props.nextStep();
    }
  };

  const handleSubmitOrder = async () => {
    toast.notify("comming soon...", "warn");
    return;
    for (let i = 0; i < orderData.length; i++) {
      if (orderData[i].total < 1) {
        console.log(i);
        console.log(orderData[i]);
        toast.notify("There is one item not empty here, please check.");
        return;
      }
    }
    if (isEditOrder) {
      handleUpdateOrder();
      return;
    }
    const res = await request(
      "/order/add",
      {
        packageCount,
        orderData,
      },
      "post"
    );
    if (res) {
      toast.notify("Completed.", { type: "success", duration: 2 });
      props.nextStep();
    }
  };

  const handleDel = async (index) => {
    // onDelSelectStyle(index)
    let titleIndex = getPackageSpace(index);
    styleGroupList[titleIndex].count -= 1;
    for (let i = index + 1; i < styleGroupList.length; i++) {
      if (styleGroupList[i].type === "title") {
        styleGroupList[i].index -= 1;
      }
    }
    styleGroupList.splice(index, 1);
    setStyleGroupList([].concat(styleGroupList));
    // setOrderData([].concat(orderData));
  };
  const SortableTitleItem = SortableElement(({ keys }) => {
    return (
      <TableLine gary noEdit key={`selectline-keys-${keys}`}>
        <Box colspan="4">{`StyleNo:${keys}`}</Box>
        <Box colspan="7"></Box>
      </TableLine>
    );
  });
  const SortableItem = SortableElement(
    ({
      indexNo,
      collect,
      styleGroupLength,
      packageCount,
      cnts,
      titleIndex,
    }) => {
      if (!collect) return <div></div>;
      const amount = sum(itemsOrderSizeNums[collect.id]) * packageCount * cnts;
      return (
        <TableLine
          haveDel
          key={`selectline-${collect.id}`}
          onDel={() => {
            handleDel(indexNo);
          }}
        >
          <Text>{indexNo}</Text>
          <Flex flexDirection="column">
            {collect.prodInfo.map((x) => (
              <ProductInfo styleNum={x.styleNo} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            {collect.prodInfo.map((x) => (
              <ProductInfo made={x.color} />
            ))}
          </Flex>
          <StyleItem
            key={`${indexNo}-order-style-img`}
            styleList={collect.styleList}
            index={indexNo}
            tool={false}
          />
          <Flex justifyContent="space-between">
            {curSizeArr.map((size, sizeIndex) => (
              <Flex flexDirection="column">
                <Text mr="10px">{size}</Text>
                <InputNumber
                  value={
                    itemsOrderSizeNums[collect.id]
                      ? itemsOrderSizeNums[collect.id][sizeIndex]
                      : 0
                  }
                  onChange={(num) => {
                    handleChangeOrder(collect.id, sizeIndex, num);
                    // console.log(collect.id, size.name, num)
                  }}
                  upValue={() => {
                    handleChangeOrder(
                      collect.id,
                      sizeIndex,
                      itemsOrderSizeNums[collect.id][sizeIndex] + 1
                    );
                  }}
                  downValue={() => {
                    handleChangeOrder(
                      collect.id,
                      sizeIndex,
                      itemsOrderSizeNums[collect.id][sizeIndex] - 1
                    );
                  }}
                />
              </Flex>
            ))}
          </Flex>
          {styleGroupLength <= 0 ? null : (
            <Flex
              rowspan={styleGroupLength}
              hasBorder={"1px solid"}
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", height: "100%" }}
            >
              <InputNumber
                value={packageCount}
                onChange={(num) => {
                  handleChangePackageCount(
                    num == "" || !num ? 0 : parseInt(num),
                    titleIndex
                  );
                }}
                upValue={() => {
                  handleChangePackageCount(packageCount + 1, titleIndex);
                }}
                downValue={() => {
                  handleChangePackageCount(packageCount - 1, titleIndex);
                }}
              />
            </Flex>
          )}
          {styleGroupLength <= 0 ? null : (
            <Flex
              rowspan={styleGroupLength}
              hasBorder={"1px solid"}
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", height: "100%" }}
            >
              <InputNumber
                value={cnts}
                onChange={(num) => {
                  handleChangeCnts(
                    num == "" || !num ? 0 : parseInt(num, titleIndex)
                  );
                }}
                upValue={() => {
                  handleChangeCnts(cnts + 1, titleIndex);
                }}
                downValue={() => {
                  handleChangeCnts(cnts - 1, titleIndex);
                }}
              />
            </Flex>
          )}
          <Text>{amount}</Text>
          <Flex flexDirection="column">
            {collect.price.map((price) => (
              <Text p="4px 0">{(props.rate.val * price).toFixed(2)}</Text>
            ))}
          </Flex>
          <Text>
            {
              (sum(collect.price) * amount * props.rate.val).toFixed(2)
              // (orderData[indexNo].totalPrice * rate.val).toFixed(2)
            }
          </Text>
        </TableLine>
      );
    }
  );

  const handleCreateNewPackage = () => {
    let newPackageName = `New Package`;
    setTitleIndexs([...titleIndexs, styleGroupList.length]);
    setStyleGroupList([
      ...styleGroupList,
      {
        type: "title",
        packageCount: 1,
        cnts: 1,
        index: styleGroupList.length,
        key: newPackageName,
        styleNos: "",
        count: 0,
      },
    ]);
  };
  const getPackageSpace = (index) => {
    let space = -1;
    for (let i = index; i >= 0; i--) {
      if (styleGroupList[i].type === "title") {
        return i;
      }
    }
    return space;
  };
  let title = { index: 0, count: 1 };
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        cursor: "pointer",
        height: "100%",
        width: "100%",
        background: "#FFF0E5",
      }}
    >
      {sizeChartModal ? (
        <Modal
          onClose={() => {
            setSizeChartModal(false);
          }}
        >
          {sizeArrList.map((sizeArr, index) => (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              pr="6px"
              style={{ border: "1px solid #000" }}
            >
              <Flex style={{ padding: "12px", lineHeight: "22px" }}>
                {sizeArr.join("/")}
              </Flex>
              <Text
                style={{ textDecoration: "underline" }}
                onClick={() => {
                  setCurSizeArr(sizeArrList[index]);
                  setSizeChartModal(false);
                }}
              >
                select
              </Text>
            </Flex>
          ))}
        </Modal>
      ) : null}
      <Box
        sx={{
          padding: "0 18px 18px 18px",
          height: "max-content",
          width: "100%",
          display: "table",
        }}
      >
        <SortableTable
          sort={{
            pressDelay: 200,
            onSortEnd: ({ oldIndex, newIndex }) => {
              // if (newIndex <= 0) return;
              let oldSpace = getPackageSpace(oldIndex);
              let newSpace = getPackageSpace(newIndex);
              if (newSpace === newIndex) return;
              if (oldSpace === newSpace) {
                setStyleGroupList(
                  arrayMove(styleGroupList, oldIndex, newIndex)
                );
                return;
              }
              console.log(
                styleGroupList[oldSpace].styleNos,
                styleGroupList[newSpace].styleNos
              );
              if (
                styleGroupList[oldSpace].styleNos ===
                styleGroupList[newSpace].styleNos
              ) {
                styleGroupList[oldSpace].count--;
                styleGroupList[newSpace].count++;

                let start = oldIndex > newIndex ? newIndex : oldIndex;
                let end = oldIndex < newIndex ? newIndex : oldIndex;
                let change = oldIndex > newIndex ? 1 : -1;
                for (let i = start; i <= end; i++) {
                  if (styleGroupList[i].type === "title") {
                    styleGroupList[i].index += change;
                  }
                }
                setStyleGroupList(
                  arrayMove(styleGroupList, oldIndex, newIndex)
                );
                return;
              }
              if (styleGroupList[newSpace].styleNos === "") {
                styleGroupList[newSpace].styleNos =
                  styleGroupList[oldSpace].styleNos;
                styleGroupList[newSpace].key =
                  styleGroupList[oldSpace].styleNos;
                styleGroupList[oldSpace].count--;
                styleGroupList[newSpace].index--;
                styleGroupList[newSpace].count++;
                setStyleGroupList(
                  arrayMove(styleGroupList, oldIndex, newIndex)
                );
              }
            },
          }}
          sx={{ margin: "0", marginRight: "1px", width: "100%" }}
          titles={[
            { name: "00", width: "2/22", isHide: true },
            { name: "SECTION NUMBER", width: "2/22" },
            { name: "COLOUR", width: "4/22" },
            { name: "IMAGE", width: "1/22" },
            {
              name: "SIZE",
              width: "2/22",
              onClick: () => {
                setSizeChartModal(true);
              },
            },
            { name: "PACKAGES", width: "2/22" },
            { name: "CTNS", width: "2/22" },
            { name: "QUANTITY", width: "2/22" },
            { name: `PRICE/${rate.sign}`, width: "4/22" },
            { name: `TOTAL AMOUN/${rate.sign}`, width: "1/22" },
            { name: "DELETE", width: "2/22" },
          ]}
        >
          {styleGroupList.map((collect, index) => {
            if (collect.type === "title") {
              title = collect;
              return (
                <SortableTitleItem
                  disabled
                  indexNo={0}
                  keys={collect.key}
                  key={`categoryList-item-title-${index}`}
                  index={index}
                />
              );
            }
            return (
              <SortableItem
                indexNo={index}
                collect={collect}
                key={`categoryList-item-${index}`}
                index={index}
                packageCount={title.packageCount}
                cnts={title.cnts}
                titleIndex={title.index}
                styleGroupLength={index === title.index + 1 ? title.count : 0}
              ></SortableItem>
            );
          })}
        </SortableTable>
      </Box>
      <Button
        variant="primary"
        width="19.2rem"
        bg="#fff"
        color="#000"
        padding="0"
        sx={{
          borderRadius: 0,
          fontSize: "16px",
          border: "dashed 1px #000",
          padding: "10px 0",
          cursor: "pointer",
        }}
        onClick={handleCreateNewPackage}
      >
        CREATE A NEW PACKAGE
      </Button>
      <Button
        variant="primary"
        height="1.13rem"
        width="19.2rem"
        bg="#000"
        color="#fff"
        padding="0"
        sx={{
          borderRadius: 0,
          fontSize: "0.27rem",
          cursor: "pointer",
        }}
        onClick={handleSubmitOrder}
      >
        COMPLETE
      </Button>
    </Flex>
  );
};
