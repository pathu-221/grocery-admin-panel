import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../interfaces/user.interface";

interface AuthContextType {
	user: IUser | null | undefined;
	setUser: (user: IUser | null | undefined) => void;
}

export const authContext = createContext<AuthContextType>({
	user: null,
	setUser: () => {}, // Placeholder function
});

export function useAuth() {
	return useContext(authContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<IUser | null | undefined>(null);

	const contextValue: AuthContextType = {
		user,
		setUser,
	};

	return (
		<authContext.Provider value={contextValue}>{children}</authContext.Provider>
	);
}
