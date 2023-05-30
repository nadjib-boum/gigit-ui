import { useCallback } from "react";
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
      .min(5, {
        message: "Password must be at least 5 characters"
      })
      .max(50, {
        message: "Username must be less than 50 characters"
      }),
})

const RegisterModal = () => { 

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof loginFormSchema>) => {
    console.log(values)
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Join</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Gigit</DialogTitle>
          <DialogDescription>
            Enter your credentials below to create your account
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
                <Button className="w-full">Create account</Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default RegisterModal;