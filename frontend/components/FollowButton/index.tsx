import { Button } from "@material-ui/core";
import {
    AddOutlined as AddIcon,
    CheckOutlined as CheckedIcon,
} from "@material-ui/icons";

import React, { useState } from "react";

const FollowButton = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Button
            onClick={() => setChecked(!checked)}
            variant="contained"
            style={{ width: 20, minWidth: 20, height: 30 }}
        >
            {!checked ? (
                <AddIcon />
            ) : (
                <CheckedIcon style={{ fontSize: 20, color: "#2ea83a" }} />
            )}
        </Button>
    );
};

export default FollowButton;
