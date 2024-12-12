import { useFormData } from "herotofu-react";
import { useLocalStorage } from "@rehooks/local-storage";
import { useEffect } from "react";
const ContactForm = () => {
  const { formState, getFormSubmitHandler } = useFormData(
    import.meta.env.VITE_FORM_LINK
  );
  const [submitted, setSubmitted] = useLocalStorage("submitted", "false");

  const submitForm = () => {
    getFormSubmitHandler();
    setSubmitted("true");
  };

  useEffect(() => {
    if (formState.status === "success") {
      setSubmitted("true");
    }
  }, [formState.status, setSubmitted]);

  return (
    <>
      {/* {!!formState.status && (
        <div className="py-2">Current form status is: {formState.status}</div>
      )} */}
      <form
        onSubmit={getFormSubmitHandler()}
        className="bg-[#0F3C29] border neon-border border-pulse p-4 py-8"
      >
        <div className="w-full text-center pb-8">
          <h1 className="text-[28px] sm:text-[36px] md:text-[42px]">
            Get in Touch
          </h1>
        </div>
        <div className="pt-0 mb-4 grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            disabled={
              formState.status === "loading" ||
              formState.status === "success" ||
              JSON.parse(submitted)
            }
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            disabled={
              formState.status === "loading" ||
              formState.status === "success" ||
              JSON.parse(submitted)
            }
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            disabled={
              formState.status === "loading" ||
              formState.status === "success" ||
              JSON.parse(submitted)
            }
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 w-fit mx-auto">
          <button
            className="text-white text-xl py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500"
            type="submit"
            // not_initialized, loading, success, error
            disabled={
              formState.status === "loading" ||
              formState.status === "success" ||
              JSON.parse(submitted)
            }
          >
            {formState.status === "not_initialized" && !JSON.parse(submitted)
              ? "Submit Message"
              : formState.status === "loading"
              ? "Submitting..."
              : "Thank you!"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
