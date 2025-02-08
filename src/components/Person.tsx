const getWeekday = (today: Date): string => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

export const Person = () => {
    const data = {
        name: "Calo",
        legs: 2,
        avatar: "https://i.pinimg.com/736x/4d/5c/34/4d5c345462e46789b9d170487d85ccca.jpg"
    }
    const today: Date = new Date();

    return (
        <>
            <h1>{data.name} - {getWeekday(today)}</h1>
            <img 
                src={data.avatar} 
                alt="Imagem do calo" 
                className="w-52"    
            />
            <ul>
                <li>Nome: {data.name}</li>
                <li>Qtd Pernas: {data.legs}</li>
            </ul>
        </>
    )
}