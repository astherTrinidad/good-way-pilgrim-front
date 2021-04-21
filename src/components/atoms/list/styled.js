import styled from 'styled-components'
import colors from '../../../assets/colors'


const NavUnlisted = styled.ul`
align-items: center;
display: flex;
justify-content:center;
text-shadow: 2px 2px 3px black;

  a {
    text-decoration: none;
  }

  li {
    color: ${colors.white};
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
    padding: 0.755em 1em;
  }

  .current {
    li {
      border-bottom: 3px solid ${colors.primary};
    }
  }
`
export default NavUnlisted