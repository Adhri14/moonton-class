import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <React.Fragment>
            <Head title="Sign In" />
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
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    label="Email Adress"
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
                                    placeholder="Password"
                                    label="Password"
                                    value={data.password}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.password}
                                    className="-mt-2"
                                />
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                                <Button
                                    type="button"
                                    isLink
                                    variant="white-outline"
                                    href={route("register")}
                                >
                                    <span className="text-base font-semibold">
                                        Create New Account
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
