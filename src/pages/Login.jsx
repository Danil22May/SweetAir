
const Login  =() => {

    return (
        <>
        <section className="h-96 border flex flex-col mx-auto w-96 gap-9">
            <label htmlFor="city" className="text-4xl font-medium">Busca tu ciudad</label>
            <input type="text" name="city" className="border-2 border-gray-400 p-2 rounded-md shadow-inner" />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </section>
        </>
    )

}

export default Login;