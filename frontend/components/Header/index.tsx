import { IconButton, Paper, Avatar, Link, Button } from "@material-ui/core";
import React from "react";

import {
    Menu as MenuIcon,
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    NotificationsNoneOutlined as NotificationIcon,
} from "@material-ui/icons";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a>
                        <Image
                            width={30}
                            height={40}
                            className="mr-25 ml-10"
                            src="/static/img/logo.svg"
                            alt="Logo"
                        />
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>
                <Link href="/write">
                    <a>
                        <Button
                            variant="contained"
                            className={styles.penButton}
                        >
                            Новая запись
                        </Button>
                    </a>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Avatar src="https://sun9-81.userapi.com/impf/Bg63GCGgF7aQPwVllzOmz8CTWja2YxSHstccLg/RIqAQINMyDE.jpg?size=960x960&quality=96&sign=84f35c2a46c4f12ae71d761e3feeee45&type=album" />
            </div>
        </Paper>
    );
};

export default Header;
