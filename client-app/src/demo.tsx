interface Duck {
    name: string;
    numLegs: number;
    MakeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: "dockooo",
    numLegs: 2,
    MakeSound(sound) {
        console.log(sound);
    }
}

const duck2: Duck = {
    name: "dockiiduckoo",
    numLegs: 2,
    MakeSound(sound) {
        console.log(sound);
    }
}

function Demo() {
    return (
        <div>{duck2.name}   {duck2.numLegs}</div>
    )
}

// export default Demo;
export default duck1;





