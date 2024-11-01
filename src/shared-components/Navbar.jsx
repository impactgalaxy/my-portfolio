import {
  Button,
  FormControl,
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

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import useUserState from "../authProvider/useUserState";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [logBtn, setLogBtn] = useState(false);
  const { user, loading, loginByGoogle, logOut } = useUserState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const response = await loginByGoogle();
      try {
        await axios.post(
          "http://localhost:5000/nur_mohammad_palash_portfolios_users",
          response?.user
        );
      } catch (error) {
        // console.log(error);
      }
      toast({
        title: "Login successful",
        duration: "3000",
        status: "success",
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error!",
        description: "Please try again",
        duration: "3000",
        status: "error",
        position: "top-right",
      });
    }
  };

  const onSubmit = async (data) => {
    data.sendingTime = new Date();

    try {
      const response = await axios.post(
        "http://localhost:5000/users_message",
        data
      );
      if (response.data.insertedId) {
        reset();
        toast({
          title: "Message send successfully",
          description: "Thanks for your feedback",
          position: "top-right",
          duration: 5000,
          status: "success",
        });
      }
    } catch (error) {
      console.log(error?.message);
      toast({
        title: error?.message,
        position: "top-right",
        status: "error",
        duration: 3000,
      });
    }
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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast({
          title: "Logout successful",
          duration: "3000",
          status: "success",
          position: "top-right",
        });
      })
      .catch(() => {
        toast({
          title: "Something wrong!",
          description: "Please try again.",
          duration: "3000",
          status: "error",
          position: "top-right",
        });
      });
  };

  const handleGetNumberAndResume = () => {
    if (!user) {
      document.getElementById("my_modal_login").showModal();
      return;
    }
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
  const handleTheme = (e) => {
    const value = e.target.checked;
    if (value) {
      localStorage.setItem("theme", JSON.stringify(true));
      setTheme(true);
    } else {
      localStorage.setItem("theme", JSON.stringify(false));
      setTheme(false);
    }
  };
  useEffect(() => {
    const getValue = localStorage.getItem("theme");
    JSON.parse(getValue) ? setTheme(true) : setTheme(false);
    theme
      ? document.querySelector("html").setAttribute("class", "dark")
      : document.querySelector("html").setAttribute("class", "light");
  }, [theme]);

  return (
    <div>
      <div className="navbar dark:bg-[#1d232a] px-4 border-b-2">
        <div className=" fixed z-10 top-3 left-4 select-none">
          <div
            className="avatar"
            onClick={() => document.getElementById("my_modal_5").showModal()}>
            <div className="w-16 rounded-full hover:ring ring-offset-2 hover:transition-shadow cursor-pointer duration-1000">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocJ8SFj5C5hGXVQVhHMbZBNTo5JPCFNMV_w4eTkDiEHwGPSTWt3t=s96-c" />
            </div>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box bg-blue-gray-500">
                <div className="flex items-center justify-center flex-col gap-y-5 rounded-sm mx-auto shadow-2xl">
                  <div className="w-24">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocJ8SFj5C5hGXVQVhHMbZBNTo5JPCFNMV_w4eTkDiEHwGPSTWt3t=s96-c"
                      alt=""
                      title="Double click to expand"
                      onDoubleClick={() =>
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
                  {/* social links */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xl">
                      <BsLinkedin />
                      <a
                        className="block"
                        target="_blank"
                        href="https://www.linkedin.com/in/nur-mohammad-palash">
                        View linkedin
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                      <FaGithub />{" "}
                      <a
                        className="block"
                        target="_blank"
                        href="https://github.com/impactgalaxy?tab=repositories">
                        View github
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                      <FaFacebook />{" "}
                      <a
                        className="block"
                        target="_blank"
                        href="https://www.facebook.com/pisacoder">
                        View github
                      </a>
                    </div>
                  </div>
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
        <div className="navbar-start"></div>
        <div className="space-x-4">
          <NavLink
            to="/dashboard"
            className="font-bold text-lg dark:text-white">
            Dashboard
          </NavLink>
          <div className="navbar-center hidden lg:flex" onClick={onOpen}>
            <SlEnvolope className="text-3xl dark:text-white hover:rotate-12 hover:scale-110 duration-500 transition-transform cursor-pointer" />
          </div>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              checked={theme}
              onChange={handleTheme}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user && (
          <div className="navbar-end">
            <button
              className="btn btn-outline mr-3 dark:text-white"
              onClick={handleDownload}>
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

      <dialog id="my_modal_login" className="modal">
        <div className="modal-box bg-blue-gray-200">
          <div className="space-y-4">
            <p>
              Sir, I am really sorry to say you that, you know that mobile
              number is very important to everyone. If you see my mobile number
              you need to login first. I promise if you login once you don't
              need to login further.
            </p>
            <p>After login you will be able to download my CV.</p>
            <div className="modal-action">
              <button
                onClick={handleGoogleLogin}
                className={`btn btn-success ${user ? "hidden" : "block"}`}>
                Login please
              </button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                {user ? (
                  <button className="btn">Thanks</button>
                ) : (
                  <button className="btn">No need</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </dialog>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register("name")} />
              </FormControl>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input required type="email" {...register("email")} />

                <FormHelperText className="accent-light-blue-300">
                  <p>We'll never share your email.</p>
                </FormHelperText>
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
