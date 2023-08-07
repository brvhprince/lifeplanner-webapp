/**
 *   Project: lifeplanner-webapp
 *   File: use-is-dark-mode
 *   Created by pennycodes on 06/08/2023.
 *   Copyright lifeplanner-webapp
 */

import { useTheme } from 'next-themes';

export function useIsDarkMode() {
    const { resolvedTheme } = useTheme();

    return {
        isDarkMode: resolvedTheme === 'dark',
    };
}
