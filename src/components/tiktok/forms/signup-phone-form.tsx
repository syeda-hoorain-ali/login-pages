"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/schemas/tiktok/signupSchema"
import Link from "next/link"
import { months } from "@/lib/data"



const SignupPhoneForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: currentYear - 1901 }, (_, i) => (1901 + i).toString());


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

				<div className="mb-1 font-semibold text-[#161823]">
					When’s your birthday?
				</div>

				<div className="grid gap-1 grid-cols-3">

					<FormField
						control={form.control}
						name="month"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Month</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Month" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{months.map(month => (
											<SelectItem key={month} value={month.toLowerCase()}>{month}</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>


					<FormField
						control={form.control}
						name="day"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Day</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Day" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{Array.from({ length: 31 }, (_, i) => (
											<SelectItem key={i + 1} value={(i + 1).toString()}>{i + 1}</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>


					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Year</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Year" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{years.map(year => (
											<SelectItem key={year} value={year}>{year}</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>


				<p>
					Your birthday won't be shown publicly.
				</p>

				<FormField
					control={form.control}
					name="username1"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default SignupPhoneForm