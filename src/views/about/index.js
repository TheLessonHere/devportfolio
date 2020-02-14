import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        paddingTop: "20px"
    },
    imageContainer: {
        maxWidth: "400px",
        width: "100%",
        height: "400px",
        borderRadius: "25px",
        boxShadow: "5px 5px 15px black"
    },
    textContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
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
    image: {
        maxWidth: "400px",
        width: "100%",
        height: "400px",
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
    aboutText: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.5rem",
        color: "whitesmoke"
    }
}));

function About(props){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={require("../../assets/headshot.png")} alt="headshot"/>
                </div>
                <div className={classes.textContainer}>
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