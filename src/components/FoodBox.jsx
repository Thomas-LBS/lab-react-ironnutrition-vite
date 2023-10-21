// Your code here
function FoodBox({ food, deleteFoodbox }) {
    const { name, calories, image, servings, id } = food

    return (
        <div className="card">
            <h2 className="yellow">{name}</h2>

            <img src={image} />

            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>

            <p>
                Total Calories: <span className="yellow">{servings*calories}</span> kcal
            </p>

            <button onClick={() => deleteFoodbox(id)}>Delete</button>
        </div>
    )
}

export default FoodBox 