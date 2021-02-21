import styled from 'styled-components';

export const Container = styled.div`

    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #35C0ED;
    padding: 16px;
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    input {
        flex: 1;
        border: 0;
        background: transparent;
        color: #868B8E;
    }

    svg {
        margin-right: 16px;
    }
`;

export default Container;