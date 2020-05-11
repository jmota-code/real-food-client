import { IngredientInterface } from "../config/interfaces";
import withQueryData from "./hocs/with-query-data";

const IngredientsSection = ({
	data: ingredients = [],
}: {
	data: IngredientInterface[];
}) => {
	if (!ingredients.length) {
		return <div></div>;
	}
	return (
		<div>
			<h3>{ingredients.length} Ingredients</h3>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient.id}>
						{ingredient.quantity} {ingredient.unit} {ingredient.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default withQueryData(IngredientsSection);
