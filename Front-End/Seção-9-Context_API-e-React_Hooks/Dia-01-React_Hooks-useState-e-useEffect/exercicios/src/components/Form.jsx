import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({ name: '', cidade: '', age: 0 });
    const [module, setModule] = useState();

    const handleClick = (event) => {
        event.preventDefault()
        alert(`${form.name} de ${form.cidade} tem ${form.age} anos está no módulo de ${module}` )
    };

    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        })
    };

    return (
        <form>
            <fieldset>

                <legend>Dados Pessoais</legend>
                <label htmlFor="name">
                    Nome completo:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label htmlFor="cidade">
                    Cidade:
                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        value={form.city}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label htmlFor="age">
                    Idade:
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={form.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
            </fieldset>


            <fieldset>
                <legend>Módulos Atual</legend>
                <label htmlFor="fundamentos">
                    <input
                        type="radio"
                        id="fundamentos"
                        name="module"
                        value="Fundamentos"
                        checked={module === "Fundamentos"}
                        onChange={({ target }) => setModule(target.value)}
                    />
                    Fundamentos
                </label>
                <br />

                <label htmlFor="Front-end">
                    <input
                        type="radio"
                        id="Front-end"
                        name="module"
                        value="Front-end"
                        checked={module === "Front-end"}
                        onChange={({ target }) => setModule(target.value)}
                    />
                    Front-End
                </label>
                <br />

                <label htmlFor="Back-End">
                    <input
                        type="radio"
                        id="Back-End"
                        name="module"
                        value="Back-End"
                        checked={module === "Back-End"}
                        onChange={({ target }) => setModule(target.value)}
                    />
                    Back-End
                </label>
                <br />

                <label htmlFor="Ciencias da Computação">
                    <input
                        type="radio"
                        id="Ciencias da Computação"
                        name="module"
                        value="Ciencias da Computação"
                        checked={module === "Ciencias da Computação"}
                        onChange={({ target }) => setModule(target.value)}
                    />
                    Ciencias da Computação
                </label>
                <br />

            </fieldset>

            <button
                type="submit"
                onClick={handleClick}
            >
                Enviar
            </button>
        </form>
    )
}
export default Form;