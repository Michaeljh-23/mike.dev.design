import { useFormData } from "herotofu-react";
// import process from "dotenv";
const ContactForm = () => {
  const { formState, getFormSubmitHandler } = useFormData(
    import.meta.env.VITE_FORM_LINK
  );

  return (
    <>
      {!!formState.status && (
        <div className="py-2">Current form status is: {formState.status}</div>
      )}
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
            //   shadow-[inset_0_1rem_3rem_rgba(0,0,0,0.6)]
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring ring ring-white ring-[1px] relative w-full px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-0 rounded outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 w-fit mx-auto">
          <button
            className="text-white text-xl py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500"
            type="submit"
          >
            Submit Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
