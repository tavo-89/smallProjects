import { useParams } from "react-router";

const Usuario = () => {
    let { username } = useParams();

    return (
        <div>
            <h3>Perfil del usuario</h3>
            <p> Nombre de usuario <b>{username}</b> </p>
        </div>
    );
};

export default Usuario;