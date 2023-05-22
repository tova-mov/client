import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'

const RecipesGrid = ({ recipes, src, deleteRecipe }) => {

    return (<>
        {console.log(recipes)}
        <div style={{ flexWrap: "wrap", justifyContent: "center", display: "flex", padding: 50 }}>
            {recipes?.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} src={src} deleteRecipe={deleteRecipe} />
            ))}
        </div></>
    )
}

export default RecipesGrid;


