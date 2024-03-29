import Product from "./Product";

const ProductFeed = ({ products }) => {
	return (
		<div className="grid grid-flow-row-dense product-img  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products
				.slice(0, 4)
				.map(({ id, title, rating, price, description, category, image }) => (
					<Product
						key={id}
						id={id}
						title={title}
						rating={rating}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
			<img
				className="md:col-span-full"
				src="banner.jpg"
				alt=""
				loading="lazy"
			/>
			<div className="md:cols-span-2">
				{products
					.slice(4, 5)
					.map(({ id, title, rating, price, description, category, image }) => (
						<Product
							key={id}
							id={id}
							title={title}
							rating={rating}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
			</div>
			{products
				.slice(5, products.length)
				.map(({ id, title, rating, price, description, category, image }) => (
					<Product
						key={id}
						id={id}
						title={title}
						rating={rating}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
		</div>
	);
};

export default ProductFeed;
