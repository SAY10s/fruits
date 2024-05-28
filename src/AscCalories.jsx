export  default  function  AscCalories({ fruits })
{
    const sortedFruits  =  [...fruits].sort((a, b) => a.calories - b.calories);
    const fruitsOver110 = sortedFruits.filter(fruit => fruit.calories > 110);
    return (
        <div>
            <h1>Sorted by Name in Ascending Calories</h1>
            <ul>
                {fruitsOver110.map((fruit) => (
                    <li key={fruit.name}>
                        {fruit.name} - {fruit.calories} calories
                    </li>
                ))}
            </ul>
        </div>
    );
}