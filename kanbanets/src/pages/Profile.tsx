import { Navbar } from "../components/Navbar/Navbar";

export function Profile(){
    return(
        <>
            <Navbar/>
            <div>
                <h2>Profile</h2>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h2>James Halpert</h2>
                        <p>james.halpert@gmail.com</p>
                        <div>Trocar Senha</div>
                    </div>
                    <button>Excluir Conta</button>
                </div>
            </div>
        </>
    )
}