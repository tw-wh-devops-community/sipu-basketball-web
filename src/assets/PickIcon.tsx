import React, { FC } from 'react';

const PickIcon: FC = () => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H8C8.53043 0 9.03914 0.210714 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2V16L5 13.5L0 16V2Z" fill="url(#paint0_radial)" />
    <defs>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5) rotate(90) scale(16 10)">
        <stop stopColor="#FFBA82" />
        <stop offset="1" stopColor="#FF8B2D" />
      </radialGradient>
    </defs>
  </svg>
);

export default PickIcon;
