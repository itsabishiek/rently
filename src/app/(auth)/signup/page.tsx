"use client";

import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const [inputForm, setInputForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("/api/signup", inputForm)
      .then(() => {
        toast({ title: "Registered successfully!" });
        router.push("/login");
      })
      .catch((error) => {
        console.log("handleSignup Error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-slate-900 h-[calc(100vh-136px)] mt-[20px] p-6 rounded-md flex items-center justify-center">
      <div className="max-w-[500px] w-full mx-auto bg-slate-800 p-6 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-bold">Signup</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <Input
            placeholder="Name"
            type="text"
            className="bg-slate-700"
            name="name"
            value={inputForm.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Phone No."
            type="text"
            className="bg-slate-700"
            name="phoneNumber"
            value={inputForm.phoneNumber}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            type="email"
            className="bg-slate-700"
            name="email"
            value={inputForm.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            className="bg-slate-700"
            name="password"
            value={inputForm.password}
            onChange={handleChange}
          />
          <select
            className="bg-slate-700 text-sm p-2 rounded"
            name="type"
            value={inputForm.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Owner">Owner</option>
            <option value="Builder">Builder</option>
            <option value="Dealer">Dealer</option>
          </select>
          <Button className="text-white mt-2">
            {isLoading ? <Loader /> : "Signup"}
          </Button>
        </form>

        <span className="text-[15px] text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Signup;
