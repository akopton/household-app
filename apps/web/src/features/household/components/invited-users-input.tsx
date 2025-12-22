"use client"

import { z } from "zod"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useState } from "react"

export const InvitedUsersInput = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  onError,
  clearError,
}: {
  id?: string
  name?: string
  placeholder?: string
  value?: string[]
  onChange: (value: string[]) => void
  onError: (error: string) => void
  clearError: () => void
}) => {
  const [email, setEmail] = useState("")

  const handleAdd = () => {
    if (!email.trim()) return

    const result = z.email().safeParse(email)
    if (!result.success) {
      onError("invalid email address")
      return
    }

    onChange([...(value || []), email])
    clearError()
    setEmail("")
  }

  return (
    <InputGroup>
      <InputGroupInput
        id={id}
        placeholder={placeholder}
        name={name}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          clearError()
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            e.stopPropagation()
            handleAdd()
          }
        }}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="button"
          onClick={handleAdd}
        >
          Add
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
