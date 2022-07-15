import React from 'react'
import Table from 'react-bootstrap/Table';

//leer datos con fetch api y renderizarlos en una tabla
const Listado = ({id}) => {
    const [datos, setDatos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        fetch('http://localhost:800/musica.php')
        .then(response => response.json())
        .then(json => { 
            console.log(json);
            console.log(id)
            if (id !== "" && id !== undefined) {
                setDatos(json.filter(item => item.id == id));
            } else {
                setDatos(json);
            } setLoading(false);
            console.log(datos);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        }
        );
    }, [id]);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    
    return (
        <div>
        <h1 id='titulo-listado'>Listado</h1>
        <Table className='container' striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Actividad</th>
                <th>Genero</th>
                <th>Pais</th>
                <th>Integrantes</th>
            </tr>
            </thead>
            <tbody>
            {datos.map(dato => (
                <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.actividad}</td>
                    <td>{dato.genero}</td>
                    <td>{dato.pais}</td>
                    <td>{dato.integrantes}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
    }

    export default Listado;