'use client'
import dayjs from 'dayjs'
import React from 'react'

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | string | undefined
}

const Items = () => {
  

  const getAge = () =>
    (
      dayjs().diff('1996-08-27', 'milliseconds') /
      (365.25 * 24 * 60 * 60 * 1000)
    ).toFixed(9)

  const [age, setAge] = React.useState(getAge())
  const [mounted, setMounted] = React.useState(false)

  setInterval(() => {
    setAge(getAge())
  }, 10)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const data: Card[] = [
    {
      title: 'Years',
      link: '',
      value: age,
      icon: "",
    },
    
  ]

  return (
    <>
      <div className='mb-4 text-center'>
        {mounted &&
          data.map((item) => {
            const { title, value } = item

            return (
              <a key={title} >
                <h1 className='text-2xl text-aired font-bold'>
                  {value}
                </h1>
                <div className=''>
                  <div className='text-sm text-center font-regular'>{title}</div>
                </div>
              </a>
            )
          })}
      </div>
    </>
  )
}

export default Items