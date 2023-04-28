import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                window.location.href = route("welcome");
            },
        });
    };

    return (
        <div>
            <Head title="Log in" />
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
                                Enter Login Details
                            </span>
                        </div>

                        <form onSubmit={submit}>
                            <div className="mb-4 text-lg">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeHolder="Email"
                                    value={data.email}
                                    className="mt-1 block w-full border-none bg-[#2470c6] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
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
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ml-2 text-sm text-gray-200">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="underline text-sm text-gray-200 hover:text-[#2470c6] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1feffe]"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>
                            <div className="flex items-center justify-start">
                                <span className="mr-2">or</span>
                                <Link
                                    href={route("register")}
                                    className="underline text-sm text-gray-200 hover:text-[#2470c6] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1feffe]"
                                >
                                    Create your Account here!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
