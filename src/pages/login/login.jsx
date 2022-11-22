import "./loginPage.module.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import styles from "./loginPage.module.css";
import * as Yup from "yup";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("شماره موبایل یا ایمیل نادرست است")
        .required("وارد کردن ایمیل الزامی است"),

      password: Yup.string().required("وارد کردن پسورد الزامی است"),
    }),
    validateOnMount: true,
    enableReinitialize: true,
  });

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("clicked", setUser);
    navigate(user && "/");
  };

  return (
    <div className="container">
      <main className="col-sm-12 d-flex justify-content-center align-items-center">
        <div className="col-sm-5 d-flex flex-column">
          <Link
            to="/"
            className={`mb-2 text-decoration-none text-center ${styles.titleTopForm}`}
          >
            Admin Panel
          </Link>
          <form className={styles.formContainer} onSubmit={clickHandler}>
            <div className={styles.textAlign}>
              <h3 className={`${styles.titleForm}`}>ورود به پنل کاربری</h3>
            </div>
            <Input
              label="ایمیل / موبایل"
              name="email"
              formik={formik}
              type="email"
            />
            <Input label="رمز عبور" name="password" formik={formik} />
            <section className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center text-right">
                <input
                  type="checkbox"
                  name="remember"
                  className={`${styles.inputCheckBox}`}
                  value={true}
                />
                <label
                  htmlFor="remember"
                  className={`mr-2 ${styles.labelCheckBox}`}
                >
                  مرا به‌خاطر بسپار
                </label>
              </div>
              <div>
                <Link
                  to=""
                  className={`text-decoration-none ${styles.linkForgetPass}`}
                >
                  <p>رمز عبور را فراموش کرده‌اید؟</p>
                </Link>
              </div>
            </section>
            <button
              type="submit"
              className={styles.button}
              disabled={!formik.isValid}
            >
              ورود
            </button>
            <Link
              to="#"
              className={`text-start mt-2 text-decoration-none ${styles.headToSignup}`}
            >
              <p
                className={`text-decoration-none text-right ${styles.linkSingup}`}
              >
                هنوز عضو نشده‌اید؟ ثبت نام کنید
              </p>
            </Link>
            <div></div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
