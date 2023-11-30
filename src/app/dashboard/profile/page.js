"use client";
import { useState } from "react";
import BasicLayout from '../../../layouts/DashLayout/page'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../sections/account/account-profile';
import { AccountProfileDetails } from '../..//sections/account/account-profile-details';
import 'simplebar-react/dist/simplebar.min.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../../theme/index';

function Categories() {
  const theme = createTheme();
  return (
    <BasicLayout>
      <ThemeProvider theme={theme}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={3}>
              <div>
                <Typography variant="h4">
                  Account
                </Typography>
              </div>
              <div>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <AccountProfile />
                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <AccountProfileDetails />
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>

    </BasicLayout>
  );
}

export default Categories;
