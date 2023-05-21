import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack } from '@mui/material';
function Record() {

	const movePage = useNavigate();

	const moveAddPage = () => {
		movePage('/record/add');
	}

	return (
		<Container maxWidth="sx">
			<Box>
				<Typography variant='h4'>Manage Record</Typography>
			</Box>
			<Box>
				<Typography>SearchCondition:</Typography>
				<Typography>Keyword:</Typography>
				<Button>Search</Button>
			</Box>
			<Box>
				<Typography>List</Typography>
				<Button onClick={moveAddPage}>add</Button>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell> No. </TableCell>
								<TableCell> ManageNo. </TableCell>
								<TableCell> Title. </TableCell>
								<TableCell> CreatedDate. </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Box>
			<Stack spacing={2}>
				<Pagination count={10} showFirstButton showLastButton />
			</Stack>
			</Box>
		</Container>
	);
};

export default Record;