import React, {useReducer} from 'react';
import { UserContext } from './UserContext';

const USER_ACTION = {
	SET_USER: "SET_USER",
	LOGOUT: "LOGOUT"
};

const initialState = {
	name: '',
	password: ''
};

const userReducer = (state, action) => {
	switch (action.type){
		case USER_ACTION.SET_USER: {
			return {...state, ...action.payload}
		}
		case USER_ACTION.LOGOUT: {
			return initialState
		}
		default: {
			return state
		}
	}
};

export function UserProvider({children}){
	const [user, dispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider value={{
			user,
			setUser: (name) => dispatch({type: USER_ACTION.SET_USER,  payload: name}),
			logoutUser: (name) => dispatch({type: USER_ACTION.LOGOUT})
		}}>
			{children}
		</UserContext.Provider>
	)
}