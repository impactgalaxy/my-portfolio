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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SlEnvolope } from "react-icons/sl";
export default function Navbar() {
  // const [date, setDate] = useState(0);
  // const dateAndTime = () => {
  //   const date = new Date().toLocaleTimeString();
  //   setDate(date);
  // };
  // setInterval(dateAndTime, 1000);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="navbar bg-base-100 px-4 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <SlEnvolope className="text-2xl" />
            </ul>
          </div>
          <h1 className="font-bold text-lg">
            <span className="text-gray-700">Local</span>/{""}
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex" onClick={onOpen}>
          <SlEnvolope className="text-2xl hover:rotate-45 transition-transform cursor-pointer" />
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline ">RESUME</a>
        </div>
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
