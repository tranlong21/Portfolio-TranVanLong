import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}

const FormFeedabck = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {

    const toastid = toast.loading("Đang gửi tin nhắn, hãy đợi ...")
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          }
        }
      )
      .then(() => {
        toast.success("Cảm ơn đã góp ý!", {id: toastid});
      })
      .catch((error) => {
        toast.error("Góp ý thất bại, hãy thử lại.",{id: toastid})
      });
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Trần Văn Long",
      name: data.name,
      email: data.email,
      message: data.message
    };
    sendEmail(templateParams);
  };

  return (
    <>
    <Toaster richColors={true} />
    <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Xin chào! Tôi là Trần Văn Long.
          </h1>
          <p className="text-center font-light text-foreground">
            Tôi rất mong nhận được những góp ý chân thành từ bạn – dù là lời khen tích cực hay những lời nhận xét thẳng thắn. Mỗi góp ý đều là một món quà quý giá, giúp tôi có cơ hội nhìn lại bản thân, 
            nhận ra điểm mạnh để phát huy và những điểm chưa tốt để thay đổi. Tôi tin rằng, với sự hỗ trợ và đồng hành từ bạn, tôi có thể hoàn thiện mình hơn mỗi ngày và trở thành phiên bản tốt nhất của chính mình.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
          <input
            type="text"
            placeholder="Họ và Tên"
            {...register("name", {
              required: 'Trường này là bắt buộc!',
              minLength: {
                value: 3,
                message: "Tên phải có ít nhất 3 ký tự."
              }
            })}
            className="w-full p-2 rounded-md shadow-lg text-white bg-background/20 border border-accent/30 backdrop-blur-[6px] focus:bg-background/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          {errors.name && (
            <span className="inline-block self-start text-accent">
              {errors.name.message}
            </span>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full p-2 rounded-md shadow-lg text-white bg-background/20 border border-accent/30 backdrop-blur-[6px] focus:bg-background/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <textarea
            placeholder="Góp ý của bạn"
            {...register("message", { required: true })}
            className="w-full min-h-[120px] max-h-[300px] p-2 rounded-md shadow-lg text-white bg-background/20 border border-accent/30 backdrop-blur-[6px] focus:bg-background/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <input
            value="Góp ý ngay"
            type="submit"
            className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
          cursor-pointer capitalize"
          />
        </form>
      </article>
    </>
      
  );
};

export default FormFeedabck;
