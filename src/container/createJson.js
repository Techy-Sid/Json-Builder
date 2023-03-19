import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CreateJSON = () => {
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = () => { };

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <TextField
                            autoComplete="given-name"
                            name="item"
                            required
                            fullWidth
                            id="item"
                            label="Field"
                            autoFocus
                        />
                    </Grid>
                ))}
            </Grid>
            <Box className="createJsonFooter">
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={1}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isSubmitDisabled}
                        >
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={1}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isSubmitDisabled}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
    </Container>
  );
}

export default CreateJSON
