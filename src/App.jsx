import React, { useState } from "react";

import { ButtonCustom, TextCustom } from "./components/atoms";

import CardTarea from "./components/CardTarea";
import Header from "./components/Header";
import { DialogTareaAdd, DialogTareaEdit, DialogTareaDelete } from "./components/organisms";


const App = () => {
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [idTarea, setIdTarea] = useState('0');

  const tareas = [
    {
      idTarea: '1',
      title: 'Preparar desayuno',
      description: 'Hacer panqueques con miel.'
    },
    {
      idTarea: '2',
      title: 'Preparar almuerzo',
      description: 'Hacer arroz con pollo.'
    },
    {
      idTarea: '3',
      title: 'Preparar cena',
      description: 'Hacer huevos con frijoles.'
    }
  ]

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

      <TextCustom text="Aplicación de Tareas" className="text-2xl px-5 font-bold"/>
      <div className="flex justify-end pt-4 pb-4 mr-5">
        <ButtonCustom text="Crear Tarea" className='my-3 px-4' onClick={() => setShowAdd(true)} />
      </div>
      <div className="flex flex-col gap-2 px-5">
        {/* <CardTarea
          id={'1'}
          titulo="Preparar desayuno"
          descripcion="Huevo con frijoles"
          onClick={handleAction}
        />

        <CardTarea
          id={'2'}
          titulo="Preparar desayuno"
          descripcion="Huevo con frijoles"
          onClick={handleAction}
        /> */}

        {tareas.map((tarea, index) => {
          return (
            <CardTarea
              key={tarea.idTarea}
              id={tarea.idTarea}
              title={tarea.title}
              description={tarea.description}
              onClick={handleAction}
            />
          );
        })}
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
