import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


const product = products[0]

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                { ({reset, count, isMaxCountReached,increaseBy, maxCount}) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons/>
                    </>
                )}
            </ProductCard>

        </div>
    )
}
