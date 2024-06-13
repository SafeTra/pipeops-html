import { useState } from "react";
import ForgotPassLayout from "../components/auth/ForgotPassLayout.jsx";
import AuthInput from "../components/auth/AuthInput.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import SuccessModal from "../components/modals/SuccessModal";
import { Link } from "react-router-dom";
const ForgotPass = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "" });
  const [open2, setOpen2] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      // setOpen2(true); //to 
      const params = {
        email: formData.email,
      };
      try {
        const response = await axios.post(
          "https://safetra-crz3.onrender.com/api/user/forgot-password-token",
          JSON.stringify(params),
          {
            headers: {
              "Content-Type": "application/json",
            },
            
          } 
        );
        console.log(response.data.message)
        console.log("we reach heere");
        console.log(response)
        const status = response.status;
        if (status) {
          
          setLoading(false);
          toast.success("Success");
          setData(response.data);
          setOpen2(true);
        } else {
          console.log(response.data.message)
          setLoading(false);
          toast.error(
            "Unsuccessful! Email not registered, use a valid email or register"
          );
        }
        console.log(status)
      } catch (error) {
        console.error("Error forgetting password:", error);
      }
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  };

  return (
    <ForgotPassLayout
      title="Forgot Password"
      desc="Enter your email address and we’ll send you a link to reset your password"
      
    >
      <div className="w-full px-6 md:px-12 font-inter">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 mb-[5rem]">
          <AuthInput
            id="email"
            name="email"
            type="text"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            error={errors.email}
          />
          <input
            disabled={loading}
            type="submit"
            className="btn btn-form"
           value={loading ? "Sending..." : "Send email"}
          />
        </form>
      </div>
      <SuccessModal open={open2} onClose={handleClose2}>
        <div className="text-center w-full">
          <div>
            <h3 style={{ color: "rgb(234,88,12)" }} className="font-int font-[700] text-[20px]">
              Successful!
            </h3>
          </div>
          <div className="w-full text-center">
            <p className="text-[14px] font-int">
              We've sent a password reset link to your email. Please check your inbox and follow the instructions to create a new password. If you don’t see the email in a few minutes, check your spam folder.
            </p>
          </div>
        </div>
        <Link href='https//:mail.google.com' target='_blank' >
                <button type='button' style={{ backgroundColor: 'rgb(234,88,12)', color: 'rgba(255, 255, 255, 1)' }} className='w-[150px] text-[14px] py-2 rounded-lg font-int font-[600] '>
                  Continue to email
                </button>
              </Link>
      </SuccessModal>
    </ForgotPassLayout>
  );
};

export default ForgotPass;