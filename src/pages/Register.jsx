import { useEffect, useState } from "react";
import { api } from "../utilities/api";
import { useNavigate } from "react-router-dom";
import { toast } from "../utilities/toast";
import Toast from "../components/Toast";

const EyeIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [step] = useState(1);
  const [passVisible, setPassVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [strength, setStrength] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPass: "",
    url: "",
    agree: false,
  });
  const [notif, setNotif] = useState({
    show: false,
    title: "",
    detail: "",
  });

  useEffect(() => {
    const handler = (data) => {
      setNotif({
        show: true,
        title: data.title,
        detail: data.detail,
      });

      setTimeout(() => {
        setNotif((prev) => ({ ...prev, show: false }));
      }, 3000);
    };

    toast.subscribe(handler);

    return () => toast.unsubscribe(handler);
  }, []);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const checkStrength = (val) => {
    const checks = [
      val.length >= 8,
      /[A-Z]/.test(val),
      /[0-9]/.test(val),
      /[^A-Za-z0-9]/.test(val),
    ];
    setStrength(checks.filter(Boolean).length);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    if (name === "password") checkStrength(value);
  };

  const handleSubmit = async () => {
    let err = {};
    if (!form.fullName) err.fullName = "Nama wajib diisi";
    if (!validateEmail(form.email)) err.email = "Email tidak valid";
    if (form.password.length < 8) err.password = "Min 8 karakter";
    if (form.password !== form.confirmPass)
      err.confirmPass = "Password tidak sama";
    if (!form.url) err.url = "URL wajib diisi";
    if (!form.agree) err.agree = true;
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setLoading(true);

    const response = await api.post("auth/register", {
      name: form.fullName,
      email: form.email,
      password: form.password,
      url: form.url,
    });

    setLoading(false);
    if (response.code >= 200 && response.code < 300) {
      setNotif({
        show: true,
        title: "Success",
        detail: "Registration Succeed",
      });

      navigate("/login");
    }
  };

  const strengthLabels = ["", "Lemah", "Cukup", "Kuat", "Sangat kuat"];
  const strengthColors = [
    "",
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-400",
  ];

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      {/* LEFT PANEL */}
      <div className="w-95 bg-[#111] border-r border-[#242424] p-8 hidden md:flex flex-col">
        <h1 className="font-bold text-lg">Datacakra Links</h1>

        <div className="my-auto">
          <p className="text-2xl font-extrabold mb-5">
            Mulai dalam <span className="text-lime-400">2 langkah</span>
          </p>

          <div className="space-y-3 mt-4">
            {[
              { i: 1, label: "Isi data akun" },
              { i: 2, label: "Mulai gunakan" },
            ].map(({ i, label }) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                  ${step === i ? "bg-lime-400 text-black" : step > i ? "bg-lime-400/20 text-lime-400" : "bg-[#1a1a1a] text-gray-600"}`}
                >
                  {step > i ? "✓" : i}
                </div>
                <span
                  className={`text-sm ${step === i ? "text-white font-medium" : step > i ? "text-lime-400/70" : "text-gray-600"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-600">
          © 2025 Datacakra. All rights reserved.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div
          className={`w-full max-w-sm transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-xl font-bold mb-1">Buat akun baru 🚀</h1>
          <p className="text-gray-500 text-sm mb-5">
            Sudah punya akun?{" "}
            <a href="/login" className="text-lime-400 hover:text-lime-300">
              Login di sini
            </a>
          </p>

          <div className="space-y-3">
            {/* Full Name */}
            <div>
              <input
                name="fullName"
                placeholder="Nama Lengkap"
                className={`w-full px-3 py-2.5 rounded-lg bg-[#181818] text-sm border ${
                  errors.fullName ? "border-red-500/50" : "border-[#2a2a2a]"
                } focus:outline-none focus:border-lime-400/50 placeholder-gray-600`}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                placeholder="Email"
                className={`w-full px-3 py-2.5 rounded-lg bg-[#181818] text-sm border ${
                  errors.email ? "border-red-500/50" : "border-[#2a2a2a]"
                } focus:outline-none focus:border-lime-400/50 placeholder-gray-600`}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input
                  name="password"
                  type={passVisible ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full px-3 py-2.5 pr-10 rounded-lg bg-[#181818] text-sm border ${
                    errors.password ? "border-red-500/50" : "border-[#2a2a2a]"
                  } focus:outline-none focus:border-lime-400/50 placeholder-gray-600`}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setPassVisible(!passVisible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <EyeIcon open={passVisible} />
                </button>
              </div>

              {/* Strength Bar */}
              {form.password && (
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="flex gap-1 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-0.5 flex-1 rounded-full transition-colors ${
                          i <= strength
                            ? strengthColors[strength]
                            : "bg-[#2a2a2a]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {strengthLabels[strength]}
                  </span>
                </div>
              )}
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  name="confirmPass"
                  type={confirmVisible ? "text" : "password"}
                  placeholder="Konfirmasi Password"
                  className={`w-full px-3 py-2.5 pr-10 rounded-lg bg-[#181818] text-sm border ${
                    errors.confirmPass
                      ? "border-red-500/50"
                      : "border-[#2a2a2a]"
                  } focus:outline-none focus:border-lime-400/50 placeholder-gray-600`}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setConfirmVisible(!confirmVisible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <EyeIcon open={confirmVisible} />
                </button>
              </div>
              {errors.confirmPass && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.confirmPass}
                </p>
              )}
            </div>

            <div>
              <input
                name="url"
                placeholder="URL untuk BIO kamu"
                className={`w-full px-3 py-2.5 rounded-lg bg-[#181818] text-sm border ${
                  errors.url ? "border-red-500/50" : "border-[#2a2a2a]"
                } focus:outline-none focus:border-lime-400/50 placeholder-gray-600`}
                onChange={handleChange}
              />
              {errors.url && (
                <p className="text-red-400 text-xs mt-1">{errors.url}</p>
              )}
            </div>

            {/* Agree */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={handleChange}
                  className="accent-lime-400 w-3.5 h-3.5"
                />
                <span>
                  Setuju dengan{" "}
                  <a href="/terms" className="text-lime-400 hover:underline">
                    syarat & ketentuan
                  </a>
                </span>
              </label>
              {errors.agree && (
                <p className="text-red-400 text-xs mt-1">
                  Harus disetujui terlebih dahulu
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-lime-400 hover:bg-lime-300 disabled:opacity-60 text-black py-2.5 rounded-lg text-sm font-bold transition-colors mt-1"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Memproses...
                </span>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </div>
        </div>
      </div>
      <Toast {...notif} />
    </div>
  );
};

export default Register;
