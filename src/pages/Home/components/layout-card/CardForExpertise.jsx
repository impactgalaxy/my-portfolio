import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function CardForExpertise({
  sl,
  title,
  description,
  price,
  features,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div key={sl}>
      <article className="p-5 lg:p-10 bg-deep-purple-700 rounded-md text-white">
        <p className="text-right">
          <span
            onClick={onOpen}
            className="text-2xl font-black hover:bg-blue-gray-900 px-5 py-3 rounded-full cursor-pointer text-center">
            +
          </span>
        </p>
        <h1 className="font-black text-lg">{sl}</h1>
        <h1 className="font-black text-2xl">{title}</h1>
        <h1 className="font-semibold text-xl mt-5">{description}</h1>
      </article>
      <Modal
        closeOnOverlayClick={false}
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <span className="font-black px-5 py-2 rounded-3xl border-2">
              Starts at {price}
            </span>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody className="flex items-center justify-center gap-4 flex-col lg:flex-row">
            <div>
              <h1 className="font-black text-2xl border-b-2 inline-block">
                {title}
              </h1>
              <div className=" mt-5 py-2">
                <h1 className="font-black text-2xl">Key Features</h1>
                <div>
                  {features.map((feature, ind) => (
                    <p className="font-bold text-lg text-gray-700 space-y-3">
                      {`(${ind + 1}) ${feature}`}
                    </p>
                  ))}
                </div>
              </div>
              <div className="space-x-4 py-4">
                <button className="btn rounded-3xl ">Get Started</button>
                <button className="btn rounded-3xl btn-outline">E-mail</button>
              </div>
            </div>
            {/*  */}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </div>
  );
}
