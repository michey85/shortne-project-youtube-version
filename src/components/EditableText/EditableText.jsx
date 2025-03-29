import React, { useState } from 'react';
import { IoBuild } from 'react-icons/io5';

import { Button } from '../Button';
import { Input } from '../Input';
import classes from './EditableText.module.scss';

const EditableText = ({ id, value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(id, inputValue);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setInputValue(value);
  };

  return (
    <div className={classes.container}>
      {isEditing ? (
        <>
          <Input
            className={classes.editableInput}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className={classes.btn} onClick={handleSave}>
            Save
          </Button>
          <Button className={classes.btn} onClick={handleCancel}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span>{value}</span>
          <Button className={classes.btn} onClick={handleEdit}>
            <IoBuild />
          </Button>
        </>
      )}
    </div>
  );
};

export default EditableText;
