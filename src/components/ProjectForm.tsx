'use client'

/**
 * ProjectForm Component
 *
 * A form component for creating new projects using shadcn/ui components and React Hook Form.
 *
 * Features:
 * - Form validation using Zod
 * - Modal dialog using shadcn/ui Dialog
 * - Toast notifications for success/error feedback
 * - Automatic page refresh after successful submission
 *
 * Form Fields:
 * - name: Project name (required, min 2 chars)
 * - description: Project description (optional)
 * - status: Project status (required)
 * - startDate: Project start date (required)
 * - endDate: Project end date (optional)
 */

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

/**
 * Zod schema for form validation
 */
const projectFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Project name must be at least 2 characters.',
  }),
  description: z.string().optional(),
  status: z.enum(['planning', 'in-progress', 'completed', 'on-hold'], {
    required_error: 'Please select a project status.',
  }),
  startDate: z.string({
    required_error: 'Please select a start date.',
  }),
  endDate: z.string().optional(),
})

type ProjectFormValues = z.infer<typeof projectFormSchema>

/**
 * Default form values
 */
const defaultValues: Partial<ProjectFormValues> = {
  name: '',
  description: '',
  status: 'planning',
  startDate: new Date().toISOString().split('T')[0],
}

export function ProjectForm() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  // Initialize form with validation schema and default values
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues,
  })

  /**
   * Handles form submission
   * @param data - The validated form data
   */
  async function onSubmit(data: ProjectFormValues) {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create project')
      }

      toast({
        title: 'Success',
        description: 'Project created successfully.',
      })

      setOpen(false)
      router.refresh()
    } catch (err) {
      const error = err as Error
      toast({
        title: 'Error',
        description: error.message || 'Failed to create project. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Create a new project. Fill out the details below.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Project name" {...field} />
                  </FormControl>
                  <FormDescription>The name of your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Project description" {...field} />
                  </FormControl>
                  <FormDescription>A brief description of your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="on-hold">On Hold</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>The current status of your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date (Optional)</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create Project</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
