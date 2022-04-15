const Recipes = (props) => {
    return (
        <main className="recipes">
            <div className="container">
                <div className="recipes__wrapper">
                    <h1 className="recipes__title">{props.title}</h1>
                    <div className="recipes__grid">

                    </div>
                    <button className="recipes__main-btn">Load more</button>
                </div>
            </div>
        </main>
    )
}

export default Recipes;
