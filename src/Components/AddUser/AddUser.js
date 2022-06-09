import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUser = ({ refetch }) => {
    const navigation = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStroageKey = "94e90174113801f1fbaf97966b083daf";
    const onSubmit = data => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStroageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        }).then(res => res.json()).then((result) => {
            if (result.success) {
                const img = result.data.url;
                const userInformation = {
                    avatar: img, first_name: data.firstname, last_name: data.lastname, email: data.email
                }
                console.log(userInformation)
                fetch(`http://localhost:5000/employeeadd`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInformation)
                }).then(res => res.json()).then(data => {
                    if (data.messages === 'success') {
                        toast.success('User Add SucessFully')
                        refetch()
                        reset()
                        navigation('/')
                    }
                })
            }
        })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control mb-2">
                                    <input type="text" placeholder="First Name" {...register("firstname", { pattern: /^[A-Za-z]+$/i, required: true })} className="input input-bordered" />
                                    {errors.firstname && <span className='text-red-700'>Firstname is required</span>}
                                </div>
                                <div className="form-control mb-2">
                                    <input type="text" placeholder="last Name" {...register("lastname", { pattern: /^[A-Za-z]+$/i, required: true })} className="input input-bordered" />
                                    {errors.lastname && <span className='text-red-700'>LastName is required</span>}
                                </div>
                                <div className="form-control mb-2">
                                    <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email && <span className='text-red-700'>Email is required</span>}
                                </div>
                                <div className="form-control mb-2">
                                    <input type="file" placeholder="Email" {...register("image", { required: true })} />
                                    {errors.image && <span className='text-red-700'>This Image field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;