import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Comment.module.scss";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";

const Comment = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src="https://sun9-79.userapi.com/impg/SgMl5sClQfP2Nv2XDI-kwsjX1K5Sr4Aqp3-xAw/ndz-8kxQUBI.jpg?size=810x1080&quality=95&sign=511f6411120e5d57895e92a4cc374b8c&type=album"
                    alt="Avatar"
                />
                <b>Denis Arlakov</b>
                <span>5 часов</span>
            </div>
            <Typography className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, at?
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    );
};

export default Comment;
