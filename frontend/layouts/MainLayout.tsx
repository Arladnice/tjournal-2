import React from "react";
import clsx from "clsx";
import { SideComments } from "../components/SideComments";
import LeftMenu from "../components/LeftMenu";

interface MainLayoutProps {
    hideComments?: boolean;
    hideMenu?: boolean;
    contentFullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    contentFullWidth,
    hideComments,
    className,
}) => {
    return (
        <div className={clsx("wrapper", className)}>
            <div className="leftSide">
                <LeftMenu />
            </div>
            <div
                className={clsx("content", {
                    "content--full": contentFullWidth,
                })}
            >
                {children}
            </div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments />
                </div>
            )}
        </div>
    );
};
