"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";

/**
 * International phone field with a searchable country dropdown (flag + dialling
 * code + country name), powered by react-phone-number-input. Styling overrides
 * live in globals.css under `.pyp-phone`.
 */
export default function PhoneField() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <PhoneInput
      international
      defaultCountry="GB"
      value={value}
      onChange={setValue}
      name="phone"
      className="pyp-phone"
      numberInputProps={{
        className:
          "w-full bg-transparent text-sm outline-none placeholder:text-[#8a8578]",
      }}
    />
  );
}
