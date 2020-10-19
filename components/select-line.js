import React, { useEffect, useState, useMemo } from "react";
import { Flex, Box, Button, Image } from "rebass";
import { filterImageUrl } from "../utils/helper";
import { SerachInputContorl } from "../components/color-and-paint";
const ImageBox = (props) => {
  const { item, id, kind, scale, col, row, onLoad = () => {},styleSize=27 } = props;
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="3.19rem"
      p="0.64rem 0"
      sx={{
        "&:hover": {
          background: "#DCD0DC",
        },
      }}
      bg={props.selected ? "#FF8E6C  !important" : "none"}
      onMouseDown={(e) => {
        // console.dir(e.target.offsetTop)
        props.onSelect(id, kind, e.target.offsetTop, col, item, row);
      }}
    >
      <Image
        src={`${filterImageUrl(props.src)}?tr=w-180`}
        sx={{
          display: "block",
          width: `${styleSize*2}%`,
          boxSizing: "content-box",
          pointerEvents: "none",
        }}
        onLoad={(e) => {
          onLoad({ width: e.target.width, height: e.target.height });
        }}
      ></Image>
    </Flex>
  );
};

class SelectLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      searchQuery: "",
      showSearch: false,
      lineHeight: 0,
    };
    this.wrapperDom = null;
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      nextProps.styles !== this.props.styles ||
      nextProps.selectStyles !== this.props.selectStyles ||
      nextStates.startIndex !== this.state.startIndex ||
      nextProps.lineHeight !== this.props.lineHeight ||
      nextStates.showSearch !== this.state.showSearch
    ) {
      // console.log("nextProps.src !== this.props.src")
      return true;
    } else {
      return false;
    }
  }

  changeStartIndex(val) {
    if (val < 0) return;
    const { styles, row, search = "" } = this.props;
    if (val < styles.filter((s) => s.styleNo.indexOf(search) >= 0).length - 2) {
      console.log("handleChangeStartIndex", val);
      this.props.setStartIndex(val, row);
    }
  }
  changeSearch(val) {
    if (val < 0) return;
    // const { search } = this.props
    const { row } = this.props;
    this.props.setSearch(val, row);
    this.changeStartIndex(0);
  }

  render() {
    const { searchQuery, showSearch } = this.state;
    const {
      styles,
      startIndex,
      lineHeight,
      onImageOnLoad,
      row,
      search = "",
    } = this.props;
    return (
      <Flex
        width="100%"
        height={`calc(1.28rem + ${lineHeight}px)`}
        bg="#DCDCDC"
        fontSize="0.23rem"
        color="#fff"
        sx={{
          minHeight: "50px",
          "&:hover": {
            ".innerChild": {
              visibility: "visible",
            },
          },
        }}
      >
        <Flex bg="#000" width="3.22rem" justifyContent="space-between">
          <Flex
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{
              position: "relative",
            }}
          >
            <Flex alignItems="center" justifyContent="center">
              <Box>{this.props.kind} </Box>
              <Box
                onClick={() => {
                  this.setState({
                    showSearch: true,
                  });
                  // setShowSearch(!showSearch)
                }}
                mt="6px"
                ml="6px"
                sx={{
                  //   position: "absolute",
                  cursor: "pointer",
                }}
              >
                <Image src="/icon/icon-10.svg" />
              </Box>
            </Flex>

            {showSearch || search ? (
              <Box>
                <SerachInputContorl
                  width="2rem"
                  value={search}
                  onChange={(val) => {
                    // console.log("SerachInput", e.target.value)
                    this.changeSearch(val);
                  }}
                />{" "}
              </Box>
            ) : null}
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            width="0.75rem"
            bg="#313131"
            className="innerChild"
            sx={{
              visibility: "hidden",
              cursor: "pointer",
              // visibility: showScroll ? "visible" : "hidden"
            }}
            onClick={() => {
              this.changeStartIndex(startIndex - 1);
            }}
          >
            <Image src="/3/left.png" width="0.12rem" height="0.21rem"></Image>
          </Flex>
        </Flex>
        <Flex flex={1} alignItems="stretch">
          {styles
            .filter((s) => s.styleNo.indexOf(search) >= 0)
            .slice(startIndex, startIndex + 4)
            .map((item, index) => (
              <ImageBox
                onLoad={(data) => {
                  const { styleSize = 27} = item
                  onImageOnLoad(data, row, styleSize*2);
                }}
                item={item}
                kind={this.props.kind}
                col={index}
                row={this.props.row}
                onSelect={this.props.onSelect}
                styleSize={item.styleSize}
                selected={
                  Array.isArray(this.props.selectStyles) &&
                  this.props.selectStyles.indexOf(item._id) > -1
                    ? true
                    : false
                }
                src={item.imgUrl}
                id={item._id}
              />
            ))}
        </Flex>
        <Flex
          bg="#000"
          width="3.22rem"
          justifyContent="space-between"
          sx={{
            background: "no-repeat",
            backgroundSize: "20px 34px",
            backgroundPositionY: "center",
            backgroundPositionX: "70%",
            // backgroundImage: "url(/3/drop.jpeg)"
          }}
        >
          <Flex
            className="innerChild"
            alignItems="center"
            justifyContent="center"
            width="0.75rem"
            bg="#313131"
            sx={{
              visibility: false ? "visible" : "hidden",
              cursor: "pointer",
            }}
            onClick={() => {
              this.changeStartIndex(startIndex + 1);
            }}
          >
            <Image src="/3/right.png" width="0.12rem" height="0.21rem"></Image>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default SelectLine;

