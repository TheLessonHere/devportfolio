import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';


const useStyles = makeStyles(theme => ({
    container: {
        margin: "0 auto",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    backButton: {
        position: "fixed",
        marginLeft: "10px",
        marginTop: "10px",
        fontSize: "4em",
        color: "whitesmoke",
        borderRadius: "10px",

        "&:hover": {
            boxShadow: "2px 2px 5px lightgrey"
        }
    },
    contentContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        maxWidth: "1200px",
        width: "100%",
        marginTop: "150px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    iconContainer: {
        marginRight: "5px",
        marginLeft: "5px",
        marginTop: "10px",
        paddingTop: "20px"
    },
    icon: {
        fontSize: "10em",
        transition: "0.75s",
        color: "whitesmoke",
    },
    ulist: {
        padding: "300px auto",
        width: "90%"
    },
    ulistel: {
        listStyle: "none",
        float: "left",
        textAlign: "center",
        width: "33.3%",

        "&:hover svg":{
            transform: "translateY(-20px) scale(.5)"
        },
        "&:hover div":{
            transform: "translateY(-20px)",
            opacity: "1"
        }
    },
}));

function Contact(props){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={classes.contentContainer}>
                <ul className={classes.ulist}>
                    <li className={classes.ulistel}>
                        <div className={classes.iconContainer}>
                                <EmailSharpIcon className={classes.icon}/>
                                <div id="email" className="button-text">
                                    levithomasfswd@gmail.com
                                    <br/>
                                    or
                                    <br/>
                                    levithomas0@live.com
                                </div>
                        </div>
                    </li>
                    <li className={classes.ulistel}>
                        <div className={classes.iconContainer}>
                                <RoomSharpIcon className={classes.icon}/>
                                <div id="location" className="button-text">
                                    Ogden, UT
                                    <br/>
                                    and
                                    <br/>
                                    The Greater Salt Lake Area
                                </div>
                        </div>
                    </li>
                    <li className={classes.ulistel}>
                        <div className={classes.iconContainer}>
                                <PhoneSharpIcon className={classes.icon}/>
                                <div id="mobile" className="button-text">
                                    Mobile
                                    <br/>
                                    916.914.9891
                                </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact