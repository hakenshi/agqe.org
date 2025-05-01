'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const contactFormSchema = z.object({
    fullName: z.string()
        .min(6, { message: "O nome deve ter pelo menos 6 caracteres." })
        .max(256, { message: "O nome deve ter no máximo 256 caracteres." }),
    email: z.string()
        .min(6, { message: "O email deve ter pelo menos 6 caracteres." })
        .max(256, { message: "O email deve ter no máximo 256 caracteres." })
        .email({ message: "Digite um email válido." }),
    subject: z.string()
        .min(6, { message: "O assunto é obrigatório." }),
    message: z.string()
        .min(6, { message: "A mensagem é obrigatória." }),
})

export default function ContactForm() {

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            email: "",
            fullName: "",
            message: "",
            subject: ""
        }
    })
    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <h2 className="text-2xl text-center md:text-start font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Seu nome completo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email@exemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Assunto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Sobre o que você quer falar?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Digite sua mensagem aqui..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="text-end">
                    <Button className="rounded-full w-full md:w-fit bg-pink-600 hover:bg-pink-700">Enviar Mensagem</Button>
                </div>
            </form>
        </Form>
    )
}
