import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import "aos/dist/aos.css";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaMessage } from "react-icons/fa6";

export default function Contacts() {
  const [display, setDisplay] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isLoading },
  } = useForm();
  const contacts = [
    {
      media_name: "Facebook",
      link: "https://www.facebook.com/pisacoder",
    },
    {
      media_name: "LinkedIn",
      link: "https://www.linkedin.com/in/nur-mohammad-palash",
    },
  ];

  const handleSendFeedback = (values) => {
    console.log(values);
  };
  const closeAndClearForm = () => {
    onClose();
    reset();
  };
  return (
    <div className={`p-5 flex bg-white/45 dark:bg-blue-gray-900 relative`}>
      <div className="w-3/12">
        <h1 className="font-black md:text-xl sticky top-24 dark:text-white">
          CONTACTS
        </h1>
      </div>
      <div className="w-full px-5">
        <div className="flex items-center justify-center p-10 flex-col gap-10">
          {contacts.map((con) => (
            <div
              key={con.link}
              className="lg:w-3/4 hover:bg-gray-400 hover:dark:bg-blue-gray-700 duration-700 dark:text-white md:p-2 rounded-xl">
              <h1 className="md:text-2xl font-bold">{con.media_name}</h1>
              <div className="space-y-4">
                <code className="text-xs hidden lg:block md:text-2xl">
                  {con.link}
                </code>
                <a
                  target="_blank"
                  className="inline-block"
                  href={`${con.link}`}>
                  <Button>Follow link</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Send me your valuable feedback</ModalHeader>

            <ModalBody>
              <form
                className="space-y-5"
                onSubmit={handleSubmit(handleSendFeedback)}>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" {...register("firstName")} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="First name" {...register("lastName")} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your message</FormLabel>
                  <Textarea
                    placeholder="Here is a sample placeholder"
                    {...register("message")}
                  />
                </FormControl>
                <ModalFooter>
                  <Button variant="ghost" mr={4} onClick={closeAndClearForm}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    colorScheme="blue">
                    Send
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal> */}
      </div>
    </div>
  );
}
