import React from "react";
import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from "@material-ui/icons";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <Image
                        height={35}
                        width={35}
                        className="mr-20"
                        src="/static/img/logo.svg"
                        alt="Logo"
                    />
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>

                <Button variant="contained" className={styles.penButton}>
                    Новая запись
                </Button>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Link href="/profile/1" className="d-flex align-center">
                    <Avatar
                        className={styles.avatar}
                        alt="Remy Sharp"
                        src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                    />
                    <ArrowBottom />
                </Link>
            </div>
        </Paper>
    );
};
