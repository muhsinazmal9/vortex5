"use client";

import { useState } from "react";
import { Button } from "./button";

const categories = ["Web Development", "Mobile App", "UI/UX Design", "SaaS / Custom Software", "E-commerce", "Other"];
const budgets = ["Under $1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000+", "Not sure"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];
const sources = ["Google search", "Social media", "Referral", "Portfolio / Behance", "Other"];

const input =
  "h-11 w-full rounded-md border border-line bg-white/[0.03] px-3.5 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-cyan/60 focus:bg-white/[0.05]";

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium text-ink/90">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

function Pills({ legend, name, options, required }: { legend: string; name: string; options: string[]; required?: boolean }) {
  return (
    <fieldset>
      <legend className="mb-2 text-[13px] font-medium text-ink/90">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => (
          <label key={o} className="cursor-pointer">
            <input type="radio" name={name} value={o} required={required && i === 0} className="peer sr-only" />
            <span className="block rounded-md border border-line bg-white/[0.02] px-3 py-2 text-[13px] text-muted transition peer-checked:border-cyan/70 peer-checked:bg-cyan/10 peer-checked:text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-cyan/60 hover:border-white/25 hover:text-ink">
              {o}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// Static for now — submission will be wired to the Laravel backend later.
export function ProjectForm() {
  const [fileName, setFileName] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input type="text" name="name" required placeholder="Jane Doe" autoComplete="name" className={input} />
        </Field>
        <Field label="Work Email">
          <input type="email" name="email" required placeholder="jane@company.com" autoComplete="email" className={input} />
        </Field>
        <Field label="Company / Organization" optional>
          <input type="text" name="company" placeholder="Company name" autoComplete="organization" className={input} />
        </Field>
        <Field label="Phone Number" optional>
          <input type="tel" name="phone" placeholder="+1 000 000 0000" autoComplete="tel" className={input} />
        </Field>
      </div>

      <Pills legend="Project Category" name="category" options={categories} required />
      <Pills legend="Estimated Budget" name="budget" options={budgets} required />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project Timeline" optional>
          <select name="timeline" defaultValue="" className={input}>
            <option value="" disabled>Select a timeline</option>
            {timelines.map((t) => <option key={t} value={t} className="bg-surface">{t}</option>)}
          </select>
        </Field>
        <Field label="How did you hear about us?" optional>
          <select name="source" defaultValue="" className={input}>
            <option value="" disabled>Select an option</option>
            {sources.map((t) => <option key={t} value={t} className="bg-surface">{t}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Project Description / Requirements">
        <textarea
          name="description"
          required
          rows={5}
          placeholder="Tell us about your goals, features you need, and anything else we should know."
          className={`${input} h-auto resize-y py-3 leading-relaxed`}
        />
      </Field>

      <div>
        <span className="mb-2 block text-[13px] font-medium text-ink/90">
          Attachment<span className="ml-1.5 font-normal text-muted">(optional)</span>
        </span>
        <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/20 bg-white/[0.02] px-4 py-3.5 text-sm text-muted transition hover:border-cyan/60 hover:text-ink">
          <span aria-hidden className="text-cyan">↑</span>
          <span className="truncate">{fileName || "Upload a brief or requirements document"}</span>
          <input
            type="file"
            name="attachment"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted">We reply within one business day.</p>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
