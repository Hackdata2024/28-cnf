import { supabase } from "@/pages/api/supabase";
import { useForm } from "react-hook-form";
import styles from "../styles/sign.module.css";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const formSubmit = async (formdata) => {
        await supabase.auth.signInWithPassword({
            email: formdata.email,
            password: formdata.password,
        })
            .then(() => { reset({ email: "", password: "" }); toast("Login Successful!"); router.push('/') })
            .catch((error) => console.log(error))
    };
    return (
        <form onSubmit={handleSubmit(formSubmit)} className={styles.login_form}>
            <div className={styles.form_container}>
                <h2 className="text-center text-2xl">Account Information for Login</h2>
                <div className="flex flex-col gap-2 px-3 py-5">
                    {errors.lastName && <p className={styles.error}>Last Name is required.</p>}
                    <label className="label">Email</label>

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className={styles.input}
                    />
                    {errors.email && <p className={styles.error}>Email address is required.</p>}
                    <label className="label">Password</label>

                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                        className={styles.input}
                    />
                    {errors.password && <p className={styles.error}>Password is required.</p>}
                    <input className={styles.submit} type="submit" value="Login" />
                    <div>
                        <p className="text-center">
                            Already have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </form>
    )
}