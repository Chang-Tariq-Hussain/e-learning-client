import React from 'react';
import Button from 'react-bootstrap/Button'; // Corrected import
import { Link } from 'react-router'; // Fixed the import for `Link`
import { Spin } from 'antd';
import './theme-button.scss';

interface ThemeButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
  route?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  text = 'Add Button Text',
  type = 'button',
  className = '',
  disabled = false,
  loader = false,
  onClick,
  route,
  prefixIcon,
  suffixIcon,
}) => {
  const buttonContent = loader ? (
    <Spin />
  ) : (
    <>
      {prefixIcon && <span className="prefix-icon rtl-ml">{prefixIcon}</span>}
      {text}
      {suffixIcon && <span className="suffix-icon rtl-mr">{suffixIcon}</span>}
    </>
  );

  return (
    <>
      {route ? (
        <Link to={!disabled ? route : '#'}>
          <Button
            type={type}
            variant="asd"
            className={`theme-button ${className}`}
            disabled={disabled}
            onClick={onClick}
          >
            {buttonContent}
          </Button>
        </Link>
      ) : (
        <Button
          type={type}
          variant="asd"
          className={`theme-button ${className}`}
          disabled={loader || disabled}
          onClick={onClick}
        >
          {buttonContent}
        </Button>
      )}
    </>
  );
};

export default ThemeButton;
