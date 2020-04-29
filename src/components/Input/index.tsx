import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handlerInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handlerInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  /*
    Initialize input with defaultValue
    <input defaultValue={defaultValue} ref={inputRef} {...rest} />
  */

  return (
    <Container isFocused={isFocused} isField={isField}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handlerInputFocus}
        onBlur={handlerInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
