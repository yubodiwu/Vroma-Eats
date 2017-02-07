import React, {Component} from "react";
import {connect} from "react-redux";

import MakeRecipeDirections from "MakeRecipeDirections";

var actions = require("actions");

class MakeRecipe extends Component {
    constructor(props) {
        super(props);

        this.ingredientSubmit = this.ingredientSubmit.bind(this);
    }

    componentWillMount() {
        this.directionNumber = 0;
    }

    ingredientSubmit(event) {
        var {dispatch} = this.props;
        event.preventDefault();
        console.log("ingredient submitted");
        console.log(this.refs);
    }

    render() {
        return (
            <div className="content-container row">
                <div className="content-list columns medium-10 large-8 small-centered">
                    <div className="recipe-header">
                        {/* <img src={props.currentRecipe.img} alt="recipe_img" className="recipe-image"/>
                        <div>
                            <h3>{props.currentRecipe.name}</h3>
                            <p>Calories: {props.currentRecipe.calories || "Not yet set"}</p>
                            <p>Servings: {props.currentRecipe.servings || "Not yet set"}</p>
                        </div> */}
                    </div>
                    <div className="recipe-content">
                        <div className="recipe-ingredients-div columns large-10">
                            <h5>STUFF</h5>
                            <div className="recipe-div-innermost">
                                {/* {renderIngredients(props)} */}
                            </div>
                        </div>
                        <MakeRecipeDirections></MakeRecipeDirections>
                    </div>
                    <div id="make-recipe-buttons-div">
                        <form onSubmit={this.ingredientSubmit}>
                            <button className="blue-button" type="submit"><span>+</span> INGREDIENT</button>
                            <div>
                                <input id="ingredient-quantity" type="text" ref="amount" placeholder="amount"/>
                                <select id="ingredient-units" ref="units">
                                    <option value="g">grams</option>
                                    <option value="oz">oz</option>
                                    <option value="lbs">lbs</option>
                                    <option value="tsp">tsp</option>
                                    <option value="tbsp">tbsp</option>
                                    <option value="cup">cups</option>
                                </select>
                                <input id="ingredient-name" type="text" ref="description" placeholder="description"/>
                            </div>
                        </form>
                        <form>
                            <button className="green-button"><span>+</span> STEP</button>
                            <input type="text"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(MakeRecipe);