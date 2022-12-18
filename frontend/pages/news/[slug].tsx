import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import * as React from "react";
import Comment from "../../components/Comment";
import FullPost from "../../components/FullPost";
import { MainLayout } from "../../layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout contentFullWidth>
            <FullPost />
            <Paper elevation={0} className="mt-40 p-30">
                <Typography className="mb-30" variant="h6">
                    42 комментария
                </Typography>
                <Tabs
                    className="mt-20"
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <div className="mb-20" />
                <Comment />
                <Comment />
                <Comment />
            </Paper>
        </MainLayout>
    );
}
