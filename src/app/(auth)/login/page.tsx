"use client";

import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    signIn("credentials", {
      ...inputForm,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast({ title: "You're logged in successfully!" });
        router.refresh();
      }

      if (callback?.error) {
        toast({ title: callback.error });
      }
    });

    router.push("/");
  };

  return (
    <div className="bg-slate-900 h-[calc(100vh-136px)] mt-[20px] p-6 rounded-md flex items-center justify-center">
      <div className="max-w-[500px] w-full mx-auto bg-slate-800 p-6 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
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
          <Button className="text-white">
            {isLoading ? <Loader /> : "Login"}
          </Button>
        </form>

        <div className="flex items-center gap-2">
          <hr className="w-full border-gray-600" />
          <p className="text-muted-foreground text-[14px] font-bold">OR</p>
          <hr className="w-full border-gray-600" />
        </div>

        <Button className="bg-white hover:bg-gray-100">
          <Image
            src="/glogo.png"
            alt=""
            width={20}
            height={20}
            className="mr-2"
          />{" "}
          Sign with Google
        </Button>

        <span className="text-[15px] text-gray-300">
          Not have an account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Login;
