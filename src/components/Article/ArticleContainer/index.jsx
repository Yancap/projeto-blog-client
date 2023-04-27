import React from 'react'
import { Container, Content, LabelLogo, Text } from './styles'

export const ArticleContainer = () => {
  return (
    <Container>
        <LabelLogo>

        </LabelLogo>
        <Content>
            <h1>
                Titulo do Artigo Lorem Ipsum dolor sit ammet
            </h1>
            <h3>
                Subtitulo do Artigo Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam elementum, arcu ut bibendum lobortis, orci velit sagittis magna, nec
                dapibus nibh purus id ante.
            </h3>
            <Text>
                <div className="image">
                    <img src="" alt="" />
                </div>
                <span>
                    03/04/2023 - Fulano de Tal Silva
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam elementum, arcu ut bibendum lobortis, orci velit sagittis magna, 
                    nec dapibus nibh purus id ante. Donec iaculis mauris id libero tempor, eget porttitor 
                    felis malesuada. Phasellus ultrices eros eu pretium pellentesque. Nullam quam ligula, 
                    pulvinar et justo ut, bibendum vehicula lacus. Aliquam fermentum, leo sollicitudin 
                    feugiat molestie, mi quam porta elit, eu pretium elit justo sed tellus. Maecenas nec 
                    volutpat arcu. 
                    Mauris pellentesque odio efficitur arcu lobortis condimentum. In vulputate mi quam, id tristique tellus finibus id. Nulla luctus et dolor vitae convallis. Suspendisse ante sapien, vehicula et velit a, eleifend eleifend enim. Sed sed tempus ex. Quisque ut accumsan turpis. Quisque ultrices vehicula ligula, vitae posuere nibh cursus eu. Nunc ultrices felis et pellentesque bibendum. Duis mollis risus dolor, ac luctus nulla accumsan suscipit. Proin ornare purus ante, quis tristique magna suscipit feugiat. Sed aliquet et magna id suscipit.

                    Phasellus in elit nunc. Ut erat augue, maximus eu dictum eget, tempor at urna. 
                    Sed iaculis a ante nec consequat. Curabitur sit amet purus dictum, maximus metus et, 
                    fringilla leo. Nullam condimentum ex non ultricies laoreet. Aliquam vulputate lacinia
                     sapien elementum condimentum. Pellentesque ut rutrum ante, sed condimentum urna. 
                     Nam congue condimentum lacus quis tristique. Duis non hendrerit lacus, ut condimentum
                      mi. Suspendisse fringilla orci sit amet ornare consequat. Nam dui mauris, tincidunt 
                      pellentesque consectetur eu, dapibus id mi. Vivamus vel eleifend felis. In hac 
                      habitasse platea dictumst. In hendrerit maximus ex vel interdum. In nec eros 
                      tincidunt, sagittis augue euismod, vestibulum urna. Integer tristique luctus 
                      lectus ac faucibus.
                </p>
            </Text>
        </Content>
    </Container>
  )
}
