import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const id = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);

    return (
        <div>
            <Container>
                <h1>Update Product</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Product Name" {...register("productName", { required: true, maxLength: 80 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Price" {...register("price", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Engine Capacity" {...register("engineCapacity", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Power" {...register("power", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="number" placeholder="Gears" {...register("gears", { required: true })} />

                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Weight" {...register("weight", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Image Url" {...register("image", { required: true })} />
                        <select className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" {...register("category")}>
                            <option value="Commuter">Commuter</option>
                            <option value="Sports">Sports</option>
                            <option value="Cafe Racer">Cafe Racer</option>
                            <option value="Cruiser">Cruiser</option>
                        </select>
                        <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Description" {...register("description", { required: true })} />

                        <Button className="btn-submit border-0 fw-bold px-3 w-100 mt-3 mx-auto" variant="dark" type="submit">Update</Button>
                    </form>
                </div>
            </Container>

        </div>
    );
};

export default UpdateProduct;
