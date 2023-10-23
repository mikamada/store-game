import React, { InputHTMLAttributes, CSSProperties } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  style?: CSSProperties
}

export default function Input(props: InputProps) {
  const { label, id, style, ...nativeProps } = props;
  return (
    <>
      <label htmlFor={id} className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
      <input type="text" className="form-control rounded-pill text-lg" id={id} name="name"
        aria-describedby="name" placeholder="Enter your name" style={style} {...nativeProps} />
    </>
  )
}
