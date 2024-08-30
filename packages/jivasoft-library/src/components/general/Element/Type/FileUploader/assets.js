import React from 'react'
import {
  FaFileAlt,
  FaFileCsv,
  FaFileExcel,
  FaFileImage,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord
} from 'react-icons/fa'
import { DefaultFileIconContainer, StyledFileIconContainer } from './styles'
//TODO: add valid filetypes here
export const filetypes = [
  {
    type: 'application/pdf',
    alt: ['pdf'],
    icon: (
      <DefaultFileIconContainer color='red'>
        <FaFilePdf />
      </DefaultFileIconContainer>
    )
  },
  {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    alt: ['docx'],
    icon: (
      <DefaultFileIconContainer color='#2b579a'>
        <FaFileWord />
      </DefaultFileIconContainer>
    )
  },
  {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    alt: ['xlsx'],
    icon: (
      <DefaultFileIconContainer color='#217346'>
        <FaFileExcel />
      </DefaultFileIconContainer>
    )
  },
  // { type: 'pptx', icon: <FaFilePowerpoint size={50} color='#d24726' /> },
  {
    type: 'image/jpeg',
    alt: ['jpeg'],
    icon: (
      <DefaultFileIconContainer>
        <FaFileImage />
      </DefaultFileIconContainer>
    )
  },
  {
    type: 'image/png',
    alt: ['png'],
    icon: (
      <DefaultFileIconContainer>
        <FaFileImage />
      </DefaultFileIconContainer>
    )
  }
  // {
  //   type: 'csv',
  //   icon: <FaFileCsv size={50} color={themeState.currentTheme.bg0} />
  // },
  // {
  //   type: 'txt',
  //   icon: <FaFileAlt size={50} color={themeState.currentTheme.bg0} />
  // },
  // {
  //   type: 'application/zip',
  //   alt: ['zip'],
  //   icon: <BsFileZipFill size={50} color={themeState.currentTheme.bg0} />
  // }
]
