// Your code here
function AddFoodForm() {
    return (
        <div id="form" className="card">
            
            <form>
            <h2 className="yellow">An Envie to Add?</h2>
                <label>Name:</label>
                <input name="name" type="text"/>                    
                
                <label>Image:</label>
                <input  name="image" type="text"/>
                
                <label>Calories:</label>    
                <input name="calories" type="number"/>
                
                <label>Servings:</label>
                <input name="servings" type="number"/>
                <br/>            

                <button>Add Food</button>
            </form>
        </div>
    )
}

export default AddFoodForm