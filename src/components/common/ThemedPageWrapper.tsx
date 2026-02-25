"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemedPageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();

    return (
        <main className={`${theme.background} ${theme.text}`}>{children}</main>
    );
}
