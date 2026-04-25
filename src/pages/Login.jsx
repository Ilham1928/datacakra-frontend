/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { api } from "../utilities/api";
import { toast } from "../utilities/toast";
import Toast from "../components/Toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: false,
    password: false,
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

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleLogin = async () => {
    let valid = true;
    const newErrors = { email: false, password: false };

    if (!validateEmail(email)) {
      newErrors.email = true;
      valid = false;
    }

    if (!password) {
      newErrors.password = true;
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);

    const response = await api.post("auth/login", {
      email,
      password,
    });

    setLoading(false);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("raw", JSON.stringify(response.data.user));
    navigate("/dashboard");
  };

  const handleOAuth = (provider) => {
    console.log("OAuth:", provider);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") handleLogin();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [email, password]);

  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-white">
      {/* LEFT PANEL */}
      <div className="hidden md:flex w-105 bg-[#111] border-r border-[#242424] p-10 flex-col">
        <div className="flex items-center gap-2 mb-auto">
          <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center text-black">
            <Icon icon="heroicons:link-solid" />
          </div>
          <span className="font-bold">Datacakra Links</span>
        </div>

        <div className="my-auto">
          <h1 className="text-3xl font-bold mb-4">
            Satu link,
            <br />
            <span className="text-lime-400">semua</span>
            <br />
            kontenmu.
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            Platform link-in-bio terbaik untuk kreator Indonesia.
          </p>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <Icon width={15} icon="flat-color-icons:flash-on"></Icon>
              Setup cepat
            </p>
            <p className="flex items-center gap-2">
              <Icon width={15} icon="glyphs-poly:analytics" />
              Analytics real-time
            </p>
            <p>🎨 Custom bebas</p>
            <p>📱 Mobile first</p>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          "Traffic naik 3x lipat sejak pakai Datacakra Links."
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2">Selamat datang 👋</h1>
          <p className="text-gray-400 mb-6">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-lime-400 cursor-pointer"
            >
              Daftar
            </span>
          </p>

          {/* OAuth */}
          <button
            onClick={() => handleOAuth("google")}
            className="w-full mb-3 border border-gray-700 p-3 rounded-lg flex justify-center gap-2"
          >
            <Icon icon="logos:google-icon" />
            Masuk dengan Google
          </button>

          <button
            onClick={() => handleOAuth("github")}
            className="w-full mb-4 border border-gray-700 p-3 rounded-lg flex justify-center gap-2"
          >
            <Icon icon="mdi:github" />
            Masuk dengan GitHub
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-xs text-gray-500">atau</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: false });
              }}
              className={`w-full p-3 rounded-lg bg-[#181818] border ${
                errors.email ? "border-red-500" : "border-gray-700"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">Email tidak valid</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: false });
              }}
              className={`w-full p-3 rounded-lg bg-[#181818] border ${
                errors.password ? "border-red-500" : "border-gray-700"
              }`}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-400"
            >
              <Icon
                icon={
                  showPass ? "heroicons:eye-slash-solid" : "heroicons:eye-solid"
                }
              />
            </button>

            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                Password tidak boleh kosong
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleLogin}
            className="w-full bg-lime-400 text-black font-bold p-3 rounded-lg flex justify-center items-center gap-2"
          >
            {loading ? (
              <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></span>
            ) : (
              <>
                Masuk <Icon icon="heroicons:arrow-right-solid" />
              </>
            )}
          </button>
        </div>
      </div>
      <Toast {...notif} />
    </div>
  );
};

export default Login;
