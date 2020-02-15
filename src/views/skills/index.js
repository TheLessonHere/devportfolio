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
        marginTop: "75px",
        boxShadow: "5px 5px 15px black"
    },
    imageContainerMobile: {
        maxWidth: "300px",
        width: "100%",
        height: "300px",
        borderRadius: "25px",
        marginTop: "75px",
        boxShadow: "5px 5px 15px black"
    },
    textContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "450px",
        maxWidth: "1200px",
        width: "100%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerSmallDesk: {
        display: "flex",
        flexFlow: "column",
        height: "650px",
        maxWidth: "1000px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerTablet: {
        display: "flex",
        flexFlow: "column",
        height: "800px",
        maxWidth: "800px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
        backgroundColor: "rgba(122, 136, 152, 0.5)",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainerMobile: {
        display: "flex",
        flexFlow: "column",
        height: "1750px",
        maxWidth: "300px",
        width: "95%",
        marginTop: "30px",
        margin: "0 auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
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
        alignSelf: "start"
    },
    skillsText: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.40rem",
        color: "whitesmoke"
    }
}));

function Skills(props){
    const classes = useStyles();
    const smallDesk = useMediaQuery("(max-width: 1200px)");
    const tablet = useMediaQuery("(max-width: 800px)");
    const mobile = useMediaQuery("(max-width: 650px)");

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={classes.contentContainer}>
                <div className={mobile ? classes.imageContainerMobile : classes.imageContainer}>
                    <img className={mobile ? classes.imageMobile : classes.image} src={require("../../assets/image1.png")} alt="outdoors"/>
                </div>
                <div className={mobile ? classes.textContainerMobile : 
                                tablet ? classes.textContainerTablet : 
                                smallDesk ? classes.textContainerSmallDesk : 
                                classes.textContainer}>
                    <h1 className={classes.header1}>Skills</h1>
                    <p className={classes.skillsText}>
                    I'm a Full-Stack Web Developer, meaning that I have knowledge of both Front and Back-End Web Development and Web Design. I'm fluent 
                    in HTML, CSS, and Javascript as well as some popular Javascript Frameworks like React.js/Redux for the Front-End and Node.js/Express 
                    for the Back-End. I've also created REST APIs using Python and Django. I know SQL, and am familiar with TDD (mainly unit testing). 
                    I've also studied courses on Computer Science and know how to optimize time and space complexity if code ever needs to be refactored 
                    for optimization. 
					I'm a very fast learner and can catch on to any system or programming language quite quickly, and I'm willing to work hard to do so 
                    if it is ever requested of me.
                    </p>
                    <br/>
                    <p className={classes.skillsText}>
                    Prior to Web Development, I worked for over 2 years doing Customer Service in both the food and retail industries, which has given me 
                    excellent people skills, team communication skills, and time management skills. I will work incredibly hard to fulfill my role and ensure 
                    that my final product is always satisfactory!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills