import React, { useState, useEffect } from "react";
import { Flex, Text, Image, Button, Row, Column } from "rebass";
import Table, { TableLine, ProductInfo } from "./base-table";
import OrderDetail from "./order-detail";
import Modal from "../modal";
import request from "../../utils/request";
import Router from "next/router";

export default (props) => {
  const { rate, userId } = props;
  const [orderDetailMode, setOrderDetailMode] = useState({
    visible: false,
    detail: {},
  });
  const [orderList, setOrderList] = useState([]);
  const [orderDetailList, setOrderDetailList] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const getOrderList = async () => {
    let res = null;
    if (userId) {
      res = await request("/order/getList", { isSend: 1, userId });
    } else {
      res = await request("/order/getMyList", { isSend: 1 });
    }

    // console.log("----res----", res)
    if (!res) return;
    setOrderDetailList(res);
    const data = res.map((order) => {
      let orderData = order.orderData;
      let threeViewsList = [];
      let quantity = 0;
      let price = 0;
      orderData.map((item) => {
        quantity += item.total;
        price += item.totalPrice;
        // threeViewsList.push(threeViews)
      });

      return {
        orderNo: order.orderNo,
        date: order.updateTime.substring(0, 10),
        user: order.user.name,
        id: order._id,
      };
    });
    setOrderList(data);
  };
  useEffect(() => {
    getOrderList();
  }, []);

  const handleCheckDetail = (index) => {
    setOrderDetailMode({ visible: true, detail: orderDetailList[index] });
  };
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        cursor: "pointer",
        height: "100%",
        background: "#FFF0E5",
      }}
    >
      {orderDetailMode.visible ? (
        <Modal
          onClose={() => {
            setOrderDetailMode({ visible: false, detail: {} });
          }}
        >
          <OrderDetail OrderDetail={orderDetailMode.detail} rate={rate} />
        </Modal>
      ) : null}
      <Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
        <Table
          sx={{ margin: "0", marginRight: "1px", width: "100%" }}
          titles={[
            { name: "00", width: "2/22", isHide: true },
            { name: "订单号码", width: "2/22" },
            { name: "订单日期", width: "4/22" },
            { name: "客户名称", width: "1/22" },
            { name: "下载", width: "2/22" },
            { name: "查看", width: "2/22" },
          ]}
        >
          {orderList.map((order, index) => (
            <TableLine
              Bigger
              onBiger={() => {
                handleCheckDetail(index);
              }}
              key={`${index}-my-order`}
            >
              <Text lineHeight="0.6rem">{index + 1}</Text>
              {/* <Text>MRMISS 20191118</Text> */}
              <Text>{order.orderNo}</Text>
              <Text>{order.date}</Text>
              <Text>{order.user}</Text>
              <Image
                className="tool"
                width="0.3rem"
                src="/8/download.png"
                sx={{
                  opacity: "0.7",
                }}
                onClick={() => {
                  window.open(
                    `./download?id=${order.id}?rateSign=${rate.sign}&rateVal=${rate.val}`,
                    "_blank"
                  );
                  // Router.push(`/download?id=${order.id}`)
                }}
              />
            </TableLine>
          ))}
        </Table>
      </Flex>
    </Flex>
  );
};
