import { supabase } from "@/pages/api/supabase";
import { useForm } from "react-hook-form";
import styles from "../styles/sign.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function SignUp() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const formData = watch();

    const formSubmit = async (formdata) => {
        await supabase.auth.signUp(
            {
                email: formdata.email,
                password: formdata.password,
                options: {
                    data: {
                        first_name: formdata.firstName,
                        last_name: formdata.lastName,
                        phone: formdata.phone,
                    }
                }
            }
        )
            .then(() => { reset({ firstName: "", lastName: "", email: "", phone: "", password: "" }); toast("Account Created! Login to Access Account!"); router.push('/login') })
            .catch((error) => console.log(error))
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)} className={styles.login_form}>
            <div className={styles.form_container}>
                <h2 className="text-center text-2xl">Account Information for Sign Up</h2>
                <div className="flex flex-col gap-2 px-3 py-5">
                    <label className="label">First Name</label>
                    <input
                        {...register("firstName", { required: true })}
                        placeholder="First name"
                        className={styles.input}
                    />

                    {errors.firstName && <p className={styles.error}>First Name is required.</p>}
                    <label className="label">Last Name</label>

                    <input
                        {...register("lastName", { required: true, minLength: 2 })}
                        placeholder="Last name"
                        className={styles.input}
                    />

                    {errors.lastName && <p className={styles.error}>Last Name is required.</p>}
                    <label className="label">Email</label>

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className={styles.input}
                    />
                    {errors.email && <p className={styles.error}>Email address is required.</p>}
                    <label className="label">Phone Number</label>

                    <input
                        type="tel"
                        {...register("phone", { required: true, valueAsNumber: true })}
                        placeholder="Phone Number"
                        className={styles.input}
                    />
                    {errors.phone && <p className={styles.error}>Phone Number is required.</p>}

                    <label className="label">Password</label>

                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        placeholder="Password"
                        className={styles.input}

                    />
                    {errors.password && <p className={styles.error}>Password is required and it should be atleast 6 characters.</p>}

                    <input className={styles.submit} type="submit" value="Sign Up" />
                    <div>
                        <p className="text-center">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </form>
    )
}