import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import clicked from "../components/Navbar"
import { Link } from 'react-router-dom'
import { useState } from 'react'
;


export const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
    children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function SlideAlert() {


    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div className="flex flex-row justify-center mx-auto bg-cover bg-fixed place-items-center h-screen">
            <Button variant="contained" onClick={() => handleOpen()} className="bg-red-300">
            Learn More About the Creator
            </Button>
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle>{"About"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    Shawn is always wanting to learn and expand his knowledge of programming, but if you want to make LEMONADE.. you have come to the right place!
                    </DialogContentText>
                </DialogContent>

                <DialogActions>


                    <Button>
                        <div>
                            <Link to='/' onClick={ clicked }>
                                Go Explore
                            </Link>
                        </div>
                    </Button>


                    <Button onClick={handleClose}>
                        <div>
                            <Link to='/dashboard' onClick={ clicked }>
                                Get Recipes!
                            </Link>
                        </div>
                    </Button>

                </DialogActions>
            </Dialog>
        
        </div>
        
    );
}

export default SlideAlert
