import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { toast, ToastContainer } from 'react-nextjs-toast'

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
// import { useSnackbar } from 'nextjs-toast'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function UserProfile() {
  // const snackbar = useSnackbar()

  const useStyles = makeStyles(styles);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState(0)
  const [PostionX,setPostionX]=useState('')
  const [PostionY,setPostionY]=useState('')
  const [Available,setAvailable]=useState('')
  const [password,setPassword]=useState('')

function changename(e){
  setName(e.target.value)
  

}
function changeemail(e){

  setEmail(e.target.value)
 

}
function changePhone(e){
 

  setPhone(e.target.value)
}
function changePostionX(e){
 

  setPostionX(e.target.value)
}
function changePostionY(e){
 

  setPostionY(e.target.value)
}
function changeAvailable(e) {
  
  setAvailable(e.target.checked)
}
function changePassword(e) {
  setPassword(e.target.value)
}
 function  addworker(){
axios.post('/api/Workers/createWorkers',{
  name:name,
  email:email,
  positionx:PostionX,
  positiony:PostionY,
  phone:Number(phone),
  isAvailable: Boolean(Available),
  password:password
  
})
.then(res=>{
alert('worker added')
   setAvailable(false)
   setPhone(0)
   setPostionX('')
   setPostionY('')
   setName('')
   setEmail('')
   setPassword('')

  //  snackbar.showMessage(
  //   "This is the Massage",
  //   "error",
  //   "filled",
  // );

}
)
.catch((err)=>{
 console.log(err);

})

  }
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem  >
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>AddWorker</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Name"
                    inputProps={{
                      value:`${name}`,
                      placeholder: "Name",
                      onChange:changename
                    }}
              
                    formControlProps={{
                      fullWidth: true,
                    }}
                   
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Phone"
                    inputProps={{
                      value:`${phone}`,
                      type:"number",
                      placeholder: "Phone",
                      onChange:changePhone
                    }}

                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    inputProps={{
                      value:`${email}`,
                      placeholder: "Email",
                      onChange:changeemail
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="PostionX"
                    inputProps={{
                      value:`${PostionX}`,
                      placeholder: "Longitude",
                      onChange:changePostionX
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                     labelText="PostionY"
                     inputProps={{
                      value:`${PostionY}`,
                      placeholder: "Latitude",
                      onChange:changePostionY
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                     labelText="Available"
                     inputProps={{
                      value:`${Available}`,
                      type: "checkbox",
                      placeholder: "Latitude",
                      onChange:changeAvailable
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Password"
                    inputProps={{
                      value:`${password}`,
                      type:"password",
                      placeholder: "password",
                      onChange:changePassword
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={()=>addworker()}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
