import React, { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import EducatonDetailForm from "./../education-form/EducatonDetailForm";

function EducationalDetails({ person, handleChange }) {
  const [count, setCount] = useState(0);

  const addEducationHandler = () => {
    setCount(count + 1);
    let curEduList = [...person.educationalDetails, {}];
    handleChange({
      target: { name: "educationalDetails", value: curEduList },
    });
  };

  const handleChange2 = (index, name, value) => {
    let currEdu = { ...person.educationalDetails[index] };
    currEdu[name] = value;
    let eduList = [...person.educationalDetails];
    eduList[index] = currEdu;
    handleChange({
      target: {
        name: "educationalDetails",
        value: eduList,
      },
    });
  };

  const removeFormHandler = () => {
    setCount(count - 1);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Educaton Details </Typography>
      </div>
      <div>
        {(function () {
          let educationForm = [];
          for (let i = 0; i < person.educationalDetails.length; i++) {
            educationForm.push(
              <EducatonDetailForm
                index={i}
                key={i}
                removeForm={removeFormHandler}
                handleChange={handleChange2}
                educationalDetails={person.educationalDetails[i] || {}}
              />
            );
          }
          return educationForm;
        })()}
      </div>
      <div className="App">
        <Button onClick={addEducationHandler}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </Button>
        Add New Experience
      </div>
    </Box>
  );
}

export default EducationalDetails;
