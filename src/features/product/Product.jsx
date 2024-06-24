import { useEffect } from 'react';
import { useAddNewProductMutation } from '../../services/users';

const Product = () => {
    const [addNewProduct, { isLoading, isError, isSuccess }] = useAddNewProductMutation();

    useEffect(() => {
        const product = {
            title: 'BWM Pencil',
        };

        addNewProduct(product);
    }, [addNewProduct]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error adding user!</div>;
    }

    if (isSuccess) {
        return <div>User added successfully!</div>;
    }

    return <div>empty</div>;
};

export default Product;
