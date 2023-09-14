const Cart = ({ selectedActor, totalCost, remaining }) => {
    return (
        <div className="text-white">
            <h1 className="text-2xl font-bold my-2"> Movie Budget: 50,000 $</h1>
            <h1 className="text-lg font-bold my-2"> Remaining: {remaining} </h1>
            <h1 className="text-lg font-bold my-2"> Total Cost: {totalCost} </h1>
            {
                selectedActor.map(actor => <li className="list-decimal text-left ml-5 font-bold my-2" key={actor.id}>{actor.name}</li>)
            }
            <button onClick={() => window.location.reload(true)}
            className="rounded-xl px-4 py-2 my-3 font-bold text-lg bg-blue-400" >Complete</button>
        </div>
    );
};

export default Cart;