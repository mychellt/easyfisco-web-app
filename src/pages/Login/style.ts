import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Sigin = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form { 
        margin: 80px  80px;
        width: 340px;
        text-align: center;


        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #FFFFFF;
            border-radius: 10px;
            border: 2px solid #35C0ED;
            padding: 16px;
            width: 100%;
            color: #868B8E;

            & + input {
              margin-top: 8px;
            }
        }

        button {
            background: #35C0ED;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312E38;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#35C0ED')}
            }
        }

        a {
            color: #868B8E;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#868B8E')}
            }
        } 
    } 
    
    > a {
        color: #35C0ED;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#35C0ED')}
        }
    }
`;
