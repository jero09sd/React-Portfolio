import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

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

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onSuccess: () => {
                inertia.visit(route("welcome"));
            },
        });
    };

    return (
        <>
            <Head title="Register" />
            <div
                class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${"../../Assets/blurredBG.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: "blur(10rem)",
                }}
            >
                <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div class="text-white">
                        <div class="mb-8 flex flex-col items-center">
                            <Link href="/">
                                <ApplicationLogo className="w-20 h-20 fill-current" />
                            </Link>
                            <h1 class="mb-2 text-2xl font-Roman">Triestis.</h1>
                            <span class="text-gray-300">
                                Please! make your Account here.
                            </span>
                        </div>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    placeHolder="Name"
                                    value={data.name}
                                    className="mt-1 block w-full border-none bg-[#2470c6] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeHolder="Email"
                                    value={data.email}
                                    className="mt-1 block w-full border-none bg-[#2470c6] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeHolder="Password"
                                    value={data.password}
                                    className="mt-1 block w-full border-none bg-[#2470c6] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    placeHolder="Confirm your Password"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full border-none bg-[#2470c6] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route("login")}
                                    className="underline text-sm text-gray-200 hover:text-[#2470c6] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1feffe]"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
