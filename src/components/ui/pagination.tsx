/**
 *   Project: lifeplanner-webapp
 *   File: pagination
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */
import RCPagination, { PaginationProps } from 'rc-pagination';
import React, { ReactNode } from 'react';
import 'rc-pagination/assets/index.css';

const Pagination: React.FC<PaginationProps> = (props) => {
    const textItemRender = (
        current: ReactNode,
        type: string,
        element: ReactNode
    ) => {
        if (type === 'prev') {
            return "Prev";
        }
        if (type === 'next') {
            return "Next";
        }
        return element;
    };

    return <RCPagination itemRender={textItemRender} {...props} />;
};

export default Pagination;
