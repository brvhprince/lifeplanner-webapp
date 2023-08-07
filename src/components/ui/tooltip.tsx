/**
 *   Project: lifeplanner-webapp
 *   File: tooltip
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */

import React, {forwardRef, memo} from 'react';
import Tippy, {TippyProps} from '@tippyjs/react/headless';




const Tooltip = forwardRef<HTMLDivElement, TippyProps>(
    ({ content, children, placement = 'top', offset = [0, 0], delay = 0, interactive = false }, ref) => {

        return (
            <Tippy
                content={content}
                placement={placement}
                offset={offset}
                delay={delay}
                interactive={interactive}
                render={attrs => (
                    <div className={'bg-brand-black-secondary rounded-md p-3 mb-2'} tabIndex={-1} {...attrs}>
                        {content}
                    </div>
                )}
            >
                <div ref={ref}>
                    {children}
                </div>
            </Tippy>
        );
    }
);

Tooltip.displayName = "CustomTooltip";
export default memo(Tooltip);
