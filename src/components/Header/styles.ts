import styled from 'styled-components';


export const LogoHeader = styled.div`
    float: left;
    width: 250px;
    height: 62px;
    line-height: 60px;
    color: #333;
    z-index: 1001;
    font-size: 17px;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    z-index: 1001;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.3s;
`;


export const Container = styled.div`

    background: #fff;
    min-height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1001;
    box-shadow: 0 0 5px rgba(18, 23, 39, 0.5);

`;

export default Container;