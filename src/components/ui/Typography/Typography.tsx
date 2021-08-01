import React from 'react';
import clsx from 'clsx';
import classes from './Typography.module.scss';

interface TypographyProps {
  renderAs?: React.ElementType;
  className?: string;
  variant?:
    | 'heading3'
    | 'bodySmall'
    | 'bodyMedium'
    | 'bodyLarge';
  color?: 'greyLight' | 'grey';
  display?: 'block' | 'inline';
  [key: string]: any;
}

const Typography: React.FC<TypographyProps> = ({
  renderAs,
  className,
  children,
  variant = 'bodyMedium',
  color= 'grey',
  align,
  display,
  ...rest
}) => {
  const tagMapping = {
    heading3: 'h3',
    'bodySmall': 'span',
    'bodyMedium': 'span',
    'bodyLarge': 'span',
  };

  const ComponentTag = renderAs || tagMapping[variant] || 'span';

  return (
    <ComponentTag
      className={clsx(
        classes[variant],
        classes[color],
        display !== undefined && classes[display],
        className
      )}
      {...rest}
    >
      {children}
    </ComponentTag>
  );
};

export { Typography };
