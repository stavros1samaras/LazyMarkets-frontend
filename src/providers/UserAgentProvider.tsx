"use client"

import { createContext, ReactNode } from "react"

export const UserAgentContext = createContext<string>("desktop")

interface UserAgentProviderProps {
	value: string
	children: ReactNode
}

export function UserAgentProvider({ value, children }: UserAgentProviderProps) {
	return <UserAgentContext value={value}>{children}</UserAgentContext>
}
