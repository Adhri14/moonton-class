import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import InputError from "@/Components/InputError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <React.Fragment>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt="Hero"
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="Logo" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder="Your Fullname..."
                                    label="Full Name"
                                    value={data.name}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.name}
                                    className="-mt-2"
                                />

                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address..."
                                    label="Email Address"
                                    value={data.email}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.email}
                                    className="-mt-2"
                                />

                                <TextInput
                                    type="password"
                                    name="password"
                                    placeholder="Your Password..."
                                    label="Password"
                                    value={data.password}
                                    handleChange={onHandleChange}
                                />

                                <InputError
                                    message={errors.password}
                                    className="-mt-2"
                                />

                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Your Password..."
                                    label="Password Confirmation"
                                    value={data.password_confirmation}
                                    handleChange={onHandleChange}
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="-mt-2"
                                />
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Button
                                    type="button"
                                    variant="white-outline"
                                    isLink
                                    href={route("login")}
                                >
                                    <span className="text-base font-semibold">
                                        Sign In to My Account
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
