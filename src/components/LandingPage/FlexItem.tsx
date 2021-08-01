import React from 'react';
import clsx from 'clsx';
import { Typography } from '../ui/Typography';
import classes from './FlexItem.module.scss';

export interface FlexItemProps {
  image?: string;
  subtitle?: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  titleColor?: string;
  align?: 'left' | 'right' | 'center';
  reverse?: boolean;
  bottomTitle?: string;
}

const FlexItem: React.FC<FlexItemProps> = ({
  image,
  subtitle,
  title ,
  description,
  buttonText,
  buttonLink,
  titleColor= '#2C3333',
  align= 'left',
  reverse= false,
  bottomTitle
}) => (
  <div data-testid="flex-item" className={clsx('container', classes.root, { [classes.reverse]: reverse, [classes.center]: align === 'center' })}>
    <div className={clsx(classes.textWrapper, { [classes.noImage]: !image && align !== 'center' })} style={{ textAlign: align }}>
      {subtitle && (
        <Typography variant="bodyMedium" display="block" color="greyLight">{subtitle}</Typography>
      )}
      {title && (
        <Typography variant="heading3" display="block" className={classes.mgb} style={{ color: titleColor }}>{title}</Typography>
      )}
      {description && (
        <Typography variant="bodyMedium" display="block" className={classes.mgb}>{description}</Typography>
      )}
      {buttonText && (
        <a href={buttonLink} title={buttonText} className={classes.btn}>{buttonText}</a>
      )}
      {bottomTitle && (
        <Typography variant="bodySmall" display="block" color="greyLight" className={classes.mgt}>{bottomTitle}</Typography>
      )}
    </div>
      
    {image && (
      <div className={clsx(classes.parentImageWrapper, { [classes.parentImageWrapperCenter]: align === 'center' })}>
        <div className={classes.imageWrapper}>
          <img src={image} alt={title} className={classes.img} />
        </div>
      </div>
    )}

  </div>
);

export { FlexItem };
