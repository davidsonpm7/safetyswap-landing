"use client";

import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

import { cn } from "@/shared/utils/cn";

interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  mask?: (value: string) => string;
}

export function InputController<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  mask,
}: InputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div>
          <label
            htmlFor={name}
            className="mb-1.5 block text-sm font-semibold text-foreground"
          >
            {label}
          </label>

          <input
            id={name}
            type={type}
            placeholder={placeholder}
            value={(field.value as string) ?? ""}
            onChange={(event) => {
              const raw = event.target.value;
              field.onChange(mask ? mask(raw) : raw);
            }}
            onBlur={field.onBlur}
            className={cn(
              "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              fieldState.error && "border-destructive",
            )}
          />

          {fieldState.error && (
            <p className="mt-1 text-xs font-medium text-destructive">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
