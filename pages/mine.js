import React, { useState, useEffect } from "react";
import { Flex, Text, Box } from "rebass";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import request from "../utils/request";
import { ToastContainer, toast } from "../components/commons/toast";
import GoodsSwitch from "../components/commons/goods-switch";
import Head from "../components/nav";
import CollectTable from "../components/tables/collect-table";
import OrderTable from "../components/tables/new-order-table";
// import OrderTable from "../components/tables/order-table"
import SendTable from "../components/tables/send-table";
import SelfOrderTable from "../components/tables/self-order-table";
import Manage from "../components/manage/index";
import useUserInfo from "../hooks/getUserInfo";
import useRateInfo from "../hooks/getRateInfo";
import { getPageQuery } from "../utils/helper";

export default () => {
  const rateInfo = useRateInfo() || [];
  const [userInfo, setUserInfo] = useState({});
  const [goodId, setGoodId] = useState(false);
  const user = useUserInfo();
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [selectStyles, setSelectStyles] = useState([]);
  const [isEditOrder, setIsEditOder] = useState(false);

  const handleSetTabSelectedIndex = (index) => {
    setTabSelectedIndex(index);
  };
  useEffect(() => {
    if (!user) {
      return;
    }
    setUserInfo(user);
  }, [user]);
  const handleSelectStyleToOrder = (selectList) => {
    setSelectStyles(selectList);
    setTabSelectedIndex(1);
    setIsEditOder(false);
  };

  const handleEditOrder = (order) => {
    setIsEditOder(order._id);
    setSelectStyles(order.orderData);
    setTabSelectedIndex(1);
  };
  const onLoadGoods = (goods) => {
    if (!getPageQuery().goodId) {
      setGoodId(goods[0]._id);
    }
  };
  const handleDelSelectStyle = (index) => {
    selectStyles.splice(index, 1);
    console.log(selectStyles);
    setSelectStyles([...selectStyles]);
  };
  useEffect(() => {
    const query = getPageQuery();
    if (query.tab) {
      // console.log("query.tab", query.tab)
      setTabSelectedIndex(parseInt(query.tab));
    } else {
      setTabSelectedIndex(0);
    }
    if (query.goodId) {
      setGoodId(query.goodId);
    } else {
    }
  }, []);
  // console.log("userInfo.currency", userInfo.currency)
  return (
    <>
      <Flex flexDirection="column" height="100%">
        <Head progress={3}></Head>
        <GoodsSwitch
          pb="30px"
          goodId={goodId}
          onLoadGoods={onLoadGoods}
          onChangeGood={(id) => {
            setGoodId(id);
          }}
        />

        <ToastContainer />
        <Flex
          flexDirection="column"
          className="wrapper"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            "&": {
              ".react-tabs__tab": {
                background: "#000",
                color: "#fff",
              },
              ".react-tabs__tab--selected": {
                flexGrow: 1,
                background: "#FFC1AE !important",
                color: "#000",
              },
            },
          }}
        >
          <Tabs
            selectedIndex={tabSelectedIndex}
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            onSelect={handleSetTabSelectedIndex}
          >
            <TabList
              style={{
                display: "flex",
                height: "0.8rem",
                padding: "0",
                margin: "0",

                background: "#FFC1AE",
                fontSize: "0.3rem",
                justifyContent: "space-around",
                listStyleType: "none",
              }}
            >
              <Tab
                style={{
                  lineHeight: "0.8rem",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                我的收藏
              </Tab>
              <Tab
                style={{
                  lineHeight: "0.8rem",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                订单制作
              </Tab>
              <Tab
                style={{
                  lineHeight: "0.8rem",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                发送订单
              </Tab>
              <Tab
                style={{
                  lineHeight: "0.8rem",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                我的订单
              </Tab>
              {userInfo.role === 1 ? (
                <Tab
                  style={{
                    lineHeight: "0.8rem",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  业务管理
                </Tab>
              ) : null}
            </TabList>
            <TabPanel>
              <CollectTable
                goodId={goodId}
                userInfo={userInfo}
                rate={(userInfo && rateInfo[userInfo.currency]) || {}}
                nextStep={handleSelectStyleToOrder}
              />
            </TabPanel>
            <TabPanel>
              <OrderTable
                goodId={goodId}
                toast={toast}
                rate={(userInfo && rateInfo[userInfo.currency]) || {}}
                isEditOrder={isEditOrder}
                selectStyles={selectStyles}
                onDelSelectStyle={handleDelSelectStyle}
                nextStep={() => {
                  setSelectStyles([]);
                  handleSetTabSelectedIndex(2);
                }}
              />
            </TabPanel>
            <TabPanel>
              <SendTable
                goodId={goodId}
                toast={toast}
                rate={(userInfo && rateInfo[userInfo.currency]) || {}}
                onEditOrder={handleEditOrder}
                nextStep={() => {
                  setSelectStyles([]);
                  handleSetTabSelectedIndex(3);
                }}
              />
            </TabPanel>
            <TabPanel>
              <SelfOrderTable
                goodId={goodId}
                toast={toast}
                rate={(userInfo && rateInfo[userInfo.currency]) || {}}
              />
            </TabPanel>
            {userInfo.role === 1 ? (
              <TabPanel>
                <Manage
                  rate={(userInfo && rateInfo[userInfo.currency]) || {}}
                />
              </TabPanel>
            ) : null}
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};
