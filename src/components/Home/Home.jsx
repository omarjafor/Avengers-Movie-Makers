import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [actors, setActors] = useState([]);
    const [selectedActor, setSelectedActor] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const budget = 50000;

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActors(data))
    }, [])

    const handleAddActor = actor => {
        const isAdded = selectedActor.find(act => act.id == actor.id)
        let temp = actor?.salary;
        if(isAdded){
            return alert('Alread Added, Try Another One')
        } else {
            selectedActor.forEach(item => {
                temp += item.salary;
            });
        }
        const sum = budget - temp;
        if(sum < 0){
            return alert('Bhai Taka Shes');
        }else{
            setSelectedActor([...selectedActor, actor]);
            setRemaining(sum);
            setTotalCost(temp);
        }
    }

    return (
        <div className="flex">
            <div className="mx-10 w-[965px]">
                <h2 className="text-3xl font-bold text-white">Welcome To Avengers Movie Makers Team</h2><br></br>
                <div className="flex flex-wrap gap-5 text-white">
                    {
                        actors.map((actor, idx) => (<div key={idx} className="w-[280px] h-[300px] border border-solid border-blue-500">
                            <div className="justify-center flex">
                                <img className="w-[80px] rounded-[50px] pt-2" src={actor.image} alt="" />
                            </div>
                            <h2 className="text-2xl font-bold my-3"> {actor.name} </h2>
                            <p className="text-lg my-2 px-3">
                                <small>
                                    The Avengers or simply The Avengers, is a 2023 American superhero film.
                                </small>
                            </p>
                            <div className="flex justify-around my-2 font-bold text-lg">
                                <p>salary: {actor.salary}$</p>
                                <p>{actor.role}</p>
                            </div>
                            <button
                                onClick={() => handleAddActor(actor)}
                                className="w-2/3 font-bold rounded-lg bg-blue-400 p-2 mt-1 text-black border border-solid border-transparent cursor-pointer]"
                            >Select</button>
                        </div>))
                    }
                </div>
            </div>
            <div className="mt-16 w-1/4 px-2 border border-solid border-blue-500">
                <Cart
                selectedActor={selectedActor}
                    totalCost={totalCost}
                    remaining={remaining}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;