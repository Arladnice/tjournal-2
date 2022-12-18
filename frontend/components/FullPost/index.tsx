import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { PostActions } from "../PostActions";
import styles from "./FullPost.module.scss";
import MessageIcon from "@material-ui/icons/SmsOutlined";
import UserAddIcon from "@material-ui/icons/PersonAddOutlined";
const FullPost = () => {
    return (
        <Paper className={styles.paper} elevation={0}>
            <div style={{ margin: "0 auto", width: 680 }}>
                <Typography className={styles.title} variant="h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, possimus?
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ad, amet vero tempora ratione illo optio? Quis
                    ipsam illo autem!
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt veritatis illo sit at ut.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi tempora facere praesentium facilis expedita, quos non
                    nobis, a est voluptates cumque sit soluta possimus delectus
                    tenetur assumenda corrupti. Nihil, eaque.
                </Typography>
                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, laborum.
                </Typography>
                <div style={{ width: 250, marginLeft: -12 }}>
                    <PostActions />
                </div>
                <div className='d-flex justify-between align-center mt-30 mb-30'>
                    <div className={styles.userInfo}>
                        <img
                            src="https://sun9-79.userapi.com/impg/SgMl5sClQfP2Nv2XDI-kwsjX1K5Sr4Aqp3-xAw/ndz-8kxQUBI.jpg?size=810x1080&quality=95&sign=511f6411120e5d57895e92a4cc374b8c&type=album"
                            alt="Avatar"
                        />
                        <b>Arlakov Denis</b>
                        <span>+111</span>
                    </div>
                    <div>
                        <Button variant="contained" className="mr-15">
                            <MessageIcon />
                        </Button>
                        <Button variant="contained">
                            <UserAddIcon />
                            <b className="ml-10">Подписаться</b>
                        </Button>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default FullPost;
