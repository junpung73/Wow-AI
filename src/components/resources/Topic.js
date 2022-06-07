import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Topic() {
    return (
        <Link to='/detail-blog' style={{textDecoration: 'none'}}>
            <Card sx={{
                backgroundColor: 'var(--primary-bg)',
                color: 'var(--primary-text)',
<<<<<<< HEAD
                margin: '2.5%',
=======
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
                borderRadius: '30px'
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="auto"
                        image="/images/Group73.png"
                        alt="green iguana"
                        sx={{ borderRadius: '30px' }}
                    />
                    <CardContent sx={{ paddingLeft: '0', paddingRight: '0' }}>
                        <Typography variant="body2" color="#B8B8B8" sx={{ padding: '0.4rem 0' }}>
                            10-08-2021
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            Surge of this virus is unpredictable in this era. Thoughts?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
