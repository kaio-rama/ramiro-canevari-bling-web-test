"use client"

import { ThemeProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeSwitch({children, ...props} : ThemeProviderProps){
    return <ThemeProvider {...props}>{children}</ThemeProvider>
}
