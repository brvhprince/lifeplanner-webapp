/**
 *   Project: lifeplanner-webapp
 *   File: index
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */
import cn from 'classnames';
import AnchorLink from '@/components/ui/links/anchor-link';
import routes from '@/config/routes';
import { useIsMounted } from '@/utils/hooks/use-is-mounted';
import { useIsDarkMode } from '@/utils/hooks/use-is-dark-mode';
import {SymbolPrimaryLogo} from "@/components/ui/logo/symbol/primary";
import {SymbolLightLogo} from "@/components/ui/logo/symbol/light";

export default function SymbolLogo({
                                 className = 'w-20',
                                 ...props
                             }: React.AnchorHTMLAttributes<{}>) {
    const isMounted = useIsMounted();
    const { isDarkMode } = useIsDarkMode();
    return (
        <AnchorLink
            href={routes.home}
            className={cn(
                'relative flex items-center text-dark focus:outline-none dark:text-light',
                className
            )}
            {...props}
        >
      <span
          className="relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-110 w-full h-full"
      >
        {isMounted && isDarkMode && (
            <SymbolLightLogo
                className="w-full h-full"
            />
        )}
          {isMounted && !isDarkMode && (
              <SymbolPrimaryLogo
                  className="w-full h-full"
              />
          )}
      </span>
        </AnchorLink>
    );
}
