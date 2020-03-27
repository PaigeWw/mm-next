import React, { useState } from "react"
import { Flex, Text, Button } from "rebass"
import Table, { TableLine } from "./base-table"
import Modal from "../modal"
import request from "../../utils/request"

export default props => {
	const { getUserChannels, channelList } = props
	const infos = [
		{ name: "name", required: true },
		{ name: "account", width: "4/22", required: true },
		{ name: "password", width: "2/22", required: true },
		{ name: "contact", width: "2/22" },
		{ name: "phone", width: "2/22" },
		{ name: "email", width: "2/22" },
		{ name: "customerType", width: "2/22" },
		{ name: "address", width: "2/22" },
		{ name: "channels", width: "2/22", type: "select" },
		{ name: "remark", type: "area" }
	]
	const [editUserInfo, setUserEditInfo] = useState(false)
	const [editNewUserInfo, setNewUserEditInfo] = useState({})
	const [addUserModal, setAddUserModal] = useState(false)

	const handleAddUser = async () => {
		const res = await request(
			"/user/add",
			{ ...editNewUserInfo, role: 3 },
			"post"
		)
		if (res) {
			setAddUserModal(false)
		}
	}
	const handleEditNewUser = values => {
		setNewUserEditInfo({
			...editNewUserInfo,
			...values
		})
	}
	const handleEditUser = values => {
		setUserEditInfo({
			...editUserInfo,
			...values
		})
	}

	const handleConfrim = async () => {
		const res = await request("/user/update", { ...editUserInfo }, "post")
		if (res) {
			// console.log("res", res)
		}
	}
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				cursor: "pointer",
				height: "100%",
				background: "#FFF0E5"
			}}
		>
			<Flex sx={{ padding: "0 18px 18px 18px" }} alignItems="stretch">
				<Table
					sx={{ margin: "0", marginRight: "1px", width: "100%" }}
					titles={[
						{ name: "00", width: "2/22", isHide: true },
						{ name: "NAME", width: "2/22" },
						{ name: "ACCOUNT", width: "4/22" },
						{ name: "PASSWORD", width: "2/22" },
						{ name: "AISLE", width: "1/22" },

						{ name: "CREATION TIME", width: "2/22" },
						{ name: "ORDER", width: "2/22" },
						{ name: "OPERATING", width: "2/22" }
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
										channels: user.channels
									})
								}}
								haveDel
							>
								<Text style={{ padding: "20px 0" }}>{index}</Text>
								<Text>{user.name}</Text>

								<Text>{user.account}</Text>
								<Text>{user.password}</Text>
								<Text>{user.channels[0].code}</Text>
								<Text>{user.createTime}</Text>
								<Text onClick={() => {}}>CLICK TO VIEW</Text>
							</TableLine>
						)
					})}
				</Table>

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
						cursor: "pointer"
					}}
					onClick={() => {
						setAddUserModal(true)
					}}
				>
					ADD CUSTOMER
				</Button>
			</Flex>
			{addUserModal ? (
				<Modal
					onClose={() => {
						setAddUserModal(false)
					}}
				>
					{infos.map(info => (
						<Flex justifyContent="space-between" pb="12px">
							<Text mr="10px">{info.name.toUpperCase()}:</Text>
							{!info.type ? (
								<input
									onChange={e => {
										let values = {}
										values[info.name] = e.target.value
										handleEditNewUser(values)
									}}
								/>
							) : null}
							{info.type === "select" ? (
								<select
									style={{
										width: "120px"
									}}
									onChange={e => {
										let values = {}
										values[info.name] = [e.target.value]
										handleEditNewUser(values)
									}}
								>
									{props.channelList.map((c, index) => {
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
									onChange={e => {
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
							cursor: "pointer"
						}}
						onClick={handleAddUser}
					>
						ADD
					</Button>
				</Modal>
			) : null}
			{editUserInfo ? (
				<Modal
					onClose={() => {
						setUserEditInfo(false)
					}}
				>
					{infos.map(info => (
						<Flex justifyContent="space-between" pb="12px">
							<Text mr="10px">{info.name.toUpperCase()}:</Text>
							{!info.type ? (
								<input
									value={editUserInfo[info.name]}
									onChange={e => {
										let values = { _id: editUserInfo._id }
										values[info.name] = e.target.value
										handleEditUser(values)
									}}
								/>
							) : null}
							{info.type === "select" ? (
								<select
									style={{
										width: "120px"
									}}
									defaultValue={
										editUserInfo[info.name]
											? editUserInfo[info.name][0]._id
											: ""
									}
									onChange={e => {
										let values = { _id: editUserInfo._id }
										values[info.name] = [e.target.value]
										handleEditUser(values)
									}}
								>
									{props.channelList.map(c => {
										console.log(c._id)
										console.log(info.name)
										console.log(editUserInfo[info.name])
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
									onChange={e => {
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
							cursor: "pointer"
						}}
						onClick={handleConfrim}
					>
						FINISH
					</Button>
				</Modal>
			) : null}
		</Flex>
	)
}
