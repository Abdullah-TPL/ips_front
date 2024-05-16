const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

 const signupFields = [
    {
      labelText: "First Name",
      labelFor: "first-name",
      id: "first-name",
      name: "firstName",
      type: "text",
      autoComplete: "given-name",
      isRequired: true,
      placeholder: "First Name"
    },
    {
      labelText: "Last Name",
      labelFor: "last-name",
      id: "last-name",
      name: "lastName",
      type: "text",
      autoComplete: "family-name",
      isRequired: true,
      placeholder: "Last Name"
    },
    {
      labelText: "Email address",
      labelFor: "email-address",
      id: "email-address",
      name: "email",
      type: "email",
      autoComplete: "email",
      isRequired: true,
      placeholder: "Email address"
    },
    {
      labelText: "Password",
      labelFor: "password",
      id: "password",
      name: "password",
      type: "password",
      autoComplete: "new-password",
      isRequired: true,
      placeholder: "Password"
    },
    {
      labelText: "Confirm Password",
      labelFor: "confirm-password",
      id: "confirm-password",
      name: "confirmPassword",
      type: "password",
      autoComplete: "new-password",
      isRequired: true,
      placeholder: "Confirm Password"
    },
    {
      labelText: "Gender",
      labelFor: "gender",
      id: "gender",
      name: "gender",
      type: "radio",
      options: [
        { id: "male", value: "male", label: "Male" },
        { id: "female", value: "female", label: "Female" }
      ],
      isRequired: true
    },
    {
      labelText: "Date of Birth",
      labelFor: "date-of-birth",
      id: "date-of-birth",
      name: "dateOfBirth",
      type: "date",
      isRequired: true,
      placeholder: "Date of Birth"
    }
  ];
  
  

export {loginFields,signupFields}