import React from "react"
import { Flex, Box } from "rebass"

import StyleImg from "./style-img-download"
export default class A extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.svgId !== this.svgId) {
            console.log("render")
            return true
        }
        return false
    }

    render() {
        const { styleList, favoriteId, margin, width, onPngLoaded } = this.props
        return (
            <Flex
                flexDirection="column"
                // alignItems="center"
                justifyContent="space-evenly"
                margin={margin ? margin : "auto"}
            // width={width ? width : "150px"}
            >
                {Array.isArray(styleList) &&
                    styleList.map((style, index) => {
                        const {
                            styleBackSize = 27,
                            styleSize = 27,
                            scale = 58,
                        } = style.style
                        return (
                            <Box p="13px">
                                <StyleImg
                                    marginTemp="0.04rem"
                                    favoriteId={favoriteId}
                                    key={`style-img-${index}`}
                                    width={width ? `${(styleSize * 3.2) / 100}rem` : `${styleSize * 2}px`}
                                    backWidth={width ? `${(styleBackSize * 3.2) / 100}rem` : `${styleBackSize * 2}px`}
                                    onPngLoaded={onPngLoaded}
                                    vposition={style.style.vposition}
                                    styleSize={style.style.styleSize}
                                    styleBackSize={style.style.styleBackSize}
                                    svgUrl={style.style.svgUrl}
                                    svgUrlBack={style.style.svgUrlBack}
                                    shadowUrlBack={style.style.shadowUrlBack}
                                    id={style.style._id}
                                    styleId={style.style._id}
                                    shadowUrl={style.style.shadowUrl}
                                    imgValsAttrs={style.style.attrs}
                                    colors={style.colors}
                                />
                            </Box>
                        )
                    })}
            </Flex>
        )
    }
}
