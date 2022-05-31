/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export type IconSetType = Record<string, React.ReactElement>;
const iconSet: IconSetType = {};

export function setIconSet(newIconSet: IconSetType) {
  for (const key in newIconSet) {
    if (Object.prototype.hasOwnProperty.call(newIconSet, key)) {
      iconSet[key] = newIconSet[key];
    }
  }
}

export interface IconProps {
  iconName: string;
  className?: string;
  onClick?: () => void;
}

function AppIcon({ className, iconName, onClick }: IconProps) {
  return (
    <span className={className} onClick={onClick}>
      {iconSet[iconName]}
    </span>
  );
}

AppIcon.defaultProps = {
  className: '',
  onClick: () => {},
};

export default AppIcon;
