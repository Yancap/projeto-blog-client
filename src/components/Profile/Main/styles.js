import styled from "styled-components";

export const Container = styled.section`
    margin:2rem 0 ;
    padding: 2rem .5rem 2rem 2rem;
    background: var(--background-primary);
    width: 85%;
    border-right: 1.5rem solid #efefef;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width: 500px){
        width: 100%;
        padding: 2rem .5rem;
        border: 0 none;
        align-items: center;
    }
`

export const ContentProfile = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    div.avatar{
        height: 14rem;
        width: 14rem;
        overflow: hidden;
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        img{
            height: auto;
            min-height: calc(100% - 3.5rem);
            width: 100%;
            background: #ddd;
        }
        &:hover{
            form{
                visibility: visible;
            }
        }
        @media screen and (max-width: 680px){
            justify-self: center;
        
        }
    }

    div.user{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-column: span 2 / span 3;
        gap: .5rem;
        h1{
            font-family: 'Tinos';
            font-weight: 700;
            font-size: 2.5rem;
            color: #FFFFFF;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        span{
            font-weight: 400;
            font-size: 1.25rem;
            color: #282773;
        }
        > button{
            background: #eee;
            padding: .5rem;
            border: 0;
            border-radius: .2rem;
            font-weight: 700;
            color: #282773;
            transition: filter .25s;
            &:hover{
                filter: brightness(.9);
            }
        }
        @media screen and (max-width: 480px){
            align-items: center;
            gap: 1rem;
            h1{
                flex-direction: column;
            }
        }
    }
    
    button{
        justify-self: flex-end;
        color: #fff;
        filter: brightness(.95);
        border-radius: .2rem;
        cursor: pointer;
        background: var(--red);
        padding: .25rem 1rem;
        border: none;
        transition: all .2s;
        &:hover{
            filter: brightness(1);
        }
    }
    @media screen and (max-width: 680px){
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        justify-content: center;
    }
`
export const AddAvatar = styled.form`
    display: grid;
    visibility: hidden;
    grid-template-columns: 2fr 1fr;
    input{
        display: none;
    }
    label, button{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: #fff;
        height: 1.5rem;
        border: 0;
        font-weight: 600;
        font-size: 14px;
        color: #282773;
        transition: filter .25s;
        &:hover{
            filter: brightness(.9);
        }
    }
    button{
        background: var(--color-purple-dark);
        color: #fff;
    }
`

export const ContentDeeds = styled.section`
    width: 95%;
    background: #F0F0F0;
    padding: 1rem;
    display: grid;
    gap: 1.25rem;
    div.header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-weight: 700;
            font-size: 2rem;
            color: #000000;
        }
        svg{
            height: 1.25rem;
            width: auto;
            cursor: pointer;
            transition: transform 1s;
            &.active{
                transform: rotate(180deg);
            }
        }
    }
    div.content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
    }
    
`
