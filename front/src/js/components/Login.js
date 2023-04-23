import * as React from 'react';
import { Card, CardContent, CardActions, Button, Grid, Typography, TextField, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';
import axios from 'axios';

function Login() {
	const [showPassword, setShowPassword] = React.useState(false);
	const [idValue, setId] = React.useState('');
	const [passwordValue, setPassword] = React.useState('');

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
	  event.preventDefault();
	};

	const saveUserId = e => {
		setId(e.target.value);
	};

	const saveUserPassword = e => {
		setPassword(e.target.value);
	};

const login = () => {
	let sendData = JSON.stringify({
		id: idValue,
		password: passwordValue,
	});
	axios({
		method: "POST",
		url: 'http://localhost:8080/rest/login',
		data: sendData,
		// header에서 JSON 타입의 데이터라는 것을 명시
		headers: {'Content-type': 'application/json'}
	}).then((res)=>{
		alert("성공");
		// API로 부터 받은 데이터 출력
		console.log(res.data);
	}).catch(error=>{
		console.log("실패");
		console.log(error);
	});
}

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
							<Typography variant="h5">Welcome !</Typography>
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
									value={idValue}
            						onChange={saveUserId}
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
										value={passwordValue}
										onChange={saveUserPassword}
								/>
							</Box>
					</CardContent>
					<CardActions>
						<Button size="small" onClick={login}>Login</Button>
					</CardActions>
				</Card>
			</Grid>
	);
};

export default Login;