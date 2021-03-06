import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import { filterImageUrl } from "../../utils/helper"

export const Title = (props) => (
	<Flex width="100%" sx={{}} mb="0.43rem">
		<Box width={[3 / 5]}>
			{props.styleNo ? (
				<>
					<Text fontSize="0.18rem" fontWeight="bolder">
						样衣编码
					</Text>
					<Text fontSize="0.1rem" m="0.16rem 0">
						{props.styleNo}
					</Text>
				</>
			) : null}

			{props.role === 1 || props.role === "1" ? (
				<AisleButton text="A" {...props} />
			) : null}

			{props.channelList.length > 0 ||
			props.role === 3 ||
			props.role === "3" ? null : (
				<Text mt="4px">未分配通道</Text>
			)}
		</Box>
		{props.shadowUrlBack ? (
			<Flex justifyContent="center" alignItems="center" width={[2 / 5]}>
				<Image src={`${filterImageUrl(props.shadowUrlBack)}`} width="70%" />
			</Flex>
		) : null}

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

const AisleButton = (props) => {
	const { channelList, curChannel } = props
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
					通道
				</Box>
				<Box
					variant="primary"
					height="0.32rem"
					lineHeight="0.32rem"
					bg="#FF8E6C"
					color="#000"
					sx={{
						textAlign: "center",
						padding: "0 0.32rem",
						borderRadius: 0,
						fontSize: "0.14rem",
						cursor: "pointer",
					}}
					onClick={() => {
						setShowChannels(!showChannels)
					}}
				>
					{curChannel ? curChannel.code : ""}
				</Box>
			</Flex>
			{/* {showChannels ? ( */}
			<Flex width={[1]}>
				{channelList.length > 0 &&
					channelList.map((channel, index) => (
						<Text
							mr="10px"
							lineHeight="0.4rem"
							sx={{ cursor: "pointer" }}
							color={
								curChannel && channel._id === curChannel._id
									? "#FF8E6C"
									: "#000"
							}
							onClick={() => {
								props.onSelectChannel(channel)
							}}
						>
							{channel.name}
						</Text>
					))}
			</Flex>
			{/* ) : null} */}
		</>
	)
}

export default AisleButton
