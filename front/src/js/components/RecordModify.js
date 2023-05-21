import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, TextField, Grid, FormControlLabel, Checkbox } from '@mui/material';
function RecordModify() {

	return (
		<Container maxWidth="sx">
			<Box>
				<Typography variant='h4'>Add Record</Typography>
			</Box>
			<Box alignItems={'center'}>
				{/* <Box><Typography>Title : </Typography>
				<TextField id="outlined-search" label="Title" type="add" /></Box> */}
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<TextField
							required
							id="title"
							name="title"
							label="Title"
							fullWidth
							autoComplete="Title"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="description"
							name="description"
							label="Description"
							fullWidth
							autoComplete="Title"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							id="keyword"
							name="keyword"
							label="Keyword"
							fullWidth
							autoComplete="shipping address-line1"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							component="label"
							>
							Upload File
							<input
								type="file"
								hidden
							/>
						</Button>
					</Grid>

					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox color="secondary" name="visibility" value="yes" />}
							label="Visibility"
						/>
					</Grid>
				</Grid>
			</Box>
			<Box>
				<Button>Add Record</Button>
			</Box>
		</Container>
	);
};

export default RecordModify;