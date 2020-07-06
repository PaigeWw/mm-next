import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image, Select } from "rebass"
import useUserInfo from "../hooks/getUserInfo"
import Head from "../components/nav"
import request from "../utils/request.js"

const InfoLine = ({ title, info, index }) => (
	<Flex
		width={[1]}
		alignItems="center"
		sx={{
			borderBottom: "1px solid #e8e8e8",
			borderTop: index ? "none" : "auto",
		}}
	>
		<Text
			width="100px"
			p="16px"
			bg="#fafafa"
			sx={
				{
					// borderRight: "1px solid #e8e8e8",
				}
			}
		>
			{title}
		</Text>
		<Text p="16px">{info}</Text>
	</Flex>
)
export default () => {
	const info = useUserInfo()
	const infosModal = [
		{ name: "name", required: true, cn: "名称" },
		{ name: "account", cn: "账号名", width: "4/22", required: true },
		{ name: "password", cn: "密码", width: "2/22", required: true },
		{ name: "contact", cn: "联系人", width: "2/22" },
		{ name: "phone", cn: "电话", width: "2/22" },
		{ name: "email", cn: "邮箱", width: "2/22" },
		{ name: "customerType", cn: "客户类型", width: "2/22" },
		{ name: "address", cn: "地址", width: "2/22" },
		{ name: "channels", cn: "通道", width: "2/22", type: "select" },
		{ name: "remark", cn: "备注", type: "area" },
	]
	const productorInfosModal = [
		{ name: "name", required: true, cn: "名称" },
		{ name: "account", cn: "账号名", width: "4/22", required: true },
		{ name: "password", cn: "密码", width: "2/22", required: true },
		{ name: "address", cn: "所在地", width: "2/22" },
		{ name: "email", cn: "邮箱", width: "2/22" },
		{ name: "channels", cn: "通道", width: "2/22", type: "select" },
		{ name: "remark", cn: "备注", type: "area" },
	]
	const [goodsList, setGoodsList] = useState([])
	const [channelList, setChannelList] = useState([])
	const [assignCategoryList, setAssignCategoryList] = useState([])
	const [currentChannel, setCurrentChannel] = useState({})
	const [showChannels, setShowChannels] = useState(false)
	useEffect(() => {
		// if (info.role !== 1) return

		const getChannels = async () => {
			const req = await request("user/getUserChannels")
			if (req) {
				setChannelList(req.channels)
			}
		}
		getChannels()
	}, [info])

	const getUserChannelName = () => {
		let channelNames = channelList.map((c) => c.name)
		return channelNames.toString()
	}
	return (
		<React.Fragment>
			<Flex
				height="100vh"
				// justifyContent="space-between"
				flexDirection="column"
			>
				<Head></Head>
				{info.role === 1 || info.role === "1" ? (
					<Box width={[1]} fontSize="0.2rem" p="100px">
						{productorInfosModal.map((item, index) => (
							<InfoLine
								key={`InfoLine-${index}`}
								index={index}
								title={item.cn}
								info={
									item.name === "channels"
										? getUserChannelName(info[item.name])
										: info[item.name]
								}
							/>
						))}
					</Box>
				) : (
					<Box width={[1]} fontSize="0.2rem" p="100px">
						{infosModal.map((item) => (
							<InfoLine
								title={item.cn}
								info={
									item.name === "channels"
										? getUserChannelName()
										: info[item.name]
								}
							/>
						))}
					</Box>
				)}
				{/* <Box width={[1]} fontSize="0.2rem" p="100px">
					{infosModal.map((item) => (
						<InfoLine title={item.cn} info={item.name === 'channels' ? getUserChannelName(info[item.name] ): info[item.name]  } />
					))}
				</Box> */}
			</Flex>
		</React.Fragment>
	)
}
