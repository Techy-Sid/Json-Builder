import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FAQ from './faq';
import Project from './project';
import CreateJSON from './createJson';

const Page = ({ menuItem }) => {

    const getComponent = () => {
        if (menuItem === 'FAQ') return <FAQ />;
        if (menuItem === 'Project') return <Project />;
        if (menuItem === 'Create JSON') return <CreateJSON />;
    }

    return (
        <>
            <Box className="pages">
                <Box className="pageTitle">
                    <Typography component="h1" variant="h5">
                        {menuItem}
                    </Typography>
                </Box>
                {getComponent()}
            </Box>
        </>
    )
}

export default Page