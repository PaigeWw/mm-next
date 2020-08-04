import React, { useEffect, useState } from "react";
import { Flex, Text, Box, Button, Image } from "rebass";
import { Title } from "./aisle-button";
import { ColorList, PaintList } from "../grid-color-and-paint";
import request from "../../utils/request.js";

export default (props) => {
  const { role, currentSeleted, goodsId } = props;
  const { sid, top, col, styleItem, channels = [], isLast } = currentSeleted;

  const [curChannel, setCurChannel] = useState({});
  const [channelList, setChannelList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [paintList, setPaintList] = useState([]);
  const [pcode, setPcode] = useState("");
  const [fcode, setFcode] = useState("");
  const [curChannelAssign, setCurChannelAssign] = useState({
    plainColors: [],
    flowerColors: [],
  });

  const getColorList = async (page) => {
    let options = { type: 0, page: page, limit: 30 };
    if (pcode) {
      options.code = pcode;
    }
    if (goodsId) {
      options.goodsId = goodsId;
    }
    const req = await request("color/getList", options, "get");
    setColorList({ docs: req.docs, page: req.page });
  };
  const getPaintList = async (page) => {
    let options = { type: 1, page: page, limit: 30 };
    if (fcode) {
      options.code = fcode;
    }
    if (goodsId) {
      options.goodsId = goodsId;
    }
    const req = await request("color/getList", options, "get");
    setPaintList({ docs: req.docs, page: req.page });
    // console.log("getChannels", req)
  };
  useEffect(() => {
    const getChannels = async () => {
      const req = await request("user/getUserChannels", "get");
      if (req) {
        setChannelList(req.channels);
        if (req.channels.length > 0) {
          setCurChannel(req.channels[0]);
          // getChannelsAssign(sid, req.docs[0]._id)
        }
      }
    };

    if (role === 1 || role === "1") {
      getChannels();
      getColorList();
      getPaintList();
    }
  }, []);
  useEffect(() => {
    getColorList(1);
  }, [pcode, styleItem.categoryId]);

  useEffect(() => {
    getPaintList(1);
  }, [fcode, styleItem.categoryId]);

  const getChannelsAssign = async (styleId, channelId) => {
    const req = await request(
      "channel/getAssign",
      {
        styleId,
        channelId,
      },
      "get"
    );
    if (!req) {
      setCurChannelAssign({
        plainColors: [],
        flowerColors: [],
      });
    } else {
      setCurChannelAssign(req);
    }
  };
  useEffect(() => {
    if (!curChannel._id) return;
    // console.log("curChannel->", curChannel.code)

    getChannelsAssign(sid, curChannel._id);
  }, [curChannel, sid]);

  let left = (col + 2) * 3.2;
  if (left > 19.2 - 6.4) {
    left = (col - 1) * 3.2;
  }

  const handleSelect = (item, type) => {
    switch (type) {
      case "color":
        const cIndex = curChannelAssign.plainColors.findIndex(
          (x) => x._id === item._id
        );
        let options = {
          styleId: sid,
          channelId: curChannel._id,
          plainColor: item._id,
        };
        if (cIndex < 0) {
          curChannelAssign.plainColors.push(item);
          const res = request("/channel/assign", options, "post");
        } else {
          const _res = request("/channel/unassign", options, "post");
          curChannelAssign.plainColors.splice(cIndex, 1);
        }

        setCurChannelAssign({
          ...curChannelAssign,
          plainColors: [].concat(curChannelAssign.plainColors),
        });
        break;
      case "paint":
        const pIndex = curChannelAssign.flowerColors.findIndex(
          (x) => x._id === item._id
        );
        let _options = {
          styleId: sid,
          channelId: curChannel._id,
          flowerColor: item._id,
        };
        if (pIndex < 0) {
          curChannelAssign.flowerColors.push(item);
          const res1 = request("/channel/assign", _options, "post");
        } else {
          const _res1 = request("/channel/unassign", _options, "post");
          curChannelAssign.flowerColors.splice(pIndex, 1);
        }

        setCurChannelAssign({
          ...curChannelAssign,
          flowerColors: [].concat(curChannelAssign.flowerColors),
        });
        break;
      default:
        break;
    }
  };

  const handleSelectAll = async (bool) => {
    setColorList({
      ...colorList,
      loading: true,
    });
    if (bool) {
      for (let i = 0; i < colorList.docs.length; i++) {
        let item = colorList.docs[i];
        const cIndex = curChannelAssign.plainColors.findIndex(
          (x) => x._id === item._id
        );
        if (cIndex < 0) {
          curChannelAssign.plainColors.push(item);
          let options = {
            styleId: sid,
            channelId: curChannel._id,
            plainColor: item._id,
          };
          const res1 = await request("/channel/assign", options, "post");
        }
      }
    } else {
      for (let i = 0; i < colorList.docs.length; i++) {
        let item = colorList.docs[i];
        const cIndex = curChannelAssign.plainColors.findIndex(
          (x) => x._id === item._id
        );
        if (cIndex >= 0) {
          curChannelAssign.plainColors.splice(cIndex, 1);

          let options = {
            styleId: sid,
            channelId: curChannel._id,
            plainColor: item._id,
          };
          const res1 = await request("/channel/unassign", options, "post");
        }
      }
    }
    setColorList({
      ...colorList,
      loading: false,
    });
    setCurChannelAssign({
      ...curChannelAssign,
      plainColors: [].concat(curChannelAssign.plainColors),
    });
  };
  const handleSelectAllPaint = async (bool) => {
    setPaintList({
      ...paintList,
      loading: true,
    });
    if (bool) {
      for (let i = 0; i < paintList.docs.length; i++) {
        let item = paintList.docs[i];
        const cIndex = curChannelAssign.flowerColors.findIndex(
          (x) => x._id === item._id
        );
        if (cIndex < 0) {
          curChannelAssign.flowerColors.push(item);
          let options = {
            styleId: sid,
            channelId: curChannel._id,
            flowerColor: item._id,
          };
          const res1 = await request("/channel/assign", options, "post");
        }
      }
    } else {
      for (let i = 0; i < paintList.docs.length; i++) {
        let item = paintList.docs[i];
        const cIndex = curChannelAssign.flowerColors.findIndex(
          (x) => x._id === item._id
        );
        if (cIndex >= 0) {
          curChannelAssign.flowerColors.splice(cIndex, 1);

          let options = {
            styleId: sid,
            channelId: curChannel._id,
            flowerColor: item._id,
          };
          const res1 = await request("/channel/unassign", options, "post");
        }
      }
    }
    setPaintList({
      ...paintList,
      loading: false,
    });
    setCurChannelAssign({
      ...curChannelAssign,
      flowerColors: [].concat(curChannelAssign.flowerColors),
    });
  };
  const handleSelectChannel = (channel) => {
    setCurChannel(channel);
  };
  const handleChangeColorPage = (page, type) => {
    console.log(page, type);
    if (type === 0) {
      getColorList(page);
    } else {
      getPaintList(page);
    }
  };

  const handleOnSearch = (options) => {
    if (options.type === 0) {
      setPcode(options.code);
    } else {
      setFcode(options.code);
    }
  };
  // const handleCommitSelected = index => {}
  if (!channelList) return null;
  // console.log({ styleItem })
  return (
    <Flex
      width="6.4rem"
      bg="#fff"
      flexDirection="column"
      fontSize="0.18rem"
      color="#000"
      p="0.5rem 0.7rem 0 0.7rem"
      sx={{
        position: "absolute",
        top: `${isLast ? "" : top}px`,
        left: `${left}rem`,
        bottom: `${isLast ? 0 : ""}`,
      }}
    >
      <Title
        styleNo={styleItem.styleNo}
        shadowUrlBack={styleItem.shadowUrlBack}
        channelList={channelList}
        role={role}
        // channelInfoList={curChannelAssign.plainColors}
        onClose={props.onClose}
        curChannel={curChannel}
        onSelectChannel={handleSelectChannel}
      />
      {channelList.length > 0 && (role === 1 || role === "1") ? (
        <>
          <Flex flexDirection="column">
            <ColorList
              colorList={colorList.docs || []}
              loading={colorList.loading}
              page={colorList.page}
              handleSelect={handleSelect}
              handleSelectAll={handleSelectAll}
              curChannelId={curChannel._id}
              selectedList={curChannelAssign.plainColors}
              onChangePage={handleChangeColorPage}
              onSearch={handleOnSearch}
            />
            <PaintList
              hoverAttrs={styleItem.attrs}
              paintList={paintList.docs || []}
              loading={paintList.loading}
              page={paintList.page}
              handleSelect={handleSelect}
              handleSelectAll={handleSelectAllPaint}
              curChannelId={curChannel._id}
              selectedList={curChannelAssign.flowerColors}
              onChangePage={handleChangeColorPage}
              onSearch={handleOnSearch}
            />
          </Flex>
          <Button
            variant="primary"
            height="0.7rem"
            width="6.4rem"
            bg="#1B1B1B"
            color="#fff"
            padding="0"
            ml="-0.7rem"
            sx={{
              borderRadius: 0,
              fontSize: "0.14rem",
              cursor: "pointer",
            }}
            onClick={props.onClose}
          >
            完成
          </Button>
        </>
      ) : null}
    </Flex>
  );
};
