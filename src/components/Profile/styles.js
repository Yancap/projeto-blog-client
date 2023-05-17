import styled from "styled-components";

export const Container = styled.main`
    padding: 2rem .5rem 2rem 2rem;
    background: var(--background-primary);
    width: 85%;
    border-right: 1.5rem solid #efefef;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ContentProfile = styled.section`
    display: flex;
    gap: 1rem;
    div.avatar{
        height: 12rem;
        width: 12rem;
        overflow: hidden;
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        img{
            min-height: calc(100% - 1.5rem);
            height: auto;
            background: #ddd;
        }
        button{
            background: #fff;
            height: 1.5rem;
            border: 0;
            font-weight: 700;
            color: #282773;
            transition: filter .25s;
            &:hover{
                filter: brightness(.9);
            }
        }
    }

    div.user{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1{
            font-family: 'Tinos';
            font-weight: 700;
            font-size: 2.5rem;
            color: #FFFFFF;
        }
        span{
            font-weight: 400;
            font-size: 1.25rem;
            color: #282773;
        }
        button{
            background: #eee;
            padding: .5rem;
            border: 0;
            border-radius: .2rem;
            font-weight: 700;
            color: #282773;
            margin-top: 1rem;
            transition: filter .25s;
            &:hover{
                filter: brightness(.9);
            }
        }
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
        h2{
            font-weight: 700;
            font-size: 2rem;
            color: #000000;
        }
    }
    div.content{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
`
