import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Sigup = styled.div`
display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form { 
        margin: 80px  80px;
        width: 540px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
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