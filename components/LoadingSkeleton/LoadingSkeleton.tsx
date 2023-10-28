'use client';

import {
  Container,
  SkeletonBtn,
  SkeletonImg,
  SkeletonInner,
  SkeletonLineOne,
  SkeletonLineTwo,
} from './LoadingSkeleton.styles';

export const LoadingSkeleton = () => {
  return (
    <Container>
      <SkeletonInner>
        <SkeletonImg />
        <SkeletonBtn />
        <SkeletonLineOne />
        <SkeletonLineTwo />
      </SkeletonInner>
    </Container>
  );
};
