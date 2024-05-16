import { useState } from 'react';
import axios from 'axios'; // Import Axios library
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { ToastContainer, toast } from 'react-toastify'; // Import toast notification
import 'react-toastify/dist/ReactToastify.css'; // Import toast notification styles


const Signup = () => {
  const [signupState, setSignupState] = useState(() => {
    const initialState = {};
    signupFields.forEach(field => {
      initialState[field.id] = '';
    });
    return initialState;
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'radio') {
      setSignupState(prevState => ({
        ...prevState,
        gender: value
      }));
    } else {
      setSignupState(prevState => ({
        ...prevState,
        [id]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupState["password"] !== signupState["confirm-password"]) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage("");
    await createAccount();
  };

  const createAccount = async () => {
    try {
      // Select only the specific fields to send
      const { 'first-name': firstName, 'last-name': lastName, 'email-address': email, 'date-of-birth': dateOfBirth, gender } = signupState;
  
      const filteredData = {
        'first-name': firstName,
        'last-name': lastName,
        'email-address': email,
        'date-of-birth': dateOfBirth,
        gender,
        password: signupState.password // Include the password here
      };
  
      // Make an HTTP POST request to the backend endpoint with the selected form data
      const response = await axios.post('https://uwb-backend.onrender.com/signup', filteredData);
  
      // Handle response
      console.log('Account created successfully:', response.data);
      // Show success toast notification
      toast.success('Account created successfully');
    } catch (error) {
      // Handle error
      if (error.response && error.response.status === 401) {
        // User already exists
        toast.error('User already exists');
      } else {
        // Other errors
        console.error('Error creating account:', error.message);
        toast.error('Error creating account');
      }
    }
  };
  
  
  

  return (
    <div>
      <ToastContainer /> {/* Toast notification container */}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {signupFields.map(field => (
            <div key={field.id} className="mb-4">
              {field.type !== 'radio' ? (
                <Input
                  handleChange={handleChange}
                  value={signupState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700">{field.labelText}</label>
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    {field.options.map(option => (
                      <div key={option.id} className="flex items-center">
                        <input
                          id={`${field.id}-${option.id}`} // Unique id for each radio input
                          name={field.name}
                          type="radio"
                          value={option.value}
                          checked={signupState.gender === option.value}
                          onChange={handleChange}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor={`${field.id}-${option.id}`} className="ml-2 block text-sm text-gray-900">{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
