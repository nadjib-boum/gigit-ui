"use client";
import { useCallback, useEffect, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/modal";
import { useLogin } from "@/hooks/api/auth/auth.api";
import { usePersistedStore } from "@/store";


const loginFormSchema = z.object({
  email: 
    z.string()
      .nonempty({
        message: 'Email Is Required'
      })
      .email({
        message: 'Must enter a valid email'
      }),
  password:
    z.string()
      .nonempty({
        message: "Password is required"
      })
})


const LoginModal = () => { 

  const { mutate: login, isSuccess, isError, data: loginData, error: loginError } = useLogin ();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const [ isUserNotFound, setIsUserNotFound] = useState<boolean> (false); 

  useEffect (() => {
    if (isSuccess) {
      usePersistedStore.setState((state) => ({ ...state, authSlice: { userData: loginData } }));
      window.location.reload ();
    }
  }, [isSuccess]);

  useEffect (() => {
    if (isError) {
      if ((loginError as string).toString() === 'User not found') {
        setIsUserNotFound (true);
      }
    }
  }, [isError])


  const onSubmit = useCallback((data: z.infer<typeof loginFormSchema>) => {
    login (data)
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to Gigit</DialogTitle>
          <DialogDescription>
            Enter your credentials below to log into your account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3">
            <div className="grid gap-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button className="w-full">Login</Button>
              </div>
              {
                isUserNotFound &&
                <div className="text-center text-red-600 font-semibold">
                  User Not Found
                </div>
              }
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal;