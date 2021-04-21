import styled from 'styled-components'
import bgDesktop from '../../../assets/images/login-madre-desk.jpg'
import bgMobile from '../../../assets/images/login-woods-resp.jpg'

export default styled.div`  
    align-items: center;
    background: url(${bgDesktop});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 60px 0;

    form {
        max-width: 300px;
        margin: 20px;
        text-align: center;
        width: 100%;
    }

    @media (max-width: 768px) {
        background: url(${bgMobile});
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
    }

`