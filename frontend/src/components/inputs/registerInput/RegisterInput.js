import { ErrorMessage, useField } from "formik";
import React from "react";
import "./RegisterInput.css";

//aici importam prin props de la componentu parinte ce vrem sa utilizam sau putem face un ...props asa luam
//toate proprietatile
const RegisterInput = ({ placeholder, ...props }) => {
  //asa avem acces la proprietatile din props cu ajutorul la useField
  //iar meta il folosim pentru a vedea errorile, si cu field accesam ce primi la props
  const [field, meta] = useField(props);
  //iar destructurand field si props  se adauga automat celelalte proprietati
  //dar trebuie sa acesam si celelalte proprietatie cu field
  //trebuie sa avem si inital value in compoentu unde chemama inputu
  return (
    <div>
      {/* aici o sa vedem eroare pentru fiecare input */}
      <div className="err_message">
        {/* cand facem click in input si avem si o eroare o sa se activeze ErrorMessage 
        care acceseaza ce avem scris la Yup(ex la first_name)*/}
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
      <input
        //aici facem o clasa in caza ca avem o eroare sa ne arate textu errori in rosu
        className={meta.touched && meta.error ? "input_error_border" : ""}
        placeholder={placeholder}
        {...field}
        {...props}
        type={field.type}
        name={field.name}
      />
    </div>
  );
};

export default RegisterInput;
