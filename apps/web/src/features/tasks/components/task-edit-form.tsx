"use client"

import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Task } from "@/features/tasks/types"
import { DatePicker } from "@/components/ui/date-picker"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"

export const TaskEditForm = ({
  id,
  onSubmit,
  defaultValues,
}: {
  id: string
  onSubmit: (data: { title: string; description: string }) => Promise<void>
  defaultValues: Task
}) => {
  const t = useTranslations("tasks")
  const form = useForm<Task>({
    defaultValues,
  })

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("dashboardCard.editForm.fields.title")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("dashboardCard.editForm.fields.description")}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="max-h-52 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("dashboardCard.editForm.fields.date")}</FormLabel>
              <FormControl>
                <DatePicker
                  date={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
