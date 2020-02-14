import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
        boxShadow: "5px 5px 15px black"
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
    ulist: {
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
    header1: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "4rem",
        margin: "0 auto",
        color: "whitesmoke"
    },
    header2: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        margin: "0 auto",
        color: "whitesmoke"
    }
  }));

function Main(props){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <h1 className={classes.header1}>Levi Thomas</h1>
            <h2 className={classes.header2}>Full-Stack Web Developer</h2>
            <div className={classes.linkContainer}>
                <ul className={classes.ulist}>
                    <li className={classes.ulistel}>
                        <Link to="/about">
                        <div className={classes.iconContainer}>
                                <InfoSharpIcon className={classes.icon}/>
                                <div className="button-text">About</div>
                        </div>
                        </Link>
                    </li>
                    <li className={classes.ulistel}>
                        <Link to="/skills">
                        <div className={classes.iconContainer}>
                                <CodeSharpIcon className={classes.icon}/>
                                <div className="button-text">Skills</div>
                        </div>
                        </Link>
                    </li>
                    <li className={classes.ulistel}>
                        <Link to="/projects">
                        <div className={classes.iconContainer}>
                                <StarsSharpIcon className={classes.icon}/>
                                <div className="button-text">Projects</div>
                        </div>
                        </Link>
                    </li>
                    <li className={classes.ulistel}>
                        <Link to="/contact">
                        <div className={classes.iconContainer}>
                                <CallEndSharpIcon className={classes.icon}/>
                                <div className="button-text">Contact</div>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main