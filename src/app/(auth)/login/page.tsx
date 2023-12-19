"use client";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/types";
// import { Form } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/cypresslogo.svg";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DM_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { files } from "../../../../migrations/schema";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import { actionLoginUser } from "@/lib/server-action/auth-action";

const inter = DM_Sans({ subsets: ["latin", "latin-ext"] });

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    const { error} = await actionLoginUser(formData);
    if (error) {
      form.reset();
      setSubmitError(error.message);
    }
    router.replace('/dashboard')
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col "
      >
        <Link href="/" className="flex w-full justify-left items-center">
          <Image src={Logo} alt="Cypress Logo" width={50} height={50} />
          <span className="font-semibold dark:text-white text-4xl first-letter:ml-2">
            cypress.
          </span>
        </Link>
        <FormDescription className=" text-foreground ">
          An all-In-One Collobration and Productivity Platform.
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-6"
          size="lg"
          disabled={isLoading}
        > {!isLoading ? "Login" : <Loader/> } </Button>
        <span className=" self-center "> Dont Have an account . 
        <Link href='/signup' className="text-blue-700" > Sign Up here</Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
