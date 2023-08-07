/**
 *   Project: lifeplanner-webapp
 *   File: use-is-mounted
 *   Created by pennycodes on 06/08/2023.
 *   Copyright lifeplanner-webapp
 */

import { useEffect, useState } from 'react';

export function useIsMounted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted;
}
