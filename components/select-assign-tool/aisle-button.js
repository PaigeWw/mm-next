import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
export const Title = props => (
	<Flex width="100%" sx={{}} mb="0.43rem">
		<Box width={[1]}>
			<Text fontSize="0.18rem" fontWeight="bolder">
				SECTION NUMBER
			</Text>
			<Text fontSize="0.1rem" m="0.16rem 0">
				{props.styleNo}
			</Text>
			<AisleButton text="A" {...props} />
		</Box>
		<Image
			src="/3/close.png"
			width="0.23rem"
			onClick={() => {
				props.onClose()
			}}
			sx={{ position: "absolute", right: "0.42rem", top: "0.41rem" }}
		></Image>
	</Flex>
)

const AisleButton = props => {
	const { channelList, curChannelIndex } = props
	const [showChannels, setShowChannels] = useState(false)

	return (
		<>
			<Flex>
				<Box
					height="0.32rem"
					width="0.88rem"
					bg="#000"
					color="#fff"
					padding="0"
					textAlign="center"
					lineHeight="0.32rem"
				>
					ALSLE
				</Box>
				<Box
					variant="primary"
					height="0.32rem"
					bg="#FF8E6C"
					color="#000"
					sx={{
						textAlign: "center",
						padding: "0 0.32rem",
						borderRadius: 0,
						fontSize: "0.14rem",
						cursor: "pointer"
					}}
					onClick={() => {
						setShowChannels(!showChannels)
					}}
				>
					{channelList.length > 0 ? channelList[curChannelIndex].code : ""}
				</Box>
			</Flex>
			{showChannels ? (
				<Flex width={[1]}>
					{channelList.map((channel, index) => (
						<Text
							mr="10px"
							sx={{ cursor: "pointer" }}
							onClick={() => {
								props.onSelectChannelByIndex(index)
							}}
						>
							{channel.name}
						</Text>
					))}
				</Flex>
			) : null}
		</>
	)
}

export default AisleButton
