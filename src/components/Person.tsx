const getWeekday = (today: Date): string => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

type Props = {
    name: string;
    legs: number;
    avatar: string;
}

    export const Person = ({ name, legs, avatar }: Props) => {
    const today: Date = new Date();

    return (
        <div className="p-4">
            <h1>{name} - {getWeekday(today)}</h1>
            <img 
                src={avatar} 
                alt="Imagem do calo" 
                className="w-52"    
            />
            <ul>
                <li>Nome: {name}</li>
                <li>Qtd Pernas: {legs}</li>
            </ul>
        </div>
    )
}