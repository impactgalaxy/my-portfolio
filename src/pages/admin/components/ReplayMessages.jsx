import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function ReplayMessages() {
  const { email, id } = useParams();
  const [msg, setMsg] = useState([]);
  const divRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
    const msg = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/filteredMsg/${email}`
        );
        setMsg(result.data);
      } catch (error) {
        console.log(error?.message);
      }
    };
    msg();
  }, []);
  const handleReplay = async (replay) => {
    replay.id = id;
    try {
      const response = await axios.patch(
        "http://localhost:5000/messageReplay",
        replay
      );
      if (response.data.modifiedCount > 0) {
        reset();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  window.onload = function () {
    const myDiv = document.getElementById("holder");
    myDiv.scrollTop = myDiv.scrollHeight;
  };

  return (
    <div className="w-1/2 mx-auto p-5">
      <div className="h-72 overflow-y-scroll space-y-4" ref={divRef}>
        {msg.map((m) => (
          <div key={m._id} className="">
            <p className="bg-gray-200 inline-block rounded-md p-1">
              {m.message}
            </p>
            <div className="flex justify-end mb-2">
              <p className="bg-gray-200 inline-block p-1 rounded-md">
                {m.replay}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(handleReplay)} className="mt-4">
        <div className="flex">
          <Input {...register("replay")} placeholder="Replay" />
          <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
            Replay
          </Button>
        </div>
      </form>
    </div>
  );
}
