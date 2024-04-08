import toast from "react-hot-toast";

//! Kullanılan toast kütüphanesi => Hot toast

const toastNotify = (type, message) => {
  switch (type) {
    //! Başarılı işlem bildirimi
    case "success":
      toast.success(message, {
        position: "bottom-right",
        duration: 4000,
        style: {
          fontSize:"20px",
        },
      });
      break;
    //! Hatalı işlem bildirimi  
    case "error":
      toast.error(message, {
        position: "bottom-right",
        duration: 4000,
        style: {
          fontSize:"20px",
        },
      });
  }
};

export default toastNotify;
