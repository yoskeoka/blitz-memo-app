import React from "react"

type MemoFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const MemoForm = ({ initialValues, onSubmit }: MemoFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <input placeholder="title" defaultValue={initialValues.title}></input>
      <br />
      <input placeholder="body" defaultValue={initialValues.body}></input>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default MemoForm
