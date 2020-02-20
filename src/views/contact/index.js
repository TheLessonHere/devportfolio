import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
        borderRadius: "100px",

        "&:hover": {
            boxShadow: "2px 2px 5px lightgrey"
        }
    },
    contentContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        maxWidth: "1200px",
        width: "100%",
        marginTop: "200px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    contentContainerTablet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "525px",
        maxWidth: "750px",
        width: "95%",
        marginTop: "50px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black",
    },
    contentContainerMobile: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "1050px",
        maxWidth: "650px",
        width: "95%",
        marginTop: "100px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black",
    },
    iconContainer: {
        marginRight: "5px",
        marginLeft: "5px",
        marginTop: "10px",
        paddingTop: "20px"
    },
    iconContainerMobile: {
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
    iconMobile: {
        fontSize: "8em",
        transition: "0.75s",
        color: "whitesmoke",
    },
    ulist: {
        padding: "300px auto",
        width: "90%"
    },
    ulistMobile: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        width: "90%",
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
    ulistelMobile: {
        listStyle: "none",
        float: "left",
        textAlign: "center",
        width: "100%",

        "&:hover svg":{
            transform: "translateY(-20px) scale(.5)"
        },
        "&:hover div":{
            transform: "translateY(-20px)",
            opacity: "1"
        }
    },
    info: {
        fontSize: "1rem",
        fontFamily: "'Poppins', sans-serif",
        color: "whitesmoke"
    },
    linkContainer: {
        display: "flex",
        width: "80%",
        justifyContent: "space-evenly"
    },
    linkContainerMobile: {
        display: "flex",
        width: "90%",
        marginTop: "75px",
        paddingLeft: "10px",
        paddingRight: "10px",
        justifyContent: "space-between"
    },
    linkIcon: {
        fontSize: "8em",
        color: "whitesmoke",
    }
}));

function Contact(props){
    const classes = useStyles();
    const tablet = useMediaQuery("(max-width: 700px)");
    const mobile = useMediaQuery("(max-width: 650px)");

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={mobile ? classes.contentContainerMobile: 
                            tablet ? classes.contentContainerTablet: 
                            classes.contentContainer}>
                <ul className={mobile ? classes.ulistMobile : classes.ulist}>
                    <li className={mobile ? classes.ulistelMobile: classes.ulistel}>
                        <div className={mobile ? classes.iconContainerMobile : classes.iconContainer}>
                                <EmailSharpIcon className={mobile ? classes.iconMobile : classes.icon}/>
                                <div id="email" className="button-text">
                                    levithomasfswd@gmail.com
                                    <br/>
                                    or
                                    <br/>
                                    levithomas0@live.com
                                </div>
                                {mobile && 
                                <div className={classes.info}>
                                    levithomasfswd@gmail.com
                                    <br/>
                                    or
                                    <br/>
                                    levithomas0@live.com
                                </div>}
                        </div>
                    </li>
                    <li className={mobile ? classes.ulistelMobile: classes.ulistel}>
                        <div className={mobile ? classes.iconContainerMobile : classes.iconContainer}>
                                <RoomSharpIcon className={mobile ? classes.iconMobile : classes.icon}/>
                                <div id="location" className="button-text">
                                    Ogden, UT
                                    <br/>
                                    and
                                    <br/>
                                    The Greater Salt Lake Area
                                </div>
                                {mobile && 
                                <div className={classes.info}>
                                    Ogden, UT
                                    <br/>
                                    and
                                    <br/>
                                    The Greater Salt Lake Area
                                </div>}
                        </div>
                    </li>
                    <li className={mobile ? classes.ulistelMobile: classes.ulistel}>
                        <div className={mobile ? classes.iconContainerMobile : classes.iconContainer}>
                                <PhoneSharpIcon className={mobile ? classes.iconMobile : classes.icon}/>
                                <div id="mobile" className="button-text">
                                    Mobile
                                    <br/>
                                    916.914.9891
                                </div>
                                {mobile && 
                                <div className={classes.info}>
                                    Mobile
                                    <br/>
                                    916.914.9891
                                </div>}
                        </div>
                    </li>
                </ul>
                <div className={mobile ? classes.linkContainerMobile : classes.linkContainer}>
                    <a href="https://github.com/TheLessonHere">
                    <GitHubIcon className={classes.linkIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/levithomasfswd/">
                    <LinkedInIcon className={classes.linkIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact