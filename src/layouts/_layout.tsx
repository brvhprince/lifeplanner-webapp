/**
 *   Project: lifeplanner-webapp
 *   File: _layout
 *   Created by pennycodes on 07/08/2023.
 *   Copyright lifeplanner-webapp
 */

import { motion } from 'framer-motion';


export default function Layout({ children }: React.PropsWithChildren<{}>) {


    return (
        <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            className="flex min-h-screen w-full flex-col bg-light dark:bg-dark"
        >

            <div className="flex flex-1">
                <main
                    className={"flex w-full flex-col"}
                >
                    {children}
                </main>
            </div>
        </motion.div>
    );
}
