import React, { useState } from "react";

import { ButtonCustom } from "./components/atoms";

import CardTarea from "./components/CardTarea";
import Header from "./components/Header";
import { DialogTareaAdd, DialogTareaEdit, DialogTareaDelete } from "./components/organisms";


const App = () => {
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [idTarea, setIdTarea] = useState('0');

  const handleAction = (type = '', id = '') => {
    setIdTarea(id);
    switch (type) {
      case 'edit':
        setShowEdit(true);
        break;

      case 'delete':
        setShowDelete(true);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header />

      <h1 className="px-5 pt-5 text-2xl font-extrabold">Tarea</h1>
      <div className="flex justify-end pt-4 pb-4 mr-5">
        <ButtonCustom text="Crear Tarea" className='my-3 px-4' onClick={() => setShowAdd(true)} />
      </div>
      <div className="flex flex-col gap-2 px-5">
        <CardTarea
          id={'1'}
          titulo="Preparando desayuno"
          descripcion="Huevo con frijoles"
          onClick={handleAction}
        />

        <CardTarea
          id={'2'}
          titulo="Preparando desayuno"
          descripcion="Huevo con frijoles"
          onClick={handleAction}
        />
      </div>
      <DialogTareaAdd
        idTarea={idTarea}
        open={showAdd}
        setOpen={setShowAdd}
      />

      <DialogTareaEdit
        idTarea={idTarea}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={() => setIdTarea('0')}
      />

      <DialogTareaDelete
        idTarea={idTarea}
        open={showDelete}
        setOpen={setShowDelete}
        onDismiss={() => setIdTarea('0')}
      />

    </div>
  );
}

export default App;
