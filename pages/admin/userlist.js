import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import { Button } from "@material-ui/core";
import WorkerAvailabe from "./workersAvailable";
import router from "next/router";
import {MyGet} from "variables/MyGet"
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
function Userlist() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const[tab,setTab]=useState([])
  

  useEffect(()=>{
    axios.get('/api/Users/findAllUsers')
    .then((res)=>{
      console.log(res.data)
      setTab(res.data)
    })
   },[])
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["name", "email", "phone"]}
              tableData={
                Array.isArray(tab)? tab?.map((e)=>(
                  [e.name, e.email, e.phone]
                )): null
              }
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
Userlist.layout = Admin;
export default Userlist;
Userlist.getInitialProps = async (ctx) =>{
    const json = await MyGet( process.env.NEXT_PUBLIC_PATH + "/api/Workers/findallWorkers",ctx)
  return {people : json}
}