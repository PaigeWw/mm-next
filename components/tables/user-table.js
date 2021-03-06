import React, { useState } from "react"
import { Flex, Text, Button } from "rebass"
import Table, { TableLine } from "./base-table"
import Modal from "../modal"
import UserOrderTable from "./self-order-table"
import request from "../../utils/request"

export default (props) => {
	const { getUserChannels, channelList, rate } = props
	const infos = [
		{ name: "name", required: true, cn: "名称" },
		{ name: "account", cn: "账号名", width: "4/22", required: true },
		{ name: "password", cn: "密码", width: "2/22", required: true },
		{ name: "contact", cn: "联系人", width: "2/22" },
		{ name: "phone", cn: "电话", width: "2/22" },
		{ name: "email", cn: "邮箱", width: "2/22" },
		{ name: "customerType", cn: "客户类型", width: "2/22" },
		{ name: "countries", cn: "国家", width: "2/22" },
		{ name: "postcode", cn: "邮编", width: "2/22" },
		{ name: "address", cn: "地址", width: "2/22" },
		{ name: "channels", cn: "通道", width: "2/22", type: "select" },
		{ name: "shippingcountries", cn: "托运国家", width: "2/22" },
		{ name: "shippingpostcode", cn: "托运地址邮编", width: "2/22" },
		{ name: "shippingaddress", cn: "托运地址", width: "2/22" },
		{ name: "remark", cn: "备注", type: "area" },
	]
	const [editUserInfo, setUserEditInfo] = useState(false)
	const [editNewUserInfo, setNewUserEditInfo] = useState({})
	const [addUserModal, setAddUserModal] = useState(false)
	const [userOrderModal, setUserOrderModal] = useState(false)

	const handleAddUser = async () => {
		const res = await request(
			"/user/add",
			{ ...editNewUserInfo, role: 3 },
			"post"
		)
		if (res) {
			getUserChannels()
			setAddUserModal(false)
		}
	}
	const handleDelUser = async (_id) => {
		const res = await request("/user/delete", { _id }, "post")
		if (res) {
			getUserChannels()
		}
	}
	const handleEditNewUser = (values) => {
		setNewUserEditInfo({
			...editNewUserInfo,
			...values,
		})
	}
	const handleEditUser = (values) => {
		setUserEditInfo({
			...editUserInfo,
			...values,
		})
	}

	const handleConfrim = async () => {
		const res = await request("/user/update", { ...editUserInfo }, "post")
		if (res) {
			setUserEditInfo(false)
			getUserChannels()
		}
	}
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
			<Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
				<Table
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "姓名", width: "2/22" },
						{ name: "账号名", width: "4/22" },
						{ name: "密码", width: "2/22" },
						{ name: "通道", width: "1/22" },

						{ name: "登记日期", width: "2/22" },
						{ name: "客户订单", width: "2/22" },
						{ name: "操作按钮", width: "2/22" },
					]}
				>
					{props.userList.map((user, index) => {
						return (
							<TableLine
								haveEdit
								onEdit={() => {
									setUserEditInfo({
										_id: user._id,
										name: user.name,
										account: user.account,
										password: user.password,
										email: user.email,
										contact: user.contact,
										phone: user.phone,
										contact: user.contact,
										customerType: user.customerType,
										address: user.address,
										remark: user.remark,
										channels: user.channels,
									})
								}}
								haveDel
								onDel={() => {
									handleDelUser(user._id)
								}}
							>
								<Text style={{ padding: "20px 0" }}>{index + 1}</Text>
								<Text>{user.name}</Text>

								<Text>{user.account}</Text>
								<Text>{user.password}</Text>
								<Text>{user.channels[0].code}</Text>
								<Text>{user.createTime.slice(0, 10)}</Text>
								<Text
									onClick={() => {
										setUserOrderModal(user)
									}}
								>
									查看
								</Text>
							</TableLine>
						)
					})}
				</Table>

				{channelList.length > 0 ? (
					<Button
						variant="primary"
						height="44px"
						width="140px"
						bg="#1B1B1B"
						color="#fff"
						padding="0"
						mt="10px"
						sx={{
							position: "fixed",
							zIndex: 9999,
							bottom: 20,
							right: 20,
							borderRadius: 0,
							fontSize: "14px",
							cursor: "pointer",
						}}
						onClick={() => {
							setNewUserEditInfo({ channels: [channelList[0]._id] })
							setAddUserModal(true)
						}}
					>
						新增客户
					</Button>
				) : null}
			</Flex>
			{addUserModal ? (
				<Modal
					onClose={() => {
						setAddUserModal(false)
					}}
				>
					{infos.map((info) => (
						<Flex justifyContent="space-between" pb="12px">
							<Text mr="10px">{info.cn}:</Text>
							{!info.type ? (
								<input
									onChange={(e) => {
										let values = {}
										values[info.name] = e.target.value
										handleEditNewUser(values)
									}}
								/>
							) : null}
							{info.type === "select" ? (
								<select
									style={{
										width: "120px",
									}}
									onChange={(e) => {
										let values = {}
										values[info.name] = [e.target.value]
										handleEditNewUser(values)
									}}
								>
									{
										props.channelList.map((c, index) => {
											return (
												<option value={c._id}>{`${c.code}-${c.name}`}</option>
											)
										})
										/* */
									}
								</select>
							) : null}
							{info.type === "area" ? (
								<textarea
									width="140px"
									onChange={(e) => {
										let values = {}
										values[info.name] = e.target.value
										handleEditNewUser(values)
									}}
								/>
							) : null}
						</Flex>
					))}
					<Button
						variant="primary"
						height="32px"
						width="68px"
						bg="#1B1B1B"
						color="#fff"
						padding="0"
						mt="14px"
						sx={{
							borderRadius: 0,
							fontSize: "14px",
							cursor: "pointer",
						}}
						onClick={handleAddUser}
					>
						新增
					</Button>
				</Modal>
			) : null}
			{editUserInfo ? (
				<Modal
					onClose={() => {
						setUserEditInfo(false)
					}}
				>
					{infos.map((info) => (
						<Flex justifyContent="space-between" pb="12px">
							<Text mr="10px">{info.cn}:</Text>
							{!info.type ? (
								<input
									value={editUserInfo[info.name]}
									onChange={(e) => {
										let values = { _id: editUserInfo._id }
										values[info.name] = e.target.value
										handleEditUser(values)
									}}
								/>
							) : null}
							{info.type === "select" ? (
								<select
									style={{
										width: "120px",
									}}
									defaultValue={
										editUserInfo[info.name]
											? editUserInfo[info.name][0]._id
											: ""
									}
									onChange={(e) => {
										let values = { _id: editUserInfo._id }
										values[info.name] = [e.target.value]
										handleEditUser(values)
									}}
								>
									{
										props.channelList.map((c) => {
											return (
												<option value={c._id}>{`${c.code}-${c.name}`}</option>
											)
										})
										/* */
									}
								</select>
							) : null}
							{info.type === "area" ? (
								<textarea
									value={editUserInfo[info.name]}
									width="140px"
									onChange={(e) => {
										let values = { _id: editUserInfo._id }
										values[info.name] = e.target.value
										handleEditUser(values)
									}}
								/>
							) : null}
						</Flex>
					))}
					<Button
						variant="primary"
						height="22px"
						width="68px"
						bg="#1B1B1B"
						color="#fff"
						padding="0"
						mt="10px"
						sx={{
							borderRadius: 0,
							fontSize: "14px",
							cursor: "pointer",
						}}
						onClick={handleConfrim}
					>
						确认
					</Button>
				</Modal>
			) : null}
			{userOrderModal ? (
				<Modal
					onClose={() => {
						setUserOrderModal(false)
					}}
				>
					<UserOrderTable userId={userOrderModal._id} rate={rate} />
				</Modal>
			) : null}
		</Flex>
	)
}
