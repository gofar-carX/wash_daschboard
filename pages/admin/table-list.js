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


function TableList() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const[tab,setTab]=useState([])
  useEffect(()=>{
    axios.get('/api/Request/findAllRequest')
    .then((res)=>{
     
      setTab(res.data)
    })
   },[])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>ALL Requests</h4>
            <p className={classes.cardCategoryWhite}>
              All Request from Users
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["service", "type of car", "type of wash", "payement","served","price","date","heure","Assign worker"]}

              tableData={
                Array.isArray(tab)?  tab?.map((e)=>(
                  
                  [e.service, e.typeOfCar, e.typeOfWash, `${e.isPayed? e.isPayed: 0 }`,`${e.isServed}`,e.Price ,e.createdAt.slice(0,10),e.createdAt.slice(11,16),<button onClick={()=> { router.push({
                   pathname: './workersAvailable',
                   query : {Positiony : e.positiony,
                            Positionx: e.positionx ,
                            id: e.id            
                   } 
                  })} } >Assign</button>]

                )) : null
              
              }
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;


TableList.getInitialProps = async (ctx) =>{
  const json = await MyGet( "http://localhost:3000/api/Request/findAllRequest",ctx)
return {people : json}
}
