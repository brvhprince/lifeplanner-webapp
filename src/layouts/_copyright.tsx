/**
 *   Project: lifeplanner-webapp
 *   File: _copyright
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */
import cn from 'classnames';

export default function Copyright({ className }: { className?: string }) {
    const currentYear = new Date().getFullYear();

    return (
        <div className={cn('tracking-[0.2px]', className)}>
            &copy; Copyright {currentYear} All Rights Reserved.
            <a
                href="https://www.colorbrace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-dark"
            >
                Colorbrace LLC
            </a>
            .
        </div>
    );
}
