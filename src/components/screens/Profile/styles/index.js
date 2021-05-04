import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 88px;
  ${breakpointsMedia({
    md: css`
      width: 100px;
    `,
    lg: css`
      width: 160px;
    `,
  })}
`;

export const ProfileInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 29px;
  ${breakpointsMedia({
    md: css`
      margin-left: 58px;
    `,
    lg: css`
      margin-left: 74px;
    `,
  })}
`;
export const ProfileStatus = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
ProfileStatus.Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileDescription = styled.div`
  display: none;
  margin-top: 32px;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: column;
    `,
  })}
`;

ProfileDescription.Mobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}
`;

export const PhotoGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;

  ${breakpointsMedia({
    md: css`
      gap: 16px;
    `,
    lg: css`
      gap: 32px;
    `,
  })}
`;

export const LikeButton = styled.div`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
    md: css`
      flex-direction: column;
    `,
  })}
`;

export const PhotoItem = styled.div`
  position: relative;
`;

PhotoItem.PhotoSection = styled.img`
  width: 100%;
`;

PhotoItem.LikeSectionWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    opacity: 1;
    background-color: rgba(255,255,255,0.5);
  }
`;

PhotoItem.LikeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
