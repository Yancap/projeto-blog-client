import React from 'react'
import { ContainerPrimary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'

export const Article = () => {
  return (
    <>
        <ContainerPrimary>
            <ArticleContainer/>
            <Author />
        </ContainerPrimary>
    </>
  )
}
