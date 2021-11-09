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
import router from "next/router";

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


function WorkerAvailabe(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const[tab,setTab]=useState([])
  
  useEffect(()=>{
    axios.get('/api/Workers/findAvailable')
    .then((res)=>{
      console.log(res.data)
      setTab(res.data)
    })
   },[])
   function distance( wx,wy,ux,uy){
     var result=(wy-uy)+Math.cos(wy)*Math.cos(uy)*(wx-ux)
     var x= result.toFixed(2);

   return (x)

  }
  
  function assigned(e){
     var worker =  tab.filter(element=> element.id == e.target.id)[0]
     worker.isAvailable = false
    console.log(e.target.className)
     axios.put('/api/Request/updateRequest', {
           worker : worker,
           requestID: router.query.id, 
           temp : (Number(e.target.className) / 50) * 60
     })
  }


  return (
    <GridContainer>
      {/* {console.log(router.query)} */}
        {/* 
        {console.log(tab)} */}
      <GridItem xs={12} sm={12} md={12}>
      <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees</h4>
              <p className={classes.cardCategoryWhite}>
               All Our Workers
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Availability","distance","assigned"]}
                tableData={Array.isArray(tab)? tab?.map((e) => (
                       [e.id, e.name,`${e.isAvailable}`,`${distance(router.query.Positiony,e.positiony,e.positionx,router.query.Positionx)}km`,<button id={e.id} onClick={assigned} className={distance(router.query.Positiony,e.positiony,e.positionx,router.query.Positionx)} >assgined</button>]
                )).sort((a,b) =>  parseFloat(a[3]) - parseFloat(b[3])).filter((e,i)=> i<3   ) : null
                }
              />
            </CardBody>
          </Card>
      </GridItem>
    </GridContainer>
  );
}

WorkerAvailabe.layout = Admin;

export default  WorkerAvailabe;