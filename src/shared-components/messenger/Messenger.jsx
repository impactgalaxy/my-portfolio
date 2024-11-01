import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaMessage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import useUserState from "../../authProvider/useUserState";

export default function Messenger() {
  const [hideMessageBox, setHideMessageBox] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, loginByGoogle } = useUserState();
  const toast = useToast();
  const [msg, setMsg] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  useEffect(
    () => {
      const msg = async () => {
        try {
          const result = await axios.get(
            `http://localhost:5000/filteredMsg/${user?.email}`
          );
          setMsg(result.data);
        } catch (error) {
          console.log(error?.message);
        }
      };
      msg();
    },
    [user?.email],
    isSubmitting
  );

  const handleSentMessage = async (values) => {
    if (!user) {
      onOpen();
      return;
    }
    const { email, displayName, uid } = user;
    const obj = {
      email,
      displayName,
      uid,
      message: values.message,
      replay: "",
    };

    try {
      const response = await axios.post("http://localhost:5000/messages", obj);
      if (response.data.insertedId) {
        setFinishedLoad(true);
        reset();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginByGoogle();
      if (response) {
        toast({
          title: "Login successful",
          status: "success",
          position: "top-right",
        });
        onClose();
      }
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        position: "top-right",
      });
    }
  };
  const divRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the div
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="fixed bottom-4 right-3">
      <div
        className={`p-2 flex flex-col duration-1000 w-96 rounded-md  bg-white/45 dark:bg-[#1f2937] dark:text-white font-medium overflow-hidden ${
          !hideMessageBox ? "block" : "hidden"
        }`}>
        <div className="rounded-lg flex p-1 justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="font-black text-white">Send to Nur Mohammad Palash</h1>
          <span
            onClick={() => setHideMessageBox(true)}
            className="font-black cursor-pointer hover:duration-700 hover:bg-blue-gray-200/75
             rounded-sm px-3 py-2">
            X
          </span>
        </div>
        <div className="p-2 mt-2 flex-grow h-72 overflow-y-auto" ref={divRef}>
          <>
            {msg.length == 0 ? (
              <p className="text-center">Loading...</p>
            ) : (
              <>
                {msg.map((m) => (
                  <div key={m._id} className="">
                    <div className="flex justify-end mb-2">
                      <p className="bg-gray-800 inline-block p-1 rounded-md">
                        {m.message}
                      </p>
                    </div>
                    <p className="bg-gray-800 inline-block rounded-md p-1 mb-2">
                      {m.replay}
                    </p>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleSentMessage)}>
            <FormControl className="flex items-center">
              <Input placeholder="message" {...register("message")} />
              <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
                <IoSend className="ml-3 text-3xl cursor-pointer" />
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
      <FaMessage
        onClick={() => setHideMessageBox(false)}
        className={`duration-1000 text-5xl float-right cursor-pointer bg-blue-800 rounded-lg p-2 text-white ${
          hideMessageBox ? "block" : "hidden"
        }`}
        title="Open messenger"
      />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You need Login first to send me message</ModalHeader>

          <ModalBody>
            <ModalFooter className="space-x-4">
              <Button onClick={onClose}>No Need</Button>
              <Button colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
