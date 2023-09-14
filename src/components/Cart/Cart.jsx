const Cart = ({ selectedActor }) => {
    return (
        <div className="text-white">
            <h1 className="text-2xl font-bold"> Total Budget: 20,000$</h1>
            <h1 className="text-lg font-bold"> Remaining: {} </h1>
            <h1 className="text-lg font-bold"> Total Cost: {} </h1>
            {
                selectedActor.map(actor => <li key={actor.id}>{actor.name}</li>)
            }
            <button className="rounded-xl px-4 py-2 font-bold text-lg bg-blue-400" >Complete</button>
        </div>
    );
};

export default Cart;