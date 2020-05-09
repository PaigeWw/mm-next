import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Flex } from "rebass";
import ChannelTable from "../tables/channel-table";
import UserTable from "../tables/user-table";
import request from "../../utils/request.js";

export default (props) => {
  const [userList, setUserList] = useState([]);
  const [channelList, setChannelList] = useState([]);
  const getUserChannels = async (page) => {
    const req = await request("user/getUserChannels", "get");
    setChannelList(req.channels || []);
    setUserList(req.users || []);
    // console.log("getUserChannels", req)
  };
  useEffect(() => {
    getUserChannels();
  }, []);

  return (
    <Flex
      textAlign="center"
      sx={{
        "&": {
          ".react-tabs__tab": {
            background: "#FF8E6C",
            color: "#000",
            height: "100%",
            flexGrow: 1,
          },
          ".react-tabs__tab--selected": {
            flexGrow: 1,
            background: "#FFF0E5 !important",
          },
        },
      }}
    >
      <Tabs style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <TabList
          style={{
            display: "flex",
            height: "0.4rem",
            minHeight: "24px",
            // lineHeight: "24px",
            padding: "0",
            margin: "0",
            background: "#FFF0E5",
            fontSize: "0.2rem",
            color: "#000",
            justifyContent: "space-around",
            alignItems: "center",
            listStyleType: "none",
          }}
        >
          <Tab
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            通道列表
          </Tab>
          <Tab
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            客户列表
          </Tab>
        </TabList>
        <TabPanel>
          <ChannelTable channelList={channelList} />
        </TabPanel>
        <TabPanel>
          <UserTable
            rate={props.rate}
            userList={userList}
            channelList={channelList}
            getUserChannels={getUserChannels}
          />
        </TabPanel>
      </Tabs>
    </Flex>
  );
};
