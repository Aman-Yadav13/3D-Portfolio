"use client";

import { Wolf } from "@/models/Wolf";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { FormEvent, Suspense, useRef, useState } from "react";
import { toast } from "sonner";
import "./styles.css";
import { Footer } from "./_components/footer";
import BackgroundIntro from "@/components/BgLayer";
import { IntroLoader } from "@/components/IntroLoader";

const ContactPage = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("04_Idle");

  const handleChange = ({
    target: { name, value },
  }: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("01_Run");
  const handleBlur = () => setCurrentAnimation("04_Idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("01_Run");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Aman Yadav",
          from_email: form.email,
          to_email: "amanytests01@gmail.com",
          message: form.message,
          services: form.services,
          organization: form.organization,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Email sent successfully. We will connect with you soon!"
          );
          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              message: "",
              organization: "",
              services: "",
            });
          }, 3000);
          setCurrentAnimation("04_Idle");
        },
        (error) => {
          toast.error("Something went wrong");
          setLoading(false);
          setCurrentAnimation("04_Idle");
        }
      );
  };

  return (
    <>
      <BackgroundIntro />
      <main className="h-auto w-full bg-gray-900 overflow-hidden">
        <div className="relative lg:px-48 md:px-36 px-6 pt-4 lg:pt-16 pb-10">
          <div className="flex flex-col lg:w-4/6 lg:gap-8 w-full gap-6">
            <div className="flex flex-col gap-2 font-semibold">
              <p className="lg:text-6xl text-slate-200 text-4xl">
                Ready to Dive In?
              </p>
              <p className="lg:text-5xl text-3xl text-slate-200">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#cd22e6] to-[#df97e8] bg-clip-text text-transparent">
                  Connect
                </span>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="w-full flex flex-col gap-5 lg:font-light font-extralight"
            >
              <div className="flex flex-col gap-3">
                <label className="contact-label">What's your name?</label>
                <input
                  placeholder="John Doe*"
                  className="contact-input"
                  required
                  type="text"
                  name="name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="contact-label">What's your email?</label>
                <input
                  className="contact-input"
                  placeholder="johndoe123@gmail.com*"
                  type="email"
                  required
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="contact-label">
                  What's the name of your organization?
                </label>
                <input
                  className="contact-input"
                  placeholder="Company Name"
                  type="text"
                  name="organization"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="contact-label">
                  What services are you looking for?
                </label>
                <input
                  placeholder="Frontend/FullStack"
                  className="contact-input"
                  type="text"
                  name="services"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={form.services}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="contact-label">Your message</label>
                <textarea
                  className="resize-none mb-20 bg-transparent border border-slate-500 rounded-md px-2 py-2 text-white text-lg overflow-hidden min-h-40"
                  placeholder="Your message*"
                  rows={4}
                  name="message"
                  value={form.message}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="-mt-16">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-cyan-700 py-2 px-4 text-slate-200 hover:text-white border border-slate-200 hover:border-white font-semibold rounded-lg text-xl hover:bg-cyan-900 transition-all"
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>
              </div>
            </form>
            <div className="min-h-[300px] min-w-[350px] h-[300px] w-[450px] self-center">
              <Canvas
                className="h-full w-full"
                camera={{
                  position: [0, 0, 1],
                  fov: 75,
                  near: 0.1,
                  far: 1000,
                }}
              >
                <directionalLight position={[0, 0, 1]} intensity={2.5} />
                <ambientLight intensity={1} />
                <pointLight position={[5, 10, 0]} intensity={2} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                />

                <Suspense fallback={<IntroLoader />}>
                  <Wolf
                    currentAnimation={currentAnimation}
                    //@ts-ignore
                    position={[0.3, 0.2, 0]}
                    rotation={[0, -6, 0]}
                    scale={[0.7, 0.7, 0.7]}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <hr className="bg-gray-500 lg:w-4/6 w-full -mt-10" />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
