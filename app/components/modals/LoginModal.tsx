"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { IconBaseProps } from "react-icons";

type Props = {};

export default function LoginModal({}: Props) {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn(`credentials`, {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.refresh();
        loginModal.onClose();
        toast.success("logged in");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subTitle="Login to your account" center />
      <Input
        id="email"
        disabled={isLoading}
        required
        label="Email"
        register={register}
        errors={errors}
      />
      <Input
        id="password"
        disabled={isLoading}
        required
        label="Password"
        register={register}
        errors={errors}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        label={"Continue with google"}
        onClick={() => {
          setIsLoading(false);
          signIn("google").then((callback) => {
            setIsLoading(false);
            console.log(callback);
            if (callback?.ok) {
              router.refresh();
              loginModal.onClose();
              toast.success("logged in");
            }
            if (callback?.error) {
              toast.error(callback.error);
            }
          });
        }}
        disabled={false}
        outline
        small={false}
        icon={FcGoogle}
      />
      <div
        className="
        text-neutral-500 
          text-center
          mt-4
          font-light
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            flex-row
            gap-2
          "
        >
          <div> Don't have an Account? </div>
          <div
            onClick={toggle}
            className="
              text-neutral-800
              hover:underline
              cursor-pointer
              font-semibold
            "
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      secondaryAction={function (): void {
        throw new Error("Function not implemented.");
      }}
      secondaryActionLabel={""}
    />
  );
}
