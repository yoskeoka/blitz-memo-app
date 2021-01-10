import { ReactNode } from "react"

type ButtonProps = {
  disabled?: boolean
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  children: ReactNode
}

export const Button = ({ onClick, type, disabled, children }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
