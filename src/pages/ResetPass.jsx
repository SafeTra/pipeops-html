import { useState, useEffect } from "react";
import ForgotPassLayout from "../components/auth/ForgotPassLayout.jsx";
import UpdatePasswordInput from "../components/auth/UpdatePasswordInput.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import SuccessModal from "../components/modals/SuccessModal";
import { Link, useLocation } from "react-router-dom";

const ResetPass = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const location = useLocation();
  const [token, setToken] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get("token");
    setToken(tokenParam);
  }, [location]);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
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
      // setOpen2(true); //to remove
      const params = {
        password: formData.confirmPassword,
        token: token,
      };
      try {
        const response = await axios.post(
         `https://safetra-be.onrender.com/api/user/reset-password/${token}`,
          JSON.stringify(params),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const status = response.data.status;
        if (status) {
          setLoading(false);
          toast.success("Success");
          // setData(response.data);
          setOpen2(true);
        } else {
          toast.error(
            "Unsuccessful! Password not Updated"
          );
          setLoading(false);
          toast.error(
            "Unsuccessful! Email not registered, use a valid email or register"
          );
        }
        console.log(status)
      } catch (error) {
        console.error("Error forgetting password:", error.response.data.error);
        toast.error(
          "Unsuccessful! Password not updated"
        );
      }
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.newPassword ) {
      errors.newPassword = "Please enter password";
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&"])[A-Za-z\d@$!%*?&"]{8,}$/.test(data.newPassword)) {
      errors.newPassword = "Password should include at least 8 characters with at least one :uppercase letter, lowercase letter, digit and special character (e.g., !@#$%^&*)";
    }

    else if (!data.confirmPassword) {
      errors.confirmPassword = "confirm your Password";
    } else if (data.confirmPassword !== data.newPassword) {
      errors.confirmPassword = "Password do not match"
    }
    
    return errors;
  };

  return (
    <ForgotPassLayout
      title="Reset Password"
      desc="Enter Your New Password"
      
    >
      <div className="w-full px-6 md:px-12 font-inter">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 mb-[5rem]">
        <UpdatePasswordInput
            id="newPassword"
            name="newPassword"
            type="password"
            label="New Password"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="**************"
            error={errors.newPassword}
          />
          <UpdatePasswordInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Re-type Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="**************"
            error={errors.confirmPassword}
          />
          <input
            disabled={loading}
            type="submit"
            className="btn btn-form"
            value={loading ? "Reseting..." : "Reset Password"}
          />
           <ToastContainer />
        </form>
      </div>
      <SuccessModal open={open2} onClose={handleClose2}>
        <div className="text-center w-full">
          <div>
            <h3 style={{ color: "rgb(234,88,12)" }} className="font-int font-[700] text-[20px]">
            Password Reset Successful!
            </h3>
          </div>
          <div className="w-full text-center">
            <p className="text-[14px] font-int">
            Your password has been successfully reset
click below to continue your access 
            </p>
          </div>
        </div>
        <Link to='/login' >
                <button type='button' style={{ backgroundColor: 'rgb(234,88,12)', color: 'rgba(255, 255, 255, 1)' }} className='w-[150px] text-[14px] py-2 rounded-lg font-int font-[600] '>
                  Continue to Login
                </button>
              </Link>
      </SuccessModal>
    </ForgotPassLayout>
  );
};

export default ResetPass;
