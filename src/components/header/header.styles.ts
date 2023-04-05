import styled from 'styled-components'

export const SidebarNav = styled.nav`
    height: 100vh;
    display: flex;
    position: fixed;
    top: 100px;
    left: 100px;
    @media screen and (max-width: 800px) {
        top: 15px;
        left: 15px;
    }
`;
