import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import CallEndSharpIcon from '@material-ui/icons/CallEndSharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import StarsSharpIcon from '@material-ui/icons/StarsSharp';
import transitions from '@material-ui/core/styles/transitions';
import color from '@material-ui/core/colors/amber';

const useStyles = makeStyles(theme => ({
    container: {
        margin: "0 auto",
        paddingTop: "50px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    linkContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        maxWidth: "1200px",
        width: "100%",
        marginTop: "50px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black",
    },
    linkContainerTablet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        maxWidth: "800px",
        width: "95%",
        marginTop: "50px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black",
    },
    linkContainerMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1000px",
        maxWidth: "650px",
        width: "95%",
        marginTop: "50px",
        margin: "0 auto",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black",
    },
    iconContainer: {
        marginRight: "5px",
        marginLeft: "5px",
        paddingTop: "20px"
    },
    icon: {
        fontSize: "10em",
        transition: "0.75s",
        color: "whitesmoke",
    },
    iconTinyMobile: {
        fontSize: "8em",
        transition: "0.75s",
        color: "whitesmoke",
    },
    ulist: {
        padding: "300px auto",
        width: "90%",
    },
    ulistMobile: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        padding: "300px auto",
        width: "90%",
    },
    ulistel: {
        listStyle: "none",
        float: "left",
        textAlign: "center",
        width: "25%",

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
        width: "50%",

        "&:hover svg":{
            transform: "translateY(-20px) scale(.5)"
        },
        "&:hover div":{
            transform: "translateY(-20px)",
            opacity: "1"
        }
    },
    header1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "4rem",
        margin: "0 auto",
        marginTop: "75px",
        color: "whitesmoke"
    },
    header1Mobile: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "4rem",
        margin: "0 auto",
        color: "whitesmoke",
        paddingLeft: "10px"
    },
    header2: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        margin: "0 auto",
        color: "whitesmoke"
    },
    header2Mobile: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        margin: "0 auto",
        color: "whitesmoke",
        paddingLeft: "10px"
    },
    mobileHeader: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        margin: "0 auto",
        color: "whitesmoke"
    }
  }));

function Main(props){
    const classes = useStyles();
    const tablet = useMediaQuery("(max-width: 800px)");
    const mobile = useMediaQuery("(max-width: 650px)");
    const tinyMobile = useMediaQuery("(max-width: 400px)");

    return(
        <div className={classes.container}>
            <h1 className={mobile ? classes.header1Mobile : classes.header1}>Levi Thomas</h1>
            <h2 className={mobile ? classes.header2Mobile : classes.header2}>Full-Stack Web Developer</h2>
            <div className={mobile ? classes.linkContainerMobile : tablet ? classes.linkContainerTablet : classes.linkContainer}>
                <ul className={mobile ? classes.ulistMobile : classes.ulist}>
                    <li className={mobile ? classes.ulistelMobile : classes.ulistel}>
                        <Link to="/about">
                        <div className={classes.iconContainer}>
                                <InfoSharpIcon className={tinyMobile ? classes.iconTinyMobile : classes.icon}/>
                                <div className="button-text">About</div>
                                {mobile && <div className={classes.mobileHeader}>About</div>}
                        </div>
                        </Link>
                    </li>
                    <li className={mobile ? classes.ulistelMobile : classes.ulistel}>
                        <Link to="/skills">
                        <div className={classes.iconContainer}>
                                <CodeSharpIcon className={tinyMobile ? classes.iconTinyMobile : classes.icon}/>
                                <div className="button-text">Skills</div>
                                {mobile && <div className={classes.mobileHeader}>Skills</div>}
                        </div>
                        </Link>
                    </li>
                    <li className={mobile ? classes.ulistelMobile : classes.ulistel}>
                        <Link to="/projects">
                        <div className={classes.iconContainer}>
                                <StarsSharpIcon className={tinyMobile ? classes.iconTinyMobile : classes.icon}/>
                                <div className="button-text">Projects</div>
                                {mobile && <div className={classes.mobileHeader}>Projects</div>}
                        </div>
                        </Link>
                    </li>
                    <li className={mobile ? classes.ulistelMobile : classes.ulistel}>
                        <Link to="/contact">
                        <div className={classes.iconContainer}>
                                <CallEndSharpIcon className={tinyMobile ? classes.iconTinyMobile : classes.icon}/>
                                <div className="button-text">Contact</div>
                                {mobile && <div className={classes.mobileHeader}>Contact</div>}
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main