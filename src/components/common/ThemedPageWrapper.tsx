"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemedPageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();

    return (
        <div className={`${theme.background} ${theme.text}`}>{children}</div>
    );
}
