import styled, { css } from 'styled-components';
import model_s from '../../assets/images/model_s.jpg'
import model_x from '../../assets/images/model_x.jpg'
import model_y from '../../assets/images/model_y.jpeg'
import model_3 from '../../assets/images/model_3.jpg'
import powerwall from '../../assets/images/powerwall.png'
import recharger from '../../assets/images/recharger.jpg'


const backgroundCSS = css`
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`

  .colored:nth-child(1) {
    background-image: url(${model_s});
    ${backgroundCSS};
  }
  .colored:nth-child(2) {
    background-image: url(${model_x});
    ${backgroundCSS};
  }
  .colored:nth-child(3) {
    background-image: url(${model_y});
    ${backgroundCSS};

  }
  .colored:nth-child(4) {
    background-image: url(${model_3});
    ${backgroundCSS};
  }
  .colored:nth-child(5) {
    background-image: url(${powerwall});
    ${backgroundCSS};
  }
  .colored:nth-child(6) {
    background-image: url(${recharger});
    ${backgroundCSS};
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;