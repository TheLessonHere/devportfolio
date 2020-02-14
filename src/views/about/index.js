import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

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
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    imageContainer: {
        maxWidth: "400px",
        width: "100%",
        height: "400px",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    imageContainerMobile: {
        maxWidth: "300px",
        width: "100%",
        height: "300px",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "350px",
        maxWidth: "1200px",
        width: "100%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerSmallDesk: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "450px",
        maxWidth: "1000px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerTablet: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        maxWidth: "800px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerMobile: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "900px",
        maxWidth: "350px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    image: {
        maxWidth: "400px",
        width: "100%",
        height: "400px",
        borderRadius: "25px",
    },
    imageMobile: {
        maxWidth: "300px",
        width: "100%",
        height: "300px",
        borderRadius: "25px",
    },
    header1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.75rem",
        color: "whitesmoke",
        textDecoration: "underline",
        justifySelf: "start",
        alignSelf: "start",
        paddingLeft: "15px"
    },
    aboutText: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.5rem",
        color: "whitesmoke",
        paddingLeft: "15px",
        paddingRight: "15px"
    }
}));

function About(props){
    const classes = useStyles();
    const smallDesk = useMediaQuery("(max-width: 1000px)");
    const tablet = useMediaQuery("(max-width: 800px)");
    const mobile = useMediaQuery("(max-width: 650px)");

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={classes.contentContainer}>
                <div className={mobile ? classes.imageContainerMobile : classes.imageContainer}>
                    <img className={mobile ? classes.imageMobile : classes.image} src={require("../../assets/headshot.png")} alt="headshot"/>
                </div>
                <div className={mobile ? classes.textContainerMobile : 
                                tablet ? classes.textContainerTablet : 
                                smallDesk ? classes.textContainerSmallDesk : 
                                classes.textContainer}>
                    <h1 className={classes.header1}>About</h1>
                    <p className={classes.aboutText}>
                    I am a Full-Stack Web Developer from Rocklin, California who currently resides in Ogden, Utah. I've been coding and doing web design for 
                    about two years now. I received my Full Stack technical endorsement from Lamba School with whom I've been working for most of my time as 
                    a developer.
                    </p>
                    <br/>
					<p className={classes.aboutText}>I've already done quite a bit of work in my short time as a developer. Be sure to check out the 
                    <Link to="/projects"> projects</Link> I've completed to get a fuller understanding of my abilities!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About