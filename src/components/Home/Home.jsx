import { useEffect, useState } from "react";

const Home = () => {
    const [actors, setActors] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActors(data))
    }, [])
    return (
        <div className="flex mx-10 w-[800px]">
            <div className="flex flex-wrap gap-2 w-[600px]">
                <div className="w-[230px] h-[290px] border border-solid border-gray-300">
                    <div className="justify-center flex">
                        <img className="w-[80px] rounded-[50px]" src={actors[1].image} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;