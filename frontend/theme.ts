import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    overrides: {
		MuiButton: {
			contained: {
				backgroundColor: 'white'
			}
		}
	}
});