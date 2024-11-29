import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import CommonForm from '@/components/common/Form'
import { loginFormControls } from '@/config'
import { loginUser } from '@/store/auth-slice/authSlice' 

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .then((data) => {
        if (data.success) {
          toast.success('Login successful!');
        } else {
          toast.error(data.message || 'Login failed');
        }
       
      })
      
      
      .catch((error) => {
        console.error("Login failed:", error);
        toast.error(error.message || 'An error occurred during login');
      });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText="Sign In"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login