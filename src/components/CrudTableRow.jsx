import React from "react";

const Crudtablerow = ({e, setDataToEdit, deleteData}) => {

    return (
        <tr>
        <td>{e.name}</td>
        <td>{e.constellation}</td>
        <td className="btn">
            <button onClick={()=>setDataToEdit(e)}>Editar</button>
            <button onClick={()=> deleteData(e.id)}>Eliminar</button>
        </td>
        </tr>
    );
};

export default Crudtablerow;
