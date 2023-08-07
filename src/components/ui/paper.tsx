/**
 *   Project: lifeplanner-webapp
 *   File: paper
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */
import classNames from 'classnames';

function Paper({
                   className,
                   ...props
               }: React.PropsWithChildren<React.DetailsHTMLAttributes<HTMLDivElement>>) {
    return <div className={classNames(className, 'relative')} {...props} />;
}

export default Paper;
