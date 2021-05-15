import styled from 'styled-components';

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; 
  margin-bottom: 16px;
  height: 120px;

  & > button {
    margin-right: 8px;
  } 

  & > button:last-child {
    margin: 0;
  }
`;

export default Slider;
