import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

type ContactFormValues = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  phone?: string;
  industry?: string;
  projectStage?: string;
  timeframe?: string;
  message: string;
  consent: boolean;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      company: '',
      phone: '',
      industry: undefined,
      projectStage: undefined,
      timeframe: undefined,
      message: '',
      consent: false,
    },
    mode: 'onBlur',
  });

  const onSubmit = (values: ContactFormValues) => {
    // Placeholder for integration (email, CRM, or API endpoint)
    // For now, we simulate success and show a confirmation state
    // eslint-disable-next-line no-console
    console.log('Contact submission', values);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-10">
          <span className="inline-block px-4 py-2 border border-[#ef4444] text-[#ef4444] text-sm tracking-wider">
            CONTACT SALES
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold">Tell us about your project</h1>
          <p className="mt-3 text-gray-600 font-mono text-sm leading-relaxed">
            We partner with industrial teams to design and optimize carbon capture systems.
            Share a few details and our team will follow up within 2 business days.
          </p>
        </div>

        {submitted ? (
          <div className="border-2 border-gray-800 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold">Thanks — we received your request.</h2>
            <p className="mt-2 text-gray-600 font-mono text-sm">
              Our team will review your information and get back to you shortly.
            </p>
          </div>
        ) : (
          <div className="border-2 border-gray-800 p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Jane" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="workEmail"
                    rules={{
                      required: true,
                      pattern: {
                        value: /.+@.+\..+/, // basic email format
                        message: 'Enter a valid email',
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work email <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Industrial" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cement">Cement</SelectItem>
                            <SelectItem value="steel">Steel</SelectItem>
                            <SelectItem value="chemicals">Chemicals</SelectItem>
                            <SelectItem value="power">Power Generation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="projectStage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project stage</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select stage" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="exploration">Exploration</SelectItem>
                            <SelectItem value="feasibility">Feasibility / Study</SelectItem>
                            <SelectItem value="pilot">Pilot</SelectItem>
                            <SelectItem value="deployment">Deployment</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeframe"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeframe</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<3mo">Under 3 months</SelectItem>
                            <SelectItem value="3-6mo">3–6 months</SelectItem>
                            <SelectItem value=">6mo">6+ months</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help? <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Describe your use case, KPIs, constraints, or timeline" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            checked={!!field.value}
                            onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                          />
                        </FormControl>
                        <div>
                          <FormLabel className="m-0">I agree to be contacted <span className="text-red-600" aria-hidden="true">*</span></FormLabel>
                          <p className="text-gray-500 font-mono text-xs mt-1">
                            We will only use your information to respond to your inquiry.
                          </p>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500">Response within 2 business days</span>
                  <Button type="submit" className="px-6">
                    Submit request
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}


