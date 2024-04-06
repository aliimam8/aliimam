'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import FileSaver from 'file-saver'
import { filesize } from 'filesize'
import { ImageIcon, XIcon } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

import { base64ToSvg } from '@/lib/imagec/base64-to-svg'
import { getExtension } from '@/lib/imagec/get-extension'
import { imageToBase64 } from '@/lib/imagec/image-to-base64'
import { svgToBase64 } from '@/lib/imagec/svg-to-base64'
import { truncateFilename } from '@/lib/imagec/truncate-filename'
import { Icons } from '@/components/icons'

type ImageFile = {
  file: File
  id: string
  name: string
  extension: string
  size: string
  to?: Option
  result?: string
}

type Option = (typeof options)[number]['value']

const options = [
  { value: 'jpg', label: 'JPG' },
  { value: 'jpeg', label: 'JPEG' },
  { value: 'png', label: 'PNG' },
  { value: 'gif', label: 'GIF' },
  { value: 'webp', label: 'WEBP' },
  { value: 'svg', label: 'SVG' },
  { value: 'ico', label: 'ICO' }
] as const

const download = async (result: string, filename: string, to: string) => {
  const blob = await (await fetch(result)).blob()
  FileSaver.saveAs(blob, `${filename.replace(/\.[^./]+$/, '')}.${to}`)
}

const ImageConverter = () => {
  const [files, setFiles] = React.useState<ImageFile[]>([])

  const onDrop = React.useCallback((newFiles: File[]) => {
    for (const file of newFiles) {
      const name = truncateFilename(file.name)
      const newFile: ImageFile = {
        file,
        id: uuid(),
        name,
        size: filesize(file.size, {
          base: 2,
          standard: 'jedec'
        }).toString(),
        extension: getExtension(file.name).toUpperCase()
      }

      setFiles((prev) => [...prev, newFile])
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': options.map((option) => `.${option.value}`)
    },
    onDropRejected: (newFiles) => {
      for (const file of newFiles) {
        toast.error(`${getExtension(file.file.name)} is not supported`)
      }
    }
  })

  const setAllExtensions = (opts: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        file.to = opts
        return file
      })
    )
  }

  const setExtension = (id: string, option: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        if (file.id === id) return { ...file, to: option }

        return file
      })
    )
  }

  const clearAll = () => setFiles([])

  const convertAll = () => {
    for (const imageFile of files) {
      const { extension, to, file, id } = imageFile

      if (to) {
        let conversion

        if (to === 'svg') {
          conversion = base64ToSvg
        } else if (extension === 'SVG') {
          conversion = svgToBase64
        } else {
          conversion = imageToBase64
        }

        conversion(file, (result) =>
          setFiles((prev) =>
            prev.map((f) => {
              if (f.id === id)
                return {
                  ...f,
                  result
                }
              return f
            })
          )
        )
      }
    }
  }

  const deleteHandler = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto mb-10 md:mb-20 max-w-4xl px-6'>
      <p className='text-center my-6 text-xs text-slate-600 dark:text-slate-400 lg:text-md tracking-widest uppercase font-light'>
          Image Converter
        </p>
      <div
        {...getRootProps()}
        className='hover:bg-slate-100/50 dark:hover:bg-slate-900/50 p-10 flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 transition-colors duration-300'
      >
        <Icons.media strokeWidth={1} size={70} className='text-aired' />
        <input {...getInputProps()} />
        <p className='text-slate-600 dark:text-slate-400'>Drag some images here, or click to select files.</p>
      </div>

      {files.length > 0 && (
        <div className='w-full mt-8'>
          <div className='flex items-center gap-4 justify-between px-6'>
            <div className='flex flex-col md:flex-row items-center gap-4'>
              <p className='text-slate-600 dark:text-slate-400'>Convert all to</p>
              <Select
                onValueChange={(option: Option) => setAllExtensions(option)}
              >
                <SelectTrigger className='w-32'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              <Button variant='outline' onClick={clearAll} type='button'>
                Clear all
              </Button>
              <Button
              variant='redbutton'
                disabled={
                  files.filter((file) => file.to !== undefined).length !==
                  files.length
                }
                onClick={convertAll}
                type='button'
              >
                Convert all
              </Button>
            </div>
          </div>

          <div className='my-6 space-y-4'>
            {files.map((file) => {
              const { name, size, extension, id, result, to } = file

              return (
                <div
                  key={id}
                  className='flex flex-col gap-4 rounded-3xl border p-8 border-slate-400 dark:border-slate-600'
                >
                  <div className='text-md md:text-xl font-semibold'>{name}</div>

                  <div className='flex flex-col justify-between sm:flex-row sm:items-center'>
                    <div className='text-sm text-slate-600 dark:text-slate-400'>{size}</div>

                    <div className='mt-4 flex items-center justify-between gap-2 sm:mt-0 sm:justify-center'>
                      {result ? (
                        <Button
                        variant='redbutton'
                          onClick={() => to && download(result, name, to)}
                          type='button'
                        >
                          Download
                        </Button>
                      ) : (
                        <div className='flex items-center gap-2'>
                          <p className='text-slate-600 dark:text-slate-400'>{extension} to{' '}</p>
                          <Select
                            value={to}
                            onValueChange={(option: Option) =>
                              setExtension(id, option)
                            }
                          >
                            <SelectTrigger className='w-32'>
                              <SelectValue placeholder='Select' />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <Button
                        variant='destructive'
                        className='size-10 p-0'
                        onClick={() => deleteHandler(id)}
                        type='button'
                      >
                        <XIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageConverter