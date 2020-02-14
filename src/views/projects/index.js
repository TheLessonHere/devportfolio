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
    videoContainer: {
        maxWidth: "560px",
        width: "100%",
        height: "400px",
    },
    textContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "800px",
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
    header1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.75rem",
        color: "whitesmoke",
        textDecoration: "underline",
        justifySelf: "start",
        alignSelf: "start"
    },
    projectsText: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.25rem",
        color: "whitesmoke"
    }
}));

function Projects(props){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Link to="/">
                <ArrowBackSharpIcon className={classes.backButton}/>
            </Link>
            <div className={classes.contentContainer}>
                <div className={classes.videoContainer}>
                    <iframe width="100%" 
                            height="400px" 
                            src="https://www.youtube.com/embed/38Ambr8lmQ0" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div className={classes.textContainer}>
                    <h1 className={classes.header1}>Projects</h1>
                    <p className={classes.projectsText}>
                    Above is a video of me presenting the final release of the Baseball Game Predictor project mentioned below. It goes more 
                    in depth on the decisions we made with the project, and the team I was working with.
                    </p>
                    <br/>
                    <p className={classes.projectsText}><a href="https://elegant-easley-19cd29.netlify.com/">Here</a> is one of the very first webpages 
                    I built. It's a marketing website for an app called "How To" which required basic HTML, CSS/Less, and Javascript. It's not as polished 
                    as some of my later work, but I think the design still looks simple, clean, and professional. I would consider it my first "real" project.
                    </p>
                    <br/>
                    <p className={classes.projectsText}><a href="https://lifegpaproject.netlify.com/">Here</a> is the first and only release of a React 
                    app for our project "LifeGPA" on which I worked as the Front End Lead. It took a team of around 5 front end developers 4 days to make, 
                    and required both React and Redux. I think it's pretty impressive for what it is and shows off my grasp of those two frameworks.
                    </p>
                    <br/>
                    <p className={classes.projectsText}><a href="https://github.com/Build-Week-FriendFinder/Back-End">Here</a> is the repository for 
                    a REST API I created for another project I worked on called "Friend Finder" on which I was the sole Back End developer. Even though 
                    the Front End portion of the project is not entirely functioning, Lambda reused my API for the next group that built the project as well. 
                    It required use of Node.js and Express, and while I'm proud of the functionality, I'm more proud of the documentation I prepared from scratch.
                    </p>
                    <br/>
                    <p className={classes.projectsText}><a href="http://www.baseballgamepredictor.com/">Here</a> is the project I was presenting in the video
                    above. It's a Data Science app that predicts the outcomes of baseball games. Our team of 3 Full-Stack Developers had around 6 weeks to work 
                    on it and managed to get through about two and a half of our release canvases with more planned for the future. Again, this app was built 
                    with React and Redux, and utilizes a Back End built with Node.js and Express as well as a Data Science Back End that was built with Python. 
                    Most of the styling comes from Material UI and the app is fully reactive for both desktop and mobile views. I think it's one of my favorite 
                    projects I've worked on as I got to really get my hands dirty with each part of the app and really got to feel like a Full-Stack developer. 
                    It's a bit simple looking, but I felt it was probably my favorite project to date because of how clean and professional everything looks.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects