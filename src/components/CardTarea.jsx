import React from 'react'

//Assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

//Components
import { Divider } from '@mui/material';
import IconButtonCustom from './atoms/IconButtonCustom';
import TextCustom from './atoms/TextCustom';

const CardTarea = ({id = '', titulo = '', descripcion = '', onClick = () => null}) => {
  const handleEditar = () => {
    onClick('edit', id);
  }

  const handleEliminar = () => {
    onClick('delete', id);
  }

  return (
    <div className='bg-orange-400 flex h-32'>
      <div className='bg-green-300 w-full flex flex-col gap-2 p-3'>
        <div>
          <TextCustom text={titulo} className="text-xl fontPBold" />
        </div>

        <Divider/>

        <div>
          <TextCustom text={descripcion} className="text-xl fontPRegular" />
          </div>
        </div>
        
        <div className='w-20 bg-green-300 pt-3 px-4'>
          <IconButtonCustom icon={<EditIcon style={{fontSize: 30}}/>} onClick={handleEditar} />
          <IconButtonCustom icon={<DeleteIcon style={{fontSize: 30}}/>} onClick={handleEliminar} />
        </div>
    </div>
  )
}

export default CardTarea;