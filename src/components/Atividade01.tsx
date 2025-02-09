

export const Atividade01 = () => {
    const fullTime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format();

    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 12) {
        greeting = 'Bom dia';
    } else if (hour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="text-9xl">{fullTime}</div>
            <div className="text-5xl font-bold">{greeting}</div>
        </div>
        );
    }