export  default  function  AscName({ fruits })
{
    const sortedFruits  =  [...fruits].sort((a, b) => a.name.localeCompare(b.name));
    const reversedFruits = sortedFruits.reverse();
  return (
    <div className={"container"}>
        {reversedFruits.map((fruit) => (
          <div key={fruit.name}>
            {fruit.name} - {fruit.calories} calories
          </div>
        ))}
    </div>
  );
}