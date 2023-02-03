import React, { useContext } from 'react'
import { UserContext } from './context'

const UserInfo = () => {
	const userName = useContext(UserContext)
	return <span>{userName}</span>
}

export default UserInfo
