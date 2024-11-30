import CommonForm from '@/components/common/Form';
import { registerFormControls } from '@/config';
import { registerUser } from '@/store/auth-slice/authSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then((data) => {
        if (data.success) {
          toast.success('Registration successful!');
          navigate("/auth/login");
        } else {
          toast.error(data.message || 'Registration failed');
        }
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        toast.error(error.message || 'An error occurred during registration');
      });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText="Sign Up"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Register;