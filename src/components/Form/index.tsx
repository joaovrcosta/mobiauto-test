import React from 'react'
import { useForm } from 'react-hook-form'
import { IForm } from './types'
import * as S from './styles'

export function Form({ defaultValues, children, onSubmit }: IForm) {
  const { handleSubmit, register } = useForm({ defaultValues })

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child?.props?.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </S.FormContainer>
  )
}
