/*eslint-disable*/
import React ,  {useEffect,useState} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {MyGet} from "variables/MyGet"
import axios from "axios";
import { isEntityName } from "typescript";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function Notifications() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [tl, setTL] = useState(false);
  const [tc, setTC] = useState(false);
  const [tr, setTR] = useState(false);
  const [bl, setBL] = useState(false);
  const [bc, setBC] = useState(false);
  const [br, setBR] = useState(false);
  const[tab,setTab]=useState([])
  
  useEffect(()=>{
    axios.get('/api/Review/ReviewALL')
    .then((res)=>{
      console.log(res.data)
      setTab(res.data)
    })
      // Specify how to clean up after this effect:
      return function cleanup() {
        // to stop the warning of calling setState of unmounted component
        var id = window.setTimeout(null, 0);
        while (id--) {
          window.clearTimeout(id);
        }
      };
  
   },[])
  const showNotification = (place) => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Reviews</h4>
      
      </CardHeader>
      <CardBody>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={6}>
          
            {  Array.isArray(tab)? tab?.map((e)=>(
           <>
       <Button variant="outlined" onClick={handleClick}>
  Open success snackbar
</Button>
 <SnackbarContent
 
 message={e.message}
 
 
/>

</>
         )):null}
           
        
          </GridItem>
        
        </GridContainer>
        
     
      
      
      </CardBody>
    </Card>
  );
}

Notifications.layout = Admin;

export default Notifications;
Notifications.getInitialProps = async (ctx) =>{
    const json = await MyGet( process.env.NEXT_PUBLIC_PATH + "/api/Workers/findallWorkers",ctx)
  return {people : json}
}