import { useState } from "react";
import ForgotPassLayout from "../components/auth/ForgotPassLayout.jsx";
import AuthInput from "../components/auth/AuthInput.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
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

  const handleContinueToEmail = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'mailto:';
    } else {
      window.open('https://mail.google.com', '_blank');
    }
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
          "https://safetra-be.onrender.com/api/user/forgot-password-token",
          JSON.stringify(params),
          {
            headers: {
              "Content-Type": "application/json",
            },
            
          } 
        );
      
        console.log("we reach heere");
      
        const status = response.status;
        if (status) {
          
          setLoading(false);
          toast.success("Success");
          setData(response.data);
          setOpen2(true);
        } else {
          
          toast.error(
            "Unsuccessful! Email not registered, use a valid email or register"
          );
          setLoading(false);
        }
        console.log(status)
      } catch (error) {
        toast.error(
          "Unsuccessful! Email not registered, use a valid email or register", error.response.data.error
        );
        console.error("Error forgetting password:", error.response.data.error);
        setLoading(false)
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
      <div className="w-full font-inter">
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
           <ToastContainer />
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
    <button
          type="button"
          onClick={handleContinueToEmail}
          style={{ backgroundColor: 'rgb(234,88,12)', color: 'rgba(255, 255, 255, 1)' }}
          className="w-[150px] text-[14px] py-2 rounded-lg font-int font-[600]"
        >
          Continue to email
        </button>
      </SuccessModal>
    </ForgotPassLayout>
  );
};

export default ForgotPass;
