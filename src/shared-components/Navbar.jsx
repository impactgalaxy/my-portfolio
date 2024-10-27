import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";
import useUserState from "../authProvider/useUserState";

export default function Navbar() {
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [logBtn, setLogBtn] = useState(false);
  const { user, loading, loginByGoogle, logOut } = useUserState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const response = await loginByGoogle();
      console.log(response);
      toast({
        title: "Login successful",
        duration: "3000",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error!",
        description: "Please try again",
        duration: "3000",
        status: "error",
      });
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDownload = () => {
    fetch("https://my-portfolio-server-rho-tawny.vercel.app/download-pdf")
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response is not ok");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "resume_of_palash.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.log("Failed to fetch", error);
      });
  };
  // console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast({
          title: "Logout successful",
          duration: "3000",
          status: "success",
        });
      })
      .catch((error) => {
        toast({
          title: "Something wrong!",
          description: "Please try again.",
          duration: "3000",
          status: "error",
        });
      });
  };

  const handleGetNumberAndResume = () => {
    // if (!user) {
    //   return;
    // }
    setPhoneNumber(!phoneNumber);
  };
  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText("01580585374")
      .then(() => {
        toast({
          title: "Number copied",
          status: "success",
          position: "top-right",
        });
      })
      .catch((err) => {
        toast({
          title: "Error to copy",
          status: "error",
          position: "top-right",
        });
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-4 border-b-2">
        <div className="navbar-start">
          <div
            className="avatar"
            onClick={() => document.getElementById("my_modal_5").showModal()}>
            <div className="w-16 rounded-full hover:ring ring-offset-2 hover:transition-shadow cursor-pointer duration-1000">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocJ8SFj5C5hGXVQVhHMbZBNTo5JPCFNMV_w4eTkDiEHwGPSTWt3t=s96-c" />
            </div>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box bg-blue-gray-500">
                <div className="flex items-center justify-center flex-col gap-y-5 border-2 rounded-sm mx-auto shadow-2xl">
                  <div className="w-24">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocJ8SFj5C5hGXVQVhHMbZBNTo5JPCFNMV_w4eTkDiEHwGPSTWt3t=s96-c"
                      alt=""
                      title="Click to expand"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    />
                    <dialog className="modal" id="my_modal_2">
                      <div className="modal-box">
                        <div className="mx-auto">
                          <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocJ8SFj5C5hGXVQVhHMbZBNTo5JPCFNMV_w4eTkDiEHwGPSTWt3t=s96-c"
                            alt=""
                            className="object-cover "
                          />
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <p className="font-bold">Nur Mohammad Palash</p>
                </div>
                <div className="py-4">
                  <div className="flex items-center text-white">
                    <button
                      onClick={handleGetNumberAndResume}
                      className="btn btn-ghost">
                      {phoneNumber ? "Ok" : "Expand"}
                    </button>
                    {!phoneNumber ? (
                      <h1>to get Palash's phone number</h1>
                    ) : (
                      <div
                        onClick={handleCopyNumber}
                        title="Click to copy"
                        className="px-3 py-2 cursor-pointer font-semibold bg-blue-gray-400">
                        +880 1580-585374
                      </div>
                    )}
                  </div>
                  <button onClick={handleGoogleLogin}>Login please</button>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">OK</button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* <div className="absolute size-80 bg-blue-gray-500 top-1/2 left-1/2"></div> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex" onClick={onOpen}>
          <SlEnvolope className="text-2xl hover:rotate-45 transition-transform cursor-pointer" />
        </div>
        {user && (
          <div className="navbar-end">
            <button className="btn btn-outline mr-3" onClick={handleDownload}>
              RESUME
            </button>
            <div
              className="relative cursor-pointer"
              onClick={() => setLogBtn(!logBtn)}>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={user ? user?.photoURL : ""} />
                </div>
              </div>
              <button
                className={`absolute  top-full left-0  z-10 mt-3 p-2 btn btn-active ${
                  logBtn ? "block" : "hidden"
                }`}
                onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send me message</ModalHeader>
          <ModalCloseButton />

          <ModalBody className="space-x-5 p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
                <FormHelperText className="accent-light-blue-300">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register("name")} />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Send me your message"
                  {...register("message", {
                    required: true,
                  })}
                />
              </FormControl>
              <ModalFooter className="space-x-5">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
