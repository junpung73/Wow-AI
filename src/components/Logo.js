import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const propTypes = {
    sx: PropTypes.object
};

const Logo = ({ sx }) => {
    return (
        <Box
            component='img'
            alt='WOW-AI_logo'
            src='/Frame.png'
            sx={{
                width: '100px',
                ...sx
            }}
        />
    );
};

Logo.propTypes = propTypes;

export default Logo;
