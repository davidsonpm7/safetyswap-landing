"use client";

import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

interface CheckboxControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
}

export function CheckboxController<T extends FieldValues>({
  control,
  name,
  label,
  description,
}: CheckboxControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="flex cursor-pointer gap-3 rounded-lg border border-border p-3 text-left">
          <input
            type="checkbox"
            checked={Boolean(field.value)}
            onChange={(event) => field.onChange(event.target.checked)}
            onBlur={field.onBlur}
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />

          <span>
            <span className="block text-sm font-semibold text-foreground">{label}</span>
            {description && (
              <span className="block text-xs text-muted-foreground">{description}</span>
            )}
          </span>
        </label>
      )}
    />
  );
}
