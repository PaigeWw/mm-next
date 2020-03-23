import React, { useState } from "react"
import { Flex, Text, Button } from "rebass"
import Table, { TableLine } from "./base-table"
import Modal from "../modal"
import request from "../../utils/request"

export default props => {
	const infos = [
		{ name: "name", width: "2/22" },
		{ name: "account", width: "4/22" },
		{ name: "password", width: "2/22" }
	]
	const [editUserInfo, setUserEditInfo] = useState(false)
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
										password: user.password
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
			</Flex>
			{editUserInfo ? (
				<Modal
					onClose={() => {
						setUserEditInfo(false)
					}}
				>
					{infos.map(info => (
						<Flex justifyContent="space-between" pb="12px">
							<Text mr="10px">{info.name.toUpperCase()}:</Text>
							<input
								value={editUserInfo[info.name]}
								onChange={e => {
									let values = { _id: editUserInfo._id }
									values[info.name] = e.target.value
									handleEditUser(values)
								}}
							/>
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
