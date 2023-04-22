import 'css/components/Login.css';
import * as React from 'react';
import { Card, CardContent, CardActions, Button, Grid, Typography, TextField, Box, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';

function Login() {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
	  event.preventDefault();
	};

	return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}
			>
				<Card sx={{
					bgcolor: 'background.paper',
					boxShadow: 1,
					borderRadius: 2,
					p: 2,
					minWidth: 300,
				}}>
					<CardContent
						sx={{
						}}
					>
							<Typography variant="h5">WelCome !</Typography>
							<Box mt={2}>
								<TextField
									id="input-with-icon-textfield"
									label="ID"
									InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
									}}
									variant="standard"
								/>
							</Box>
							<Box mt={2}>
								<TextField
										id="input-with-icon-textfield"
										type={showPassword ? 'text' : 'password'}
										label="Password"
										InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
										}}
										variant="standard"
								/>
							{/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
								<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									type={showPassword ? 'text' : 'password'}
									endAdornment={
									<InputAdornment position="end">
										<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
										>
										{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
									}
									label="Password"
								/>
								</FormControl> */}

							</Box>
					</CardContent>
					<CardActions>
						<Button size="small">Login</Button>
					</CardActions>
				</Card>
			</Grid>
	);
};

export default Login;