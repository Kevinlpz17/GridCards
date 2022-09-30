import React, { useState } from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { TextCustom, ButtonCustom, TextInputCustom } from '../../atoms';
import { DialogCustom } from '../../templates';


const DialogTareaDelete = ({ idTarea = '', open = false, setOpen = () => null, onDismiss = () => null }) => {

  const handleAccept = () => {
    setOpen(false);
    onDismiss();
  };

  const handleCancel = () => {
    setOpen(false);
    onDismiss();
  };


  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Eliminar Tarea"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative items-center mt-5">
          <TextCustom text='¿Esta seguro que desea eliminar la tarea?' className='fontPMedium font-bold' />
          <TextCustom text='No la podra recuperar' className='fontPREgular' />
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Eliminar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  )
}

export default DialogTareaDelete