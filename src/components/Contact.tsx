import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error" | "loading";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not defined.");
      return;
    }

    setIsSubmitting(true); // Disable form submission
    setToast({ type: "loading", message: "Sending..." });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      console.log("Email sent successfully");
      setToast({
        type: "success",
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setToast({
        type: "error",
        message: "Failed to send email...",
      });
    } finally {
      setIsSubmitting(false); // Enable form submission again
      setTimeout(() => {
        setToast(null);
      }, 10000); // Shortened the timeout to 10 seconds
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div
      id="contact-section"
      className="flex flex-col items-center justify-center min-h-screen text-center pt-20 pb-19 p-10"
      style={{
        background:
          "linear-gradient(90deg, hsla(321, 55%, 50%, 1) 0%, hsla(210, 91%, 39%, 1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {toast && (
        <div className="toast">
          <div
            className={`alert ${
              toast.type === "success"
                ? "alert-success"
                : toast.type === "error"
                  ? "alert-error"
                  : "alert-loading"
            } relative`}
          >
            <span>{toast.message}</span>
            <button
              className="absolute top-0 right-0 mt-1 mr-2 text-xl leading-none"
              onClick={closeToast}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center mb-8 w-full">
        <h2 className="text-sm uppercase tracking-widest text-yellow-300">
          Book an Appointment
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black mt-4">
          Schedule Your Session
        </h1>
      </div>

      <div className="flex flex-col items-center w-full max-w-md">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-1/2 md:pr-2">
              <label htmlFor="first-name" className="text-black self-start">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                name="first-name"
                className="mt-2 p-2 rounded-lg shadow-lg text-black w-full"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
              <label htmlFor="last-name" className="text-black self-start">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                name="last-name"
                className="mt-2 p-2 rounded-lg shadow-lg text-black w-full"
                required
              />
            </div>
          </div>

          <label htmlFor="email" className="mt-4 text-black self-start w-full">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-2 p-2 rounded-lg shadow-lg text-black w-full"
            required
          />

          <label htmlFor="date" className="mt-4 text-black self-start w-full">
            Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="mt-2 p-2 rounded-lg shadow-lg text-black w-full bigger-calendar"
            required
          />

          <label htmlFor="time" className="mt-4 text-black self-start w-full">
            Time
          </label>
          <input
            id="time"
            type="time"
            placeholder="HH:MM"
            name="time"
            className="mt-2 p-2 rounded-lg shadow-lg text-black w-full"
            required
          />

          <label
            htmlFor="message"
            className="mt-4 text-black self-start w-full"
          >
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="mt-2 p-2 rounded-lg shadow-lg text-black w-full"
          />

          <button
            type="submit"
            className={`mt-4 sm:mt-6 md:mt-8 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105 w-full ${
              isSubmitting ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
