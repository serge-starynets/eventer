'use client';
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

// @ts-ignore
const Submit = ({ label, ...btnProps }) => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  );
};

export default Submit;
