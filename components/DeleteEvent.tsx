'use client';
import { Button } from '@nextui-org/react';
import { deleteEvent } from '@/actions/events';

const DeleteEventButton = (params: { eventId: string }) => {
  const { eventId } = params;

  const handleDelete = () => {
    deleteEvent(eventId);
  };

  return (
    <div className="flex w-full justify-end">
      <Button color="danger" onClick={() => handleDelete()}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteEventButton;
